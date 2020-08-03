const items = [
  { id: 1, name: "item1", category: "electronics" },
  { id: 2, name: "item2", category: "tv" },
  { id: 3, name: "item3", category: "electronics" },
  { id: 4, name: "item4", category: "gadget" },
  { id: 6, name: "item5", category: "gadget" },
  { id: 7, name: "item6", category: "gadget" },
  { id: 8, name: "item7", category: "mobile" },
  { id: 9, name: "item8", category: "electronics" },
  { id: 10, name: "item9", category: "mobile" },
  { id: 11, name: "item10", category: "tv" },
];
const allData = items.map((item) => item);
console.log(allData);
const filteredData = items.filter((cat) => cat.category === "electronics");
console.log(filteredData);

const words = [
  "hello",
  "world",
  "ho",
  "mars",
  "apple",
  "oranges",
  "pineapple",
  "github",
  "we",
  "i",
];
const filtered = words.filter((word) => word.length > 3);
console.log(filtered);
