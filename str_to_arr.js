const str = "hello world";
const splitStr = str.split(" ");
console.log(splitStr);
//[ 'hello', 'world' ]
const strData = splitStr.map((data) => data);
console.log(strData);
//[ 'hello', 'world' ]
const joinStr = splitStr.join("-");
console.log(joinStr);
//hello-world
