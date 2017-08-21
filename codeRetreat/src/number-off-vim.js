function judgeNumber(first, second, third, number) {
	const specialNumbers = [{specialNumber: first, value: 'Fizz'},
				{specialNumber: second, value: 'Buzz'},
				{specialNumber: third, value: 'Whizz'}];

	if(number.toString().includes(`${first}`)) {
		return 'Fizz';
	}

	let result = specialNumbers.reduce((prv, next) => {
		if(number % next.specialNumber === 0) {
			return prv + next.value;
		}
		return prv;
	}, '');

	return result ? result : number;
}

module.exports = {
	judgeNumber
};
