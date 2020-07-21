//push to add element at the end to the array
const arrOne = [1, 2, 3, 4, 5];
const arrTwo = [9, 10]
console.log('arr: ', arrOne)
// [ 1, 2, 3, 4, 5 ]
arrOne.push(6, 7)
console.log('arr: ', arrOne)
// [1, 2, 3, 4, 5, 6, 7]
arrOne.push(arrTwo)
console.log('arr: ', arrOne)
// [ 1, 2, 3, 4, 5, 6, 7, [ 9, 10 ] ]

//to add element at the beginning of the array
const arrThree = ['john', 'doe', 'smith']
console.log(arrThree)
// arrThree.unshift('Steve')
// console.log(arrThree)
const arrFour = ['steve', 'mike']
arrThree.unshift(...arrFour)
console.log(arrThree)