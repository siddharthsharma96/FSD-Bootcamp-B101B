// console.log(a);
// // hoisting
// var a = 10;
// a = 34;
// console.log(a);

// console.log(b);
// temporal dead Zone (TDZ)
// let and const
let b = 20;
b = 30;
console.log(b);

const c = 40;

console.log(c);
console.log(c);

// {
//   const d = 20;
// }
// console.log(d);

// functions

// 1.Named function
// function fnName(){
//    line of code you want to execute
// }

// function declaration
function aa() {
  let a = 20;
  console.log("We are inside Named function");
  console.log(3 + 5);
}

// invoke a function
aa();
// a();
// 2.function expression
// let a = function () {
//   console.log("We are inside Function Expression ");
//   console.log(3 + 5);
// };

// a();

// 3. arrow function
let a = () => {
  console.log("We are inside Arrow Function  ");
  console.log(3 + 5);
};

a();

// 4.IIFE Imediately Invoked function Expression
(function () {
  console.log("Inside IIFE");
})();

function sumOfTwo(parameter1, parameter2) {
  console.log(
    "we are adding",
    parameter1,
    " and",
    parameter2,
    "=",
    parameter1 + parameter2
  );
}

sumOfTwo(2, 4);
sumOfTwo(5, 9);

sumOfTwo(12, 10);
