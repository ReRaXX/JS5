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
let num2 = 1;
let arr3 = [0, 2, 1]
 const test = () => { 
    for (let el of arr3) {
       console.log(num2 == el);
        }
      }
test();

// не доделал (не понял) // доделал, по факту работает

let j = 7;

function mathtable() {
  for (i = 1; i < 10; i++) {
    console.log(j * i);
  }
}
mathtable();

let str = "alla"

function pol() {
let reverse = str.split("").reverse().join("");
return console.log(reverse === str);
}
pol();

setTimeout(function () {
  return console.log("abc");
}, 2000);

(function bam() {
return console.log("Скрипт запущен");
}) ()

console.log(pol.name = "age");

console.log(pol.name);


//task 4
//1
//???


//2

function greet(a, b) {
  console.log( a + b );
}
(greet(3, 5));


//3
function greetcopy() {
  return greet;
}
greetcopy(greet(1, 3));

//4
let number = 1;
let a = 5;
function factorial(a) {
  if (a === 0) return;
  for (a; a > 0; a--) {
number *= a;
console.log(number)
}
 factorial(a);
}
 factorial(a);

 //5

 function new1(q) {
  return function(w) {
    return function(e) {
      return function (r) {
return q + w + e + r;
      }
     }
  }
 }
 console.log(new1(1)(2)(3)(4));

 //6

 function sum3(a, b) {
 return (a + b) / 2; 
 }
 console.log(sum3(4, 5))

 //7
let counter = 0;
let number2 = 1;
let b = 12;

function factorial2(b) {
  if (b === 0) return;
  for (b; b > 0; b--) {
    counter++;
number2 *= b;
console.log(counter);
}
 factorial2(b);
}
 factorial2(b);


 //8
let argsum = 0
 function arg () {
for ( i = 0; i < arguments.length; i++ ) {
  argsum +=arguments[i];
  console.log(argsum);
}
 }

 arg(1, 2, 3, 4, 10, 40, 100)

 //9


 const array = [1, 2, 3];
 const arraycopy = array.map(el => el);
 console.log(array);
 console.log(arraycopy);

 setTimeout( function delayLog () {
console.log("1213")
 }, 1000
)



//1 Напиши функцию power, которая возводит число в степень

function power(p, o) {
  return p ** o;
}
console.log(power(4, 2));
power();

//2 Напиши функцию, которая находит максимум из трёх чисел

function min(r, s ,t) {
if (r > s && r > t) {
    return r;
}
else {
  if (s > r && s > t) {
  return s;
  }
  else {
    if (t > r && t > s) {
      return t;
    }
    else {
      return "Нет максимума";
    }
  } 
}
}
console.log(min(1, 4, 3))
min();

//3 Напиши функцию, которая сортирует массив по убыванию

let arr4 = [1, 3 , 5];


for (i = 0; i < arr4.length; i++) {
for (j = arr.length; j > 0; j--)
{
  if (arr4[i] > arr4[j]) {

  }
}
}


//4 Напиши функцию, которая принимает строку и возвращает её наоборот



let string = "hello";
let rstring = "";
function reversestring() {}
for (i = string.length - 1; i >= 0; i--) {
 rstring += string[i];
 console.log(rstring);
}
reversestring();


//5 Напиши функцию, которая принимает число и возвращает true, если оно простое

let k = 6;
function simple() {
if (k % 4 == 0) {
  return false;
}
else {
  return true;
}
}
// console.log(simple(6));
console.log(simple());


//declaration

// 1
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, 3));
// // 2
// function sum(a, b) {
//  return a + b;
// }
// console.log(sum(1, 32));
// // 3
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, 3))
// // 4
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, 3))
// // 5
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, 4))
// // 6
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, 3));
// // 7
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(3, 4));
// // 8
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, 3))
// // 9
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, 3));
// // 10
// function sum (a, b) {
//   return a - b;
// }
// console.log(sum(10, 12));


// // Expression
// // 1
// let sum = function(a, b) {
//   return a + b;
// }
// console.log(sum(1, 3));
// // 2
// let sum = function(a, b) {
//   return a - b;
// }
// console.log(sum(19, 31));
// // 3
// const sum = function(a, b) {
//   return a + b;
// }
// console.log(sum(1, 3));
// // 4
// let sum = function(a, b) {
//   return a + b;
// }
// console.log(sum(1, 3));
// // 5
// let sum = function () {
//   return a + b;
// }
// console.log(sum(31, 3));
// // 6
// const sum = function (a, b) {
//   return a + b;
// }
// console.log(1, 3);
// // 7
// const sum = function() {
//   return a + b;
// }
// console.log(sum(1, 3));
// // 8
// const sum = function() {
//   return a + b;
// }
// console.log(sum(1, 3));
// // 9
// const sum = function() {
//   return a + b;
// }
// console.log(sum(a, b))
// // 10
// const sum = function(a, b) {
//   return a % b;
// }
// console.log(sum(10, 4));

// // arrow

// // 1
// const sum = (a, b) => a + b;
// console.log(sum(1, 3))

// // 2
// const sum = (a, b) => a + b;
// console.log(sum(1, 3))
// // 3
// const sum = (a, b) => a + b;
// console.log(sum(a, b));
// // 4
// const sum = (a, b) => a + b;
// console.log(sum(1, 3))
// // 5
// const sum = (a, b) => a + b;
// comsole.log(sum(1, 3));
// // 6
// const sum = (a, b) => a + b;
// console.log(sum(1, 3));
// // 7
// const sum = (a, b) => a + b;
// console.log(sum(1, 3));
// // 8
// const sum = (a, b) => a + b;
// console.log(sum(1, 3));
// // 9
// const sum = (a, b) => a + b;
// console.log(sum(1, 3));
// // 10
// const sum = (a, b) => a + b;
// console.log(sum(1, 3));

// //anonym
// // // 1
// // setTimeout( function () {
// //     console.log(1);
// // }, 1000);

// // 1
// setTimeout(function () {
//   console.log(1);
// }, 1000);
// // 2
// setTimeout(function () {
//   console.log(1)
// }, 1000);
// // 3
// setTimeout(function() {
//   console.log("A");
// }, 1000);
// // 4
// setTimeout(function() {
//   console.log("abc");
// }, 1000);
// // 5
// setTimeout(function() {
//   console.log(1);
// }, 1000);
// // 6
// setTimeout( function() {
//   console.log("100");
// },1000);
// // 7
// setTimeout(function(){
//   console.log("delay");
// },1000);
// // 8
// setTimeout(function () {
//   console.log("abc")
// }, 1000)
// // 9
// setTimeout(function() {
//   console.log("abc");
// }, 1000);
// // 10
// setTimeout(function() {
//   console.log("1000");
// },1000)

// //IIFE

// // 1
// (function () {
//   console.log("Abc");
// });
// // 2
// (function () {
//   console.log("Abc");
// });
// // 3
// (function(){
//   console.log("abc")
// });
// // 4
// (function (){
//   console.log("abc");
// });
// // 5
// (function () {
//   console.log("abc");
// });
// // 6
// (function () {
//   comsole.log("bccd");
// });
// // 7
// (function () {
//   console.log("bcd");
// });
// // 8
// (function () {
//   console.log("bcvd")
// });
// // 9
// (function () {
//   console.log("bcd");
// });
// // 10
// (function () {
//   console.log("bcd");
// });

//task 2

// Функция, принимающая имя и выводящая приветствие
let name2 = "Misha"

function SayHi() {
return `hello ${name2}`;
}
console.log(SayHi("Misha"))
// Функция, возвращающая сумму двух чисел

function sum3(a, b) {
  return a + b;
}
console.log(sum3(3, 5));

// Функция, проверяющая чётное ли число

function check(a) {
return a % 2 == 0
}
console.log(check(21))

// Функция, принимающая массив чисел и возвращающая новый массив квадратов


// Функция, принимающая строку и возвращающая её в верхнем регистре


// Стрелочная функция, проверяющая, входит ли элемент в массив


// Функция, выводящая таблицу умножения на заданное число


// Функция, определяющая, является ли строка палиндромом


// Анонимная функция внутри setTimeout, которая выводит сообщение через 2 секунды


// IIFE, которая сразу выводит "Скрипт запущен"
