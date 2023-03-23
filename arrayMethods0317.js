// let arrOri = [[1, 2], [3, 4, 5], 6];

// let newArr = arrOri.reduce((total, e) => total.concat(e));

// console.log(newArr);


// let a =[1,2,3]
// a.unshift(-100,0);
// console.log(a);

// 類陣列
// let a = '12345'
// let arrA = Array.from(a,e=>e+e);
// let arrB = [...a];
// console.log(arrA);
// console.log(arrB);

let arrA = [2, 1, 9, 3, 7, 100, 0, 5];

arrA.sort((a, b) => b - a);
console.log(arrA);