//remove duplicate items from array

//process-1

const fruits = [
  "apple",
  "banana",
  "lichi",
  "apple",
  "orange",
  "lichi",
  "palm",
  "blueberry",
];
console.log(fruits);
//['apple',  'banana','lichi',  'apple','orange', 'lichi', 'palm',   'blueberry']

const newBasket = [];

for (let i = 0; i < fruits.length; i++) {
  const items = fruits[i];
  const index = newBasket.indexOf(items);
  if (index == -1) {
    newBasket.push(items);
  }
}
console.log(newBasket);
//[ 'apple', 'banana', 'lichi', 'orange', 'palm', 'blueberry' ]

//process -2
const numbers = [1, 2, 3, 4, 5, 1, 2, 9, 8];
function removeDuplicate(num) {
  return [...new Set(num)];
}
console.log(removeDuplicate(numbers));
