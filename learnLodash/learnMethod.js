const _ = require("lodash");

const arr = [1,2,3,4,5,6,7,8];   //分割数组
console.log(_.chunk(arr,3));    //[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ]


console.log(_.compact([1,2,3,0,NaN," ",""]))   //[ 1, 2, 3, ' ' ]   //去掉数组里面的0,NaN.""

console.log(_.concat(arr,1,[2],[[5]]))    //[ 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, [ 5 ] ]


_.difference([2, 1], [2, 3]);  //找出不同的元素
// => [1]

_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);  //添加filter的原则
// => [1.2]


_.drop([1, 2, 3]);  //从数据开头扔掉几个  默认参数为1
// => [2, 3]

_.drop([1, 2, 3], 2);
// => [3]

_.drop([1, 2, 3], 5);
// => []

_.drop([1, 2, 3], 0);
// => [1, 2, 3]

_.dropRight([1,2,3])
//[1,2]

_.dropRightWhile()
_.dropWhile()


_.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]


_.flatten([[1, [2, [3, [4]], 5]]]);
// => [1, 2, [3, [4]], 5]


_.flattenDeep([[1, [2, [3, [4]], 5]]]);
// => [1, 2, 3, 4, 5]

//flatten设置层次
var array = [1, [2, [3, [4]], 5]];
_.flattenDepth(array, 1);
// => [1, 2, [3, [4]], 5]
_.flattenDepth(array, 2);
// => [1, 2, 3, [4], 5]

console.log(_.intersection([1,2,3],[2,3,4]));   //找出两个数组重复的元素
_.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [2.1]
_.intersectionWith();

_.join(['a', 'b', 'c'], '~');
// => 'a~b~c'


var array = ['a', 'b', 'c', 'a', 'b', 'c'];

_.pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']