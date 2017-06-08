'use strict';

describe('gameOfLife', () => {
    let origin;
    beforeEach(() => {
        origin = [[1, 0, 1], [0, 1, 0], [1, 0, 1]];
    });

    it('should print correct new life', () => {

        spyOn(console, 'log');

        gameOfLife(origin);

        const expectText = [[0, 1, 0], [1, 0, 1], [0, 1, 0]];

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});

describe('gameOfLife', () => {
    let origin;

    beforeEach(() => {

        origin = [[0, 1, 0], [1, 1, 1], [0, 1, 0]];
    });

    it('should print correct new life', () => {

        spyOn(console, 'log');

        gameOfLife(origin);

        const expectText = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});

describe('gameOfLife', () => {
    let origin;

    beforeEach(() => {

        origin = [[0, 0, 0], [1, 1, 1], [0, 0, 0]];
        ;
    });

    it('should print correct new life', () => {

        spyOn(console, 'log');

        gameOfLife(origin);

        const expectText = [[0, 1, 0], [0, 1, 0], [0, 1, 0]];

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});

describe('gameOfLife', () => {
    let origin;

    beforeEach(() => {

        origin = [[0, 0, 0], [1, 0, 1], [1, 0, 0]];
    });

    it('should print correct new life', () => {

        spyOn(console, 'log');

        gameOfLife(origin);

        const expectText = [[0, 0, 0], [0, 1, 0], [0, 1, 0]];

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});
