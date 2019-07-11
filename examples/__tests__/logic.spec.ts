import {MAX_VALUE, ResetCounter} from '../resetCounter';

describe('Logic in tests', () => {
    function testIncrement(value, expected) {
        const counter = new ResetCounter({ value: 0 });

        counter.increment(value);

        expect(counter.value).toBe(expected);
    }

    describe("Bad", () => {
        it("increment works", () => {
            const testData = [
                [0, 0],
                [1, 1],
                [10, 10],
                [100, 100],
                [101, 0]
            ];

            testData.forEach(([value, expected]) => testIncrement(value, expected))
        });
    });

    describe("Worse", () => {
        it("increment works", () => {
            let value = 0;

            while(value < 200) {
                if (value <= 100) {
                    testIncrement(value, value)
                } else {
                    testIncrement(value, 0)
                }

                value += 1;
            }
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
