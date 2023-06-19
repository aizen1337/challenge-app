import { collection, addDoc, updateDoc } from "firebase/firestore";
import { database } from "../lib/firebase";
import Player from "./Player";
export default class Challenge {
    private challenge_length = 30
    private players: Player[]
    constructor(challenge_length?: number, ...players: Player[]) {
        this.checkChallengeLength(challenge_length);
        challenge_length && (this.challenge_length = challenge_length);
        this.players = [...players]
        this.setupChallenge()
    }
    async setupChallenge() {
        const createdChallenge = await addDoc(collection(database, 'challenges'),{})
        const challengeData = new Map()
        for(let day = 0; day <= this.challenge_length; day++) {
            challengeData.set(day, null)
            for(const player of this.players) {
                const playerObject = new Map()
                playerObject.set(player.id, player.objectives)
                challengeData.set(day, playerObject)
            }
        }
        return updateDoc(createdChallenge, {challengeData})
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