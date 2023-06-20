import Objective from "./Objective";
import Player from "./Player"
export default interface ChallengeDataType {
    [key: number]: [
        {
            [playerId: Player['id']]: Objective[]
        }
    ] | unknown[];
}