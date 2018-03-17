function shuffle(array) {
    var _array = array.concat();

    for (var i = _array.length; i--; ) {
        var j = ~~(Math.random() * (i + 1));
        [_array[i],_array[j]] = [_array[j],_array[i]]
    }

    return _array;
}
console.log(shuffle([1,4,2,7,4,534,8,2]));
