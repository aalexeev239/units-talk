import { Counter, ICounter } from "../counter";

describe('Template', () => {
    describe("Counter", () => {
        it("test", () => {
            const counter = new Counter({ value: 0 });

            expect(counter.value).toBe(0);
        });
    });

    describe("Counter2", () => {
        it("test", () => {
            const stateMock: ICounter = { value: 0 };
            const counter = new Counter(stateMock);

            expect(counter.value).toBe(0);
        });
    });

    describe("Counter3", () => {
        let stateMock: ICounter;
        let counter: Counter;

        beforeEach(() => {
            stateMock = { value: 0 };
            counter = new Counter(stateMock);
        });

        it("test", () => {
            expect(counter.value).toBe(0);
        });
    });

});
