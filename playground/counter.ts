export interface ICounter {
    value: number;
}

export class Counter {
    private state: ICounter = {value: 0};

    constructor(state: ICounter) {
        this.state = state;
    }

    get value(): number {
        return this.state.value;
    }

    increment(value: number = 1) {
        this.state = {
            ...this.state,
            value: this.state.value + value
        }
    }
}
