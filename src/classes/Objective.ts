export default class Objective {
    [key: string]: boolean
    constructor(key: string, state: boolean) {
        this[key] = state
    }
}