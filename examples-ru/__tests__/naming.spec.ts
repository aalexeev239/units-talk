import { Counter } from "../counter";

describe('Нэйминг', () => {
    describe("Плохо", () => {
        it("работает", () => {
            const counter = new Counter({ value: 0 });

            counter.increment();
            expect(counter.value).toBe(1);
        });
    });

    describe('Лучше', () => {
        describe("Counter | счетчик", () => {
            describe("increment | увеличение значения", () => {
                let counter: Counter;

                beforeEach(() => {
                    counter = new Counter({ value: 0 });
                });

                it("если вызывается без аргументов, значение увеличивается на 1", () => {
                    counter.increment();
                    expect(counter.value).toBe(1);
                });

                it("если вызывается с аргументом 1, значение увеличивается на 1", () => {
                    counter.increment(1);
                    expect(counter.value).toBe(1);
                });

                it("если вызывается с аргументом 2, значение увеличивается на 2", () => {
                    counter.increment(2);
                    expect(counter.value).toBe(2);
                });
            });
        });
    });

    describe('Еще лучше', () => {
        describe("Counter | счетчик", () => {
            describe("increment | увеличение значения", () => {
                let counter: Counter;

                beforeEach(() => {
                    counter = new Counter({ value: 0 });
                });

                describe("если вызывается без аргументов", () => {
                    beforeEach(() => {
                        counter.increment();
                    });

                    it("значение увеличивается на 1", () => {
                        expect(counter.value).toBe(1);
                    });
                });

                describe("если вызывается с аргументом", () => {
                    it("если вызывается с аргументом 1, значение увеличивается на 1", () => {
                        counter.increment(1);
                        expect(counter.value).toBe(1);
                    });

                    it("если вызывается с аргументом 2, значение увеличивается на 2", () => {
                        counter.increment(2);
                        expect(counter.value).toBe(2);
                    });
                });
            });
        });
    });

    describe("Так тоже норм! (холиварно)", () => {
        describe("increment | увеличение значения", () => {
            let counter: Counter;

            beforeEach(() => {
                counter = new Counter({ value: 0 });
            });

            describe("если вызывается без аргументов", () => {
                beforeEach(() => {
                    counter.increment();
                });

                it("значение увеличивается на 1", () => {
                    expect(counter.value).toBe(1);
                });
            });

            describe("если вызывается с аргументом", () => {
                describe('если вызывается с аргументом 1', () => {
                    beforeEach(() => {
                        counter.increment(1);
                    });

                    it("значение увеличивается на 1", () => {
                        expect(counter.value).toBe(1);
                    });
                });

                describe('если вызывается с аргументом 2', () => {
                    beforeEach(() => {
                        counter.increment(2);
                    });

                    it("значение увеличивается на 2", () => {
                        expect(counter.value).toBe(2);
                    });
                });
            });
        });
    });
});
