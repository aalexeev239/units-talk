export interface ICounter {
    value: number;
}

export class Counter {
    constructor(protected state: ICounter) {}

    get value(): number {
        return this.state.value;
    }

    increment(value: number = 1) {
        this.state.value = this.state.value + value;
    }
}
