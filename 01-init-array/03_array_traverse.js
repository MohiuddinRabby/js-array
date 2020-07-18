const arr = [1, 2, 3, 4, 5, 122, 20, 35, 56, 87, 31, 9, 35]
let sum = 0;
let maxNum = arr[0];
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] > maxNum) {
        maxNum = arr[i]
    }
}
const avg = sum / arr.length
console.log((`average: ${avg}`))
console.log(`sum is ${sum}`)
console.log(`max num is : ${maxNum}`)