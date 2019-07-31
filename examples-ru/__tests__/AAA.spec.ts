import { Counter, ICounter } from "../counter";

describe("AAA – Arrange, Act, Assert", () => {
    describe("Один тест", () => {
        it("increment | если вызывается с аргументом 1, значение увеличивается на 1", () => {
            //arrange
            const counter = new Counter({ value: 0 });

            //act
            counter.increment(1);

            //assert
            expect(counter.value).toBe(1);
        });
    });

    describe("Несколько тестов", () => {
        describe("increment | увеличение значения", () => {
            let counter: Counter;

            beforeEach(() => {
                //arrange
                counter = new Counter({ value: 0 });
            });

            it("если вызывается без аргументов, значение увеличивается на 1", () => {
                //act
                counter.increment();

                //assert
                expect(counter.value).toBe(1);
            });

            it("если вызывается с аргументом 2, значение увеличивается на 2", () => {
                //act
                counter.increment(2);

                //assert
                expect(counter.value).toBe(2);
            });
        });
    });
});
