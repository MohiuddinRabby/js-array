//array literal 
const arr = []
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 5;
console.log(arr.length) //arr.length gives the length of arr
//output: 4
console.log(arr)
//[1,2,3,5]
arr[10] = 11;
console.log(arr)
//output: [ 1, 2, 3, 5, <6 empty items>, 11 ]

const newArr = ['john', 'doe', 'steve', 'mike']
//init newArr with value - 'john','doe','steve','mike'
console.log(newArr)
//[ 'john', 'doe', 'steve', 'mike' ]
newArr[4] = 'smith'
console.log(newArr)
//[ 'john', 'doe', 'steve', 'mike', 'smith' ]
newArr[newArr.length] = 'jonson';
console.log(newArr)