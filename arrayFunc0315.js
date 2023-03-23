console.log('hello world :)');

//foreach
let arrA = ['apple', 'boy', 'cat', 'dog'];
let arrOri = [1, 1, 2, 3, 5, 8];
let resultA = arrOri.some((e) => e > 4);
let resultB = arrOri.some((e) => e < 10);
console.log(resultA);
console.log(resultB);

// let arrNew = arrOri.map((item) => item * 2);
// console.log(arrNew);
// let innitalValue = 0;
// let sum = arrOri.reduce((total,item)=>total+item,innitalValue);
// console.log(sum);
// console.log(arrOri);