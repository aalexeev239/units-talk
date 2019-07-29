import { Counter, ICounter } from "../counter";

describe("AAA – Arrange, Act, Assert", () => {
    describe("Одиночный тест", () => {
        it("increments value by one", () => {
            //arrange
            const counter = new Counter({ value: 0 });

            //act
            counter.increment(1);

            //assert
            expect(counter.value).toBe(1);
        });
    });

    describe("Multi", () => {
        describe("increment", () => {
            let counter: Counter;

            beforeEach(() => {
                //arrange
                counter = new Counter({ value: 0 });
            });

            it("increments value by 1 if no argument passed", () => {
                //act
                counter.increment();

                //assert
                expect(counter.value).toBe(1);
            });

            it("increments value by 2 if argument 2 passed", () => {
                //act
                counter.increment(2);

                //assert
                expect(counter.value).toBe(2);
            });
        });
    });
});
