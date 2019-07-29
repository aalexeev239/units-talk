import { Counter } from "../counter";

describe('Naming', () => {
    describe("Bad", () => {
        it("passes", () => {
            const counter = new Counter({ value: 0 });

            counter.increment();
            expect(counter.value).toBe(1);
        });
    });

    describe('Better', () => {
        describe("Counter", () => {
            describe("increment", () => {
                let counter: Counter;

                beforeEach(() => {
                    counter = new Counter({ value: 0 });
                });

                it("if called without argument, increase value by 1", () => {
                    counter.increment();
                    expect(counter.value).toBe(1);
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
    });

    describe('More better', () => {
        describe("Counter", () => {
            describe("increment", () => {
                let counter: Counter;

                beforeEach(() => {
                    counter = new Counter({ value: 0 });
                });

                describe("called without argument", () => {
                    beforeEach(() => {
                        counter.increment();
                    });

                    it("increase value by 1", () => {
                        expect(counter.value).toBe(1);
                    });
                });

                describe("called with argument", () => {
                    it("if called with 1, increase value by 1", () => {
                        counter.increment(1);
                        expect(counter.value).toBe(1);
                    });

                    it("if called with 2, increase value by 2", () => {
                        counter.increment(2);
                        expect(counter.value).toBe(2);
                    });
                });
            });
        });
    });

    describe("That's ok! (opinionated)", () => {
        describe("increment", () => {
            let counter: Counter;

            beforeEach(() => {
                counter = new Counter({ value: 0 });
            });

            describe("called without argument", () => {
                beforeEach(() => {
                    counter.increment();
                });

                it("increase value by 1", () => {
                    expect(counter.value).toBe(1);
                });
            });

            describe("called with argument", () => {
                describe('called with 1', () => {
                    beforeEach(() => {
                        counter.increment(1);
                    });

                    it("increase value by 1", () => {
                        expect(counter.value).toBe(1);
                    });
                });

                describe('called with 2', () => {
                    beforeEach(() => {
                        counter.increment(2);
                    });

                    it("increase value by 2", () => {
                        expect(counter.value).toBe(2);
                    });
                });
            });
        });
    });
});
