//day 1

//Declaration
//1
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(2, 3));

// // 2
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(3, 4));
// // 3

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(1, 2));
// // 4
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(1, 2)); 
// // 5
// function sum(a, b){
//     return a + b;
// }
// console.log(sum(212, 12));
// // 6
// function sum(a, b) {
//     return a + b;
// }
// // 7
// console.log(sum(1, 2));
// // 8
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(-1, -12));
// // 9
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(1, 4));
// // 10
// function sum(a, b) {
//     return a * b;
// }
// console.log(sum(12, 13));

// //Expression
// // 1
// const sum = function (a, b) {
// return a + b;
// }
// console.log(sum(2, 3));
// // 2
// const sum = function(a, b) {
//     return a + b
// }
// console.log(10, 12);
// // 3
// const sum = function(a, b ) {
//     return a + b;
// }
// console.log(sum(1, 3));
// // 4
// const sum = function(a ,b) {
//     return a + b;
// }
// console.log(sum(1, 3));
// // 5
// const sum = function(a, b) {
//     return a + b;
// }
// console.log(sum(1 ,4));
// // 6
// const sum = function(a, b) {
// return a + b;
// }
// console.log(sum(2, 45));
// // 7
// const sum = function(a, b) {
//     return a + b;
// }
// console.log(sum(10, 14));
// // 8
// const sum = function(a, b) {
//     return a + b;
// }
// console.log(sum(1, 3));
// // 9
// const sum = function(a, b){
//     return a + b;
// }
// console.log(sum(14, 13));
// // 10
// const sum = function(a, b) {
//     return a + b;
// }
// console.log(sum(3, 5))
// //  Arrow
// // 1
// const sum = (a, b) => a + b;
// console.log(sum(2, 3));
// // 2
// const sum = (a, b) => a + b;
// console.log(sum(2, 4));
// // 3
// const sum = (a, b) => a + b;
// console.log(sum(2, 4));
// // 4
// const sum = (a, b) => a + b;
// console.log(sum(1, 2));
// // 5
// const sum = (a, b) => a + b;
// console.log(sum(1, 3));
// // 6
// const sum = (a, b) => a + b;
// console.log(sum(1, 34));
// // 7
// const sum = (a, b) => a + b;
// console.log(sum(1, 4))
// // 8
// const sum = (a, b) => a + b;
// console.log(sum(1, 4));
// // 9
// const sum = (a, b) => a + b;
// console.log(sum(1, 45));
// // 10
// const sum = (a, b) => a + b;
// console.log(sum(3, 4));


//anonym
// // 1
// setTimeout( function () {
//     console.log(1);
// }, 1000);
// // 2
// setTimeout (function () {
//     console.log(2);
// } , 1000);
// // 3
// setTimeout(function() {
//     console.log(11);
// }, 1000);
// // 4
// setTimeout(function () {
//     console.log("March")
// }, 1000)
// // 5
// setTimeout(function () {
//     console.log(12);
// }, 1000)
// // 6
// setTimeout(function() {
//     console.log(1213);
// }, 1000)
// // 7
// setTimeout(function() {
//     console.log(123);
// }, 1000)
// // 8
// setTimeout (function(){
//     console.log(12)
// }, 1000);
// // 9
// setTimeout(function() {
//     console.log(12);
// }, 1000)
// // 10
// setTimeout(function() {
//     console.log(12);
// }, 1000);
// //IIFE
// // 1
// (function() {
//     console.log(12);
// })();
// // 2
// (function() {
//     console.log(12);
// })();
// // 3
// (function (){
//     console.log(1)
// })();
// // 4
// (function() {
//     console.log(1);
// })();
// // 5
// (function () {
//     console.log(1);
// })();
// // 6
// (function() {
//     console.log(1);
// })();
// // 7
// (function(){
//     console.log(1);
// })();
// // 8
// (function() {
//     console.log(1);
// })();
// // 9
// (function() {
//     console.log(1)
// })();
// // 10
// (function () {
//     console.log(1);
// })();

// TASK 2
let name = "Misha";
function Hi(name) {
return   `Hello ${name}`
}


console.log(Hi(name));


function sum(a, b) {
    return "a + b";
}
console.log(sum(2, 3));

let num = 11;

function approve(num) {
return num % 2 == 0
}
 console.log(approve(num));
let arr = [1, 3, 9]


 function quad() {
    let arr2 = [];
 for (let el of arr) {
 arr2.push(el ** 2);
 }
 return arr2;
 }
arr2 = quad();
 console.log(arr2);

 let str1 = "string";
 function up() {
   return str1.toUpperCase();
 }
 str2 = up();
 console.log(str2);


let num2 = 2;
let arr3 = [2, 1, 2]
 const test = () => { 
    for (let el of arr3)
  el === num2;
}
console.log(test());

// не доделал (не понял)

let j = 2;

function mathtable() {
    for (i = 0; i < 11; i++) {
     let a = j * i; 
     return a;
    }
}
a = mathtable()
console.log(a);
