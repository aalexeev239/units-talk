import { Counter } from "../counter";

describe('Minimum Passable Tests', () => {
    describe("Bad", () => {
        it("initialises with passed value", () => {
            const counter = new Counter({ value: 19 });

            expect(counter.value).toBe(19); // why 19?
        });
    });

    describe("Better", () => {
        it("initialises with passed value", () => {
            const counter = new Counter({ value: 0 });

            expect(counter.value).toBe(0);
        });
    });
});
