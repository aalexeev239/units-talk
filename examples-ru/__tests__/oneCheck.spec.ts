import { ResetCounter } from "../resetCounter";

describe("Одна проверка – один тест", () => {
    describe("Плохо", () => {
        it("если вызывается с аргументом 101, сбрасывает значение в 0, но возвращает 101", () => {
            const counter = new ResetCounter({ value: 0 });

            const result = counter.incrementWithReturn(101);

            expect(counter.value).toBe(0);
            expect(result).toBe(101);
        });

        it("[добавим ошибку и тест упадет] если вызывается с аргументом 101, сбрасывает значение в 0, но возвращает 101", () => {
            const counter = new ResetCounter({ value: 1 });

            const result = counter.incrementWithReturn(101);

            expect(counter.value).toBe(0);
            expect(result).toBe(101);
        });
    });

    describe("Лучше", () => {
        it("если вызывается с аргументом 101, сбрасывает значение в 0", () => {
            const counter = new ResetCounter({ value: 0 });

            const result = counter.incrementWithReturn(101);

            expect(counter.value).toBe(0);
        });

        it("[добавим ошибку и тест не упадет] если вызывается с аргументом 101, сбрасывает значение в 0", () => {
            const counter = new ResetCounter({ value: 1 });

            const result = counter.incrementWithReturn(101);

            expect(counter.value).toBe(0);
        });

        it("если вызывается с аргументом 101, возвращает 101", () => {
            const counter = new ResetCounter({ value: 0 });

            const result = counter.incrementWithReturn(101);

            expect(result).toBe(101);
        });

        it("[добавим ошибку и тест упадет] если вызывается с аргументом 101, возвращает 101", () => {
            const counter = new ResetCounter({ value: 1 });

            const result = counter.incrementWithReturn(101);

            expect(result).toBe(101);
        });
    });
});
