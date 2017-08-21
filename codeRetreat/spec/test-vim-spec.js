const main = require('../src/number-off-vim');

describe("number off" , () => {
	let first,second,third;
	beforeEach(() => {
		first = 3;
		second = 5;
		third = 7;
	});

	it("only contain first special number " ,() => {
		expect (main.judgeNumber(first,second, third,13)).toEqual('Fizz');
	});

	it("contain first special number and multiple the other numbers ",() => {
		expect (main.judgeNumber(first,second, third,5*7)).toEqual('Fizz');
	});

	it("first times " , () => {
		expect (main.judgeNumber(first,second, third,3*3)).toEqual('Fizz');
	});

	it("second times " , () => {
                expect (main.judgeNumber(first,second, third,5)).toEqual('Buzz');
        });

	it("third times " , () => {
                expect (main.judgeNumber(first,second, third,7)).toEqual('Whizz');
        });

	it("first and second  times " , () => {
                expect (main.judgeNumber(first,second, third,3*5)).toEqual('FizzBuzz');
        });

	it("second and third  times " , () => {
                expect (main.judgeNumber(first,second, third,5*7*2)).toEqual('BuzzWhizz');
        });

	it("first and third times " , () => {
                expect (main.judgeNumber(first,second, third,3*7)).toEqual('FizzWhizz');
        });

	it("all times " , () => {
                expect (main.judgeNumber(first,second, third,3*5*7)).toEqual('FizzBuzzWhizz');
        });

	it('not times', () => {
		expect(main.judgeNumber(first, second, third, 2)).toEqual(2);
	});
})
