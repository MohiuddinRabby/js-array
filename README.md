# JS-array

#### arrays are used to store multiple values in a single variable

> declare an array

```js
const arr = [];
//arr is a variable where an empty array been declared
arr[0] = 1;
//declared 1 as a value of index 0
arr[1] = 2;
arr[2] = 3;
arr[3] = 5;
console.log(arr.length); //arr.length gives the length of arr
//output: 4
console.log(arr);
//output:: [1,2,3,5]
arr[10] = 11;
console.log(arr);
//output: [ 1, 2, 3, 5, <6 empty items>, 11 ]
```

```js
const newArr = ["john", "doe", "steve", "mike"];
//init newArr with value - 'john','doe','steve','mike'
console.log(newArr);
//[ 'john', 'doe', 'steve', 'mike' ]
newArr[4] = "smith";
console.log(newArr);
//[ 'john', 'doe', 'steve', 'mike', 'smith' ]
```

> declare array with constructor pattern

```js
const arrOne = new Array(); //[]
console.log(arrOne, arrOne.length);
//output: [] 0
const arrTwo = new Array(10 /**declaring array length 10 */);
console.log(arrTwo, arrTwo.length);
//output: [ <10 empty items> ] 10
```

> declare array with factory pattern

```js
const arrThree = Array(); //[]
console.log(arrThree, arrThree.length);
//output: [] 0
const arrFour = Array(10 /**declaring array length 10 */);
console.log(arrFour, arrFour.length);
//output: [ <10 empty items> ] 10
```
