export default class Objective {
    public goal: string
    public state: boolean
    constructor(goal: string, state: boolean) {
        this.goal = goal
        this.state = state
    }
}