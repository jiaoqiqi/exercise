function bubble(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr
}

var arr = [1, 4, 2, 7, 4, 8, 9];
console.log(bubble(arr));

// 改进
// 设置标志性变量pos, 记录每趟排序中最后一次进行交换的位置
// 由于pos位置之后的记录都已经交换到位, 所以在下一趟排序中只需要扫描到pos位置

function bubble1(arr) {
    var i = arr.length - 1;
    while (i > 0) {
        var pos = 0;
        for (var j = 0; j < i; j++) {
            if (arr[i] > arr[i + 1]) {
                pos = j;
                var tmp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp;
            }
        }
        i = pos;

    }
    return arr;
}

console.log(bubble1(arr));


// 解决一次只能找到最大值或最小值的问题,在每趟排序中进行正向反向两遍冒泡
function bubble2(arr) {
    var low = 0;
    var high = arr.length - 1;
    var tmp, j;
    while (low < high) {
        for (j = low; j < high; j++) {
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
            --high;
        }
        for (j = high; j > low; --j) {
            if(arr[j] < arr[j-1]){
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
            ++low;
        }
        return arr;

    }

}
console.log(bubble2(arr));
