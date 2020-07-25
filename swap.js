//swap variables value

//process-1
console.log("process-1");
let numOne = 10;
let numTwo = 20;
console.log(`before : numOne : ${numOne} numTwo: ${numTwo}`);
//before : numOne : 10 numTwo: 20
let temp = numOne;
numOne = numTwo;
numTwo = temp;
console.log(`after : numOne : ${numOne} numTwo: ${numTwo}`);
//after : numOne : 20 numTwo: 10

//process-2
console.log("process-2");
let x = 20;
let y = 30;
console.log(`before: x : ${x} y: ${y}`);
//before: x : 20 y: 30
x = x + y;
y = x - y;
x = x - y;
console.log(`after: x : ${x} y: ${y}`);
//after: x : 30 y: 20

//process-3
let a = 200;
let b = 300;
console.log("before:", a, b);
[a, b] = [b, a];
console.log("after:", a, b);
