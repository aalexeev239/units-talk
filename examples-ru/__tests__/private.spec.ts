import {ResetCounter} from '../resetCounter';

describe('Тестирование приватных методов', () => {
    describe("Плохо", () => {
        it("reset работает", () => {
            const resetCounter = new ResetCounter({value: 10});

            (resetCounter as any).reset();

            expect(resetCounter.value).toBe(0);
        });
    });

    describe("Тоже плохо", () => {
        it("reset вызывается при увеличении значения на 100", () => {
            const resetCounter = new ResetCounter({value: 100});

            const spy = jest.spyOn((resetCounter as any), 'reset');

            resetCounter.increment(1);

            expect(spy).toHaveBeenCalled();
        });
    });

    describe('Лучше', () => {
        it("значение сбрасывается вызывается при увеличении значения на 100", () => {
            const resetCounter = new ResetCounter({value: 100});

            resetCounter.increment(1);

            expect(resetCounter.value).toBe(0);
        });
    });
});
