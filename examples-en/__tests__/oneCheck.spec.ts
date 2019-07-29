import { Counter, ICounter } from "../counter";
import {ResetCounter} from '../resetCounter';

describe('One test – one check', () => {
    describe("Bad", () => {
        it("if called with argument 101, reset value to 0 but return 101", () => {
            const counter = new ResetCounter({ value: 0 });

            const result = counter.incrementWithReturn(101);

            expect(counter.value).toBe(0);
            expect(result).toBe(101);
        });

        it("[add error and this will fail]", () => {
            const counter = new ResetCounter({ value: 1 });

            const result = counter.incrementWithReturn(101);

            expect(counter.value).toBe(0);
            expect(result).toBe(101);
        });
    });

    describe('Better', () => {
        it("if called with argument 101, reset value to 0", () => {
            const counter = new ResetCounter({ value: 0 });

            const result = counter.incrementWithReturn(101);

            expect(counter.value).toBe(0);
        });

        it("[add error and this won't fail]", () => {
            const counter = new ResetCounter({ value: 1 });

            const result = counter.incrementWithReturn(101);

            expect(counter.value).toBe(0);
        });

        it("if called with argument 101, return 101", () => {
            const counter = new ResetCounter({ value: 0 });

            const result = counter.incrementWithReturn(101);

            expect(result).toBe(101);
        });

        it("[add error and this will fail]", () => {
            const counter = new ResetCounter({ value: 1 });

            const result = counter.incrementWithReturn(101);

            expect(result).toBe(101);
        });
    });
});
