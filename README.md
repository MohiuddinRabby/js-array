# JS-array
#### arrays are used to store multiple values in a single variable

> declare an array

```js
const arr = []
//arr is a variable where an empty array been declared
arr[0] = 1;
//declared 1 as a value of index 0 
arr[1] = 2;
arr[2] = 3;
arr[3] = 5;
console.log(arr.length) //arr.length gives the length of arr
//output: 4
console.log(arr)
//output:: [1,2,3,5]
arr[10] = 11;
console.log(arr)
//output: [ 1, 2, 3, 5, <6 empty items>, 11 ]
```