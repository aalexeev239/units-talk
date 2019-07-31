import { Counter, ICounter } from "../counter";

describe("AAA – Arrange, Act, Assert", () => {
    describe("Один тест", () => {
        it("increment | увеличивает значение на 1", () => {
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

            it("увеличивает значение на 1, если не передано аргументов", () => {
                //act
                counter.increment();

                //assert
                expect(counter.value).toBe(1);
            });

            it("увеличивает значение на 2, вызвано с аргументом 2", () => {
                //act
                counter.increment(2);

                //assert
                expect(counter.value).toBe(2);
            });
        });
    });
});
