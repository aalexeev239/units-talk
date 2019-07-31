import { Counter, ICounter } from "../counter";

describe("DRY", () => {
    describe("Плохо", () => {
        describe("increment", () => {
            it("если вызывается с аргументом 1, значение увеличивается на 1", () => {
                const counter = new Counter({ value: 0 });
                counter.increment(1);
                expect(counter.value).toBe(1);
            });

            it("если вызывается с аргументом 2, значение увеличивается на 2", () => {
                const counter = new Counter({ value: 0 });
                counter.increment(2);
                expect(counter.value).toBe(2);
            });
        });
    });

    describe("Лучше", () => {
        describe("increment", () => {
            let counter;

            beforeEach(() => {
                counter = new Counter({ value: 0 });
            });

            it("если вызывается с аргументом 1, значение увеличивается на 1", () => {
                counter.increment(1);
                expect(counter.value).toBe(1);
            });

            it("если вызывается с аргументом 2, значение увеличивается на 2", () => {
                counter.increment(2);
                expect(counter.value).toBe(2);
            });
        });
    });

    describe("Проблема 1 – не изолированные тесты", () => {
        describe("increment", () => {
            const counter = new Counter({ value: 0 });

            it("если вызывается с аргументом 1, значение увеличивается на 1", () => {
                counter.increment(1);
                expect(counter.value).toBe(1);
            });

            it("[этот тест упадет] если вызывается с аргументом 2, значение увеличивается на 2", () => {
                counter.increment(2);
                expect(counter.value).toBe(2);
                // Expected: 2
                // Received: 3
            });
        });
    });

    describe("Проблема 2 – использование моков", () => {
        const mock = { value: 0 };

        describe("increment", () => {
            let counter;

            beforeEach(() => {
                counter = new Counter(mock);
            });

            it("если вызывается с аргументом 1, значение увеличивается на 1", () => {
                counter.increment(1);
                expect(counter.value).toBe(1);
            });

            it("[этот тест упадет] если вызывается с аргументом 2, значение увеличивается на 2", () => {
                counter.increment(2);
                expect(counter.value).toBe(2);
                // Expected: 2
                // Received: 3
            });
        });
    });

    describe("Проблема 2 исправлена – использование моков", () => {
        function getMock(): ICounter {
            return { value: 0 };
        }

        let counter;

        beforeEach(() => {
            counter = new Counter(getMock());
        });

        it("если вызывается с аргументом 1, значение увеличивается на 1", () => {
            counter.increment(1);
            expect(counter.value).toBe(1);
        });

        it("если вызывается с аргументом 2, значение увеличивается на 2", () => {
            counter.increment(2);
            expect(counter.value).toBe(2);
        });
    });
});
