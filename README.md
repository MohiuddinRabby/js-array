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

> Array traverse

```js
const arr = [1, 2, 3, 4, 5, 122, 20, 35, 56, 87, 31, 9, 35];
let sum = 0;
let maxNum = arr[0];
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
  if (arr[i] > maxNum) {
    maxNum = arr[i];
  }
}
const avg = sum / arr.length;
console.log(`average: ${avg}`);
console.log(`sum is ${sum}`);
console.log(`max num is : ${maxNum}`);
```

> Add element to the end of an array

```js
const arrOne = [1, 2, 3, 4, 5];
const arrTwo = [9, 10];
console.log("arr: ", arrOne);
// [ 1, 2, 3, 4, 5 ]
arrOne.push(6, 7);
console.log("arr: ", arrOne);
// [1, 2, 3, 4, 5, 6, 7]
arrOne.push(arrTwo);
console.log("arr: ", arrOne);
// [ 1, 2, 3, 4, 5, 6, 7, [ 9, 10 ] ]
```

> Add element to the beginning of an array

#### example-1

```js
const arr= = ["john", "doe", "smith"];
console.log(arrThree);
arr.unshift("Steve");
console.log(arrThree);
```

#### example-2

```js
const arrThree = ["john", "doe", "smith"];
console.log(arrThree); //[ 'john', 'doe', 'smith' ]
const arrFour = ["steve", "mike"];
arrThree.unshift(...arrFour);
console.log(arrThree); //[ 'steve', 'mike', 'john', 'doe', 'smith' ]
```
