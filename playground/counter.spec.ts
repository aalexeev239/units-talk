import {Counter, ICounter} from './counter';

describe('Counter', () => {
    it('init', () => {
        const stateMock: ICounter = {value: 0};
        const counter = new Counter(stateMock);

        expect(counter.value).toBe(0);
    });
});
