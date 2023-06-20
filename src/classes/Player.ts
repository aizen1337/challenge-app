import Objective from "./Objective";

export default class Player {
    readonly id: string;
    public objectives: Objective[] = [];
    constructor(id: string, objectives: Objective[]) {
        this.id = id
        this.objectives = objectives;
    }
}