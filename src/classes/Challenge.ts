import { collection, addDoc } from "firebase/firestore";
import { database } from "../lib/firebase";
import Player from "./Player";
import ChallengeDataType from "./ChallengeDataType";
export default class Challenge {
    private challenge_length = 30
    private players: Player[]
    private title = 'Challenge'
    constructor(title?: string, challenge_length?: number, ...players: Player[]) {
        this.checkChallengeLength(challenge_length);
        challenge_length && (this.challenge_length = challenge_length);
        title && (this.title = title)
        this.players = [...players]
        this.setupChallenge()
    }
    async setupChallenge() {
        const playersArray = this.players.map((player) => player.id)
        const challengeData: ChallengeDataType = {}
        for(let day = 1; day <= this.challenge_length; day++) {
            challengeData[day] = []
            for(const player of this.players) {
                const playerObject = {
                    [player.id]: [] as {[key: string]: boolean}[]
                }
                for(const objective of player.objectives) {
                    playerObject[player.id].push({[objective.goal]: objective.state})
                }
                challengeData[day].push(playerObject)
            }
        }
        const reference = await addDoc(collection(database, 'challenges'), {
            title: this.title,
            players: playersArray,
            data: challengeData,
        })
        return reference.id
    }
    checkChallengeLength(challenge_length?: number) {
        if(challenge_length && challenge_length < 7) {
            throw new Error("Challenge cannot be shorter than 7 days ")
        }
        else if(challenge_length && challenge_length > 180) {
            throw new Error("Challenge cannot be longer than 180 days")
        }
    }
}