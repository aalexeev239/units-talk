import {ResetCounter} from '../resetCounter';

describe('Private methods', () => {
    describe("Bad", () => {
        it("reset works", () => {
            const resetCounter = new ResetCounter({value: 10});

            (resetCounter as any).reset();

            expect(resetCounter.value).toBe(0);
        });
    });

    describe("Also bad", () => {
        it("reset called when incrementing above 100", () => {
            const resetCounter = new ResetCounter({value: 100});

            const spy = jest.spyOn((resetCounter as any), 'reset');

            resetCounter.increment(1);

            expect(spy).toHaveBeenCalled();
        });
    });

    describe('Better', () => {
        it("value resets when incrementing above 100", () => {
            const resetCounter = new ResetCounter({value: 100});

            resetCounter.increment(1);

            expect(resetCounter.value).toBe(0);
        });
    });
});
