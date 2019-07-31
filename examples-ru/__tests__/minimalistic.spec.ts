import { Counter } from "../counter";

describe('Минимально проходимые тесты', () => {
    describe("Плохо", () => {
        it("инициализируется с переданным значением", () => {
            const counter = new Counter({ value: 19 });

            expect(counter.value).toBe(19); // why 19?
        });
    });

    describe("Лучше", () => {
        it("инициализируется с переданным значением", () => {
            const counter = new Counter({ value: 0 });

            expect(counter.value).toBe(0);
        });
    });
});
