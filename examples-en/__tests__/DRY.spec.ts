import { Counter, ICounter } from "../counter";

describe("DRY", () => {
    describe("Bad", () => {
        describe("increment", () => {
            it("if called with argument 1, increase value by 1", () => {
                const counter = new Counter({ value: 0 });
                counter.increment(1);
                expect(counter.value).toBe(1);
            });

            it("if called with argument 2, increase value by 2", () => {
                const counter = new Counter({ value: 0 });
                counter.increment(2);
                expect(counter.value).toBe(2);
            });
        });
    });

    describe("Better", () => {
        describe("increment", () => {
            let counter;

            beforeEach(() => {
                counter = new Counter({ value: 0 });
            });

            it("if called with argument 1, increase value by 1", () => {
                counter.increment(1);
                expect(counter.value).toBe(1);
            });

            it("if called with argument 2, increase value by 2", () => {
                counter.increment(2);
                expect(counter.value).toBe(2);
            });
        });
    });

    describe("Pitfail 1 – not isolated tests", () => {
        describe("increment", () => {
            const counter = new Counter({ value: 0 });

            it("if called with argument 1, increase value by 1", () => {
                counter.increment(1);
                expect(counter.value).toBe(1);
            });

            it("[this test will fail] if called with argument 2, increase value by 2", () => {
                counter.increment(2);
                expect(counter.value).toBe(2);
                // Expected: 2
                // Received: 3
            });
        });
    });

    describe("Pitfail 2 – using mocks", () => {
        const mock = { value: 0 };

        describe("increment", () => {
            let counter;

            beforeEach(() => {
                counter = new Counter(mock);
            });

            it("if called with argument 1, increase value by 1", () => {
                counter.increment(1);
                expect(counter.value).toBe(1);
            });

            it("[this test will fail] if called with argument 2, increase value by 2", () => {
                counter.increment(2);
                expect(counter.value).toBe(2);
                // Expected: 2
                // Received: 3
            });
        });
    });

    describe("Pitfail 2 fixed – using mocks", () => {
        function getMock(): ICounter {
            return { value: 0 };
        }

        let counter;

        beforeEach(() => {
            counter = new Counter(getMock());
        });

        it("if called with argument 1, increase value by 1", () => {
            counter.increment(1);
            expect(counter.value).toBe(1);
        });

        it("if called with argument 2, increase value by 2", () => {
            counter.increment(2);
            expect(counter.value).toBe(2);
        });
    });
});
