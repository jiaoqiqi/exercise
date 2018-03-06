function factorial(num) {
    if (num <= 1) {
        return 1;
    }
    else {
        return num * factorial(num - 1);
    }
}

function fac(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
        // 指向正在执行的函数
    }
}

var factorial = (function f(num) {
    if (num <= 1) {
        return 1;
    } else {
        num * f(num - 1);
    }
})
