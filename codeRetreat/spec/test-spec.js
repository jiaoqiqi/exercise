"use strict";

const main = require('../src/number-off');

describe('number off', () => {
    let first, second, third;
    beforeEach(() => {
        first = 3;
        second = 5;
        third = 7;
    });

    it('when a number is special numbers multiple', () => {
        expect(main.judgeNumber(first, second, third, 1)).toEqual(1);
        expect(main.judgeNumber(first, second, third, 6)).toEqual('Fizz');
        expect(main.judgeNumber(first, second, third, 35)).toEqual('Fizz');
        expect(main.judgeNumber(first, second, third, 15)).toEqual('FizzBuzz');
        expect(main.judgeNumber(first, second, third, 21)).toEqual('FizzWhizz');
        expect(main.judgeNumber(first, second, third, 5)).toEqual('Buzz');
        expect(main.judgeNumber(first, second, third, 7)).toEqual('Whizz');
        expect(main.judgeNumber(first, second, third, 70)).toEqual('BuzzWhizz');
        expect(main.judgeNumber(first, second, third, 105)).toEqual('FizzBuzzWhizz');
    });

    it('content first special number ', () => {
        expect(main.firstNumberContent(first, 13)).toEqual(true);
        expect(main.firstNumberContent(first, 11)).toEqual(false);
    })
});