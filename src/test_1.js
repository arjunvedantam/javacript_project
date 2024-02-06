// for(let i=0; i<10 ; i=i+5){
//   console.log(i, " value of i")
// }

// let grade = 'B'
// switch (grade) {
//   case 'A':
//   case 'B': console.log("student has passed with B"); break;
//   case 'C': console.log("student has passed with C"); break;
//   case 'D': console.log("student has passed with D"); break;
//   case 'E': console.log("student has failed"); break;
//   default: console.log("student did not get result");
//     break;
// }

// while loop
// let i = 5
// while(i < 10){
//   console.log(i)
//   i++;
// }


// comment

/* commnet
is continued
*/

// // solution to step

// let pattern = ""

// for(let i=0; i<4; i++){
//   pattern = pattern + "*"
//   console.log(pattern)
// }


// // Arithmatic operators
// // Number
// // addition
// let A = true + 13
// console.log(A)
// console.log(typeof A)

// // remainder
// console.log(10%3)

// // exponent
// console.log(10 ** 3)

// ++ --
// A+= 5 // A = A + 5
// A-=3  // A = A - 3

// // Assignment
// A = true
// // mutable
// // immutable

// var variable
// let a = [10, 11, 12, 13];
// a = [10, 11, 12, 13];
// a[2] = 2

// let a = 4
// let b = a

// // mutable
// let arr = [10];
// arr.push(11)

// arr = [10, 11]

// // comparison
// // == === != !== > < >= <= ?
// let B = 13
// let C = '13'
// console.log(B == C) // true
// console.log(B === C) // false;  both data and type should match

// // != !==
// let D = 13
// let E = '13'
// console.log(B != C) // false
// console.log(B !== C) // true;  either data or type does not mact result is true

// // logical operator
// let F = false
// let G = true
// // logical And
// console(F && G)
// // logical Or
// console(F || G)
// // logical not
// console.log(!G)

// let I = new String("1")
// let H = ""

// console.log(I instanceof String) //  true
// console.log(H instanceof String) // false

// false, 0, "", undefined, null
// let a, b

// let result = (a < b) ? a+b : a-b


// let a = 10
// console.log(a);
// // console.log(b, "first inst");

// let b = 5
// console.log(fun(a,b))
// console.log(b, "second inst");

// function fun (a, b){
//   return a+b;
// }

// const fun1 = (a,b) => a+b
// let sum = fun1(2,3)



// let arr1 = [1, 2, 3, 4, 5]
// let callback = (i) => i+5
// let newArr = arr1.map(callback)
// console.log(arr1)
// console.log(newArr)

// let sum = 0
// let callback2 = (i) => {
//   sum+= i
// }
// arr1.forEach(callback2)

// console.log(sum)
// console.log(arr1)

const numberArray = [1, 3, 5, 6, 8, 9, 10, 11, 15, 20]
let sum = 0
let sumTotal = (i) => sum+= i

let newArray = numberArray.map(sumTotal)

const fruitsArray = ['apple', 'chiku', 'mango', 'papaya']
let str = 'apple'


// let logicCallback = (i) => i % 5 === 0
// let logicCallback = (i) => true
let logicCallback = (i) => i.includes('a')


// const resultArray = numberArray.filter(logicCallback)
const resultArray = fruitsArray.filter(logicCallback)
console.log(resultArray)