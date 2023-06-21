import Player from "./Player"
export default interface ChallengeDataType {
    [key: number]: [
        {
            [playerId: Player['id']]: {[key: string]: boolean}[]
        }
    ] | unknown[];
}