import Objective from "./Objective";

export default class Player {
    readonly id: string;
    protected steps = 0;
    protected objectives: Objective[] = [];
    constructor(id: string) {
        this.id = id
    }
    setSteps(amount: number) {
        this.steps = amount
    }
    addObjective(objective: Objective) {
        this.objectives.push(objective);
    }
}