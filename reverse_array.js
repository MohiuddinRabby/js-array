function reverseStr(str) {
  let reverse = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    reverse = char + reverse;
  }
  return reverse;
}
const strings = "Hello this is a string";
const result = reverseStr(strings);
console.log(result);
//gnirts a si siht olleH
