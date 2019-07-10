export interface ICounter {
    value: number;
}

export class Counter {
    constructor(private state: ICounter) {}

    get value(): number {
        return this.state.value;
    }

    increment(value: number = 1) {
        this.state = {
            ...this.state,
            value: this.state.value + value
        };
    }
}
