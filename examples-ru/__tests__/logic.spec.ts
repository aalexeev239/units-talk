import { ResetCounter } from "../resetCounter";

describe("Логика в тестах", () => {
    function testIncrement(value, expected) {
        const counter = new ResetCounter({ value: 0 });

        counter.increment(value);

        expect(counter.value).toBe(expected);
    }

    describe("Плохо", () => {
        it("increment работает", () => {
            const testData = [[0, 0], [1, 1], [10, 10], [100, 100], [101, 0]];

            testData.forEach(([value, expected]) =>
                testIncrement(value, expected)
            );
        });
    });

    describe("Хуже", () => {
        it("increment работает", () => {
            let value = 0;

            while (value < 200) {
                if (value <= 100) {
                    testIncrement(value, value);
                } else {
                    testIncrement(value, 0);
                }

                value += 1;
            }
        });
    });

    describe("Лучше", () => {
        it("если вызывается с аргументом 100, значение увеличивается на 100", () => {
            const counter = new ResetCounter({ value: 0 });

            counter.increment(100);
            expect(counter.value).toBe(100);
        });

        it("если вызывается с аргументом 101, значение сбрасывается в 0", () => {
            const counter = new ResetCounter({ value: 0 });

            counter.increment(101);
            expect(counter.value).toBe(0);
        });
    });
});
