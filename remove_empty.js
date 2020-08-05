//remove empty array
//process - 1
const list = ["name", "todo", NaN, undefined, "sunday", ""];
console.log(list);
// 'name', 'todo', NaN, undefined, 'sunday', ''
let newList = [];
for (i in list) {
  if (list[i]) {
    newList.push(list[i]);
  }
}

console.log(newList);
//'name', 'todo', 'sunday'
