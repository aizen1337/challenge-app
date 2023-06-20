export default class Objective {
    private goal: string
    private state: boolean
    constructor(goal: string, state: boolean) {
        this.goal = goal
        this.state = state
    }
}