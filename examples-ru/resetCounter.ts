import {Counter} from './counter';

export const MAX_VALUE = 100;

export class ResetCounter extends Counter {
    private reset() {
        this.state.value = 0;
    }

    increment(value: number = 1) {
        super.increment(value);

        if (this.value > MAX_VALUE) {
            this.reset();
        }
    }

    incrementWithReturn(value: number = 1) {
        super.increment(value);

        const result = this.value;

        if (result > MAX_VALUE) {
            this.reset();
        }

        return result;
    }
}
