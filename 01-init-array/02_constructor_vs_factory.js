//in js two way to create object : 1.constructor pattern 2.factory pattern


//constructor pattern or function
const arrOne = new Array(); //[]
console.log(arrOne, arrOne.length)
//output: [] 0
const arrTwo = new Array(10 /**declaring array length 10 */)
console.log(arrTwo, arrTwo.length)
//output: [ <10 empty items> ] 10


//factory pattern or function

const arrThree =  Array(); //[]
console.log(arrThree, arrThree.length)
//output: [] 0
const arrFour =  Array(10 /**declaring array length 10 */)
console.log(arrFour, arrFour.length)
//output: [ <10 empty items> ] 10