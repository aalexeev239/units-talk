import {MAX_VALUE, ResetCounter} from '../resetCounter';

describe('Testing constants', () => {
    describe('Bad', () => {
        it(`if called with argument ${MAX_VALUE}, increase value by ${MAX_VALUE}`, () => {
            const counter = new ResetCounter({ value: 0 });

            counter.increment(MAX_VALUE);
            expect(counter.value).toBe(MAX_VALUE);
        });

        it(`if called with argument ${MAX_VALUE + 1}, reset to 0`, () => {
            const counter = new ResetCounter({ value: 0 });

            counter.increment(MAX_VALUE + 1);
            expect(counter.value).toBe(0);
        });
    });

    describe('Better', () => {
        it('if called with argument 100, increase value by 100', () => {
            const counter = new ResetCounter({ value: 0 });

            counter.increment(100);
            expect(counter.value).toBe(100);
        });

        it('if called with argument 101, reset value to 0', () => {
            const counter = new ResetCounter({ value: 0 });

            counter.increment(101);
            expect(counter.value).toBe(0);
        });
    });

});
