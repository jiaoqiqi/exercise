//打乱数组
//从数组最后一个开始  随机与前面的元素进行交换
function shuffle(array) {

    var _array = array.concat();
    for (var i = _array.length; i--; ) {
        var j = ~~(Math.random() * (i + 1));  // 向下取整
        [_array[i],_array[j]] = [_array[j],_array[i]]   //交换两个元素
    }

    return _array;
}
console.log(shuffle([1,4,2,7,4,534,8,2]));
