function judgeNumber(first, second, third, number) {
    const numberOffs = [{value: 'Fizz', specialNumber: first},
        {value: 'Buzz', specialNumber: second},
        {value: 'Whizz', specialNumber: third}];

    if (firstNumberContent(first, number)) {
        return 'Fizz';
    }

    let result = numberOffs.reduce((prv, next) => {
        if (number % next.specialNumber === 0) {
            return prv + next.value;
        }
        return prv;

    }, '');

    if (!result) {
        result = number;
    }
    return result;
}

function firstNumberContent(first, number) {
    const numbers = number.toString().split(`${first}`);
    return numbers.length != 1;
}

module.exports = {
    judgeNumber,
    firstNumberContent
};