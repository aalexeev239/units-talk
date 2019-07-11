import {Counter} from './counter';

export const MAX_VALUE = 100;

export class FlushCounter extends Counter {
    private flush() {
        this.state.value = 0;
    }

    increment(value: number = 1) {
        super.increment(value);

        if (this.value > MAX_VALUE) {
            this.flush();
        }
    }
}
