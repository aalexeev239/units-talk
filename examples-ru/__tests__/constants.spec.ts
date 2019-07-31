import {MAX_VALUE, ResetCounter} from '../resetCounter';

describe('Тестирование констант', () => {
    describe('Плохо', () => {
        it(`если вызывается с аргументом ${MAX_VALUE}, значение увеличивается на ${MAX_VALUE}`, () => {
            const counter = new ResetCounter({ value: 0 });

            counter.increment(MAX_VALUE);
            expect(counter.value).toBe(MAX_VALUE);
        });

        it(`если вызывается с аргументом ${MAX_VALUE + 1}, значение сбрасывается в 0`, () => {
            const counter = new ResetCounter({ value: 0 });

            counter.increment(MAX_VALUE + 1);
            expect(counter.value).toBe(0);
        });
    });

    describe('Лучше', () => {
        it('если вызывается с аргументом 100, значение увеличивается на 100', () => {
            const counter = new ResetCounter({ value: 0 });

            counter.increment(100);
            expect(counter.value).toBe(100);
        });

        it('если вызывается с аргументом 101, значение сбрасывается в 0', () => {
            const counter = new ResetCounter({ value: 0 });

            counter.increment(101);
            expect(counter.value).toBe(0);
        });
    });

});
