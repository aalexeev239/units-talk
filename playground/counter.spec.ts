import {Counter, ICounter} from './counter';

describe('Counter', () => {
    it('init', () => {
        const stateMock: ICounter = {value: 0};
        const counter = new Counter(stateMock);

        expect(counter.value).toBe(0);
    });
});

describe('AAA', () => {
    describe('simple', () => {
        it('increments value by one', () => {
            //arrange
            const stateMock: ICounter = {value: 0};
            const counter = new Counter(stateMock);

            //act
            counter.increment(1);

            //assert
            expect(counter.value).toBe(1);
        });
    });

    describe('complex', () => {
        describe('increment', () => {
            let stateMock: ICounter;
            let counter: Counter;

            beforeEach(() => {
                //arrange
                stateMock = {value: 0};
                counter = new Counter(stateMock);
            });

            it('increments value by 1 if no argument passed', () => {
                //act
                counter.increment();

                //assert
                expect(counter.value).toBe(1);
            });

            it('increments value by 2 if argument 2 passed', () => {
                //act
                counter.increment(2);

                //assert
                expect(counter.value).toBe(2);
            });
        });
    });
});
