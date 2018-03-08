function quickSort(arr, left, right) {
    if (left < right) {
        var x = arr[right];
        var i = left - 1;
        var tmp;
        for (var j = left; j <= right; j++) {
            if (arr[j] <= x) {
                i++;
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
        quickSort(arr,left,i-1);
        quickSort(arr,i+1,right)
    }
    return arr;
}

var arr = [1,5,3,6,9,8,23];
console.log(quickSort(arr, 0, arr.length - 1));


function quick(arr) {
    if (arr.length <= 1) { return arr; }
    var pivotIndex = Math.floor(arr.length / 2);
    // 选择中间的数为基准
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
    // 小于中间的数和大于中间的数的分别放入两个数组中
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    // 对分出来的数组进行递归运算,将左边右边中间的数三部分拼接
    return quickSort(left).concat([pivot], quickSort(right));
};

console.log(quick(arr));
