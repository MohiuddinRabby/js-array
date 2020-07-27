const word = "this is a word";
let count = 0;
for (let i = 0; i < word.length; i++) {
  let char = word[i];
  if (char == " " && word[i - 1] != " ") {
    count++;
  }
  //   console.log(word[i]);
}
count++;
console.log(count);
