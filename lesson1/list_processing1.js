/*
Problem
- Input: a positive integer
- Output: sum of the digits of the integer, as a single number
- what about 0, or blank, or things that aren't numbers?

Examples
- looks like it will be a positive interger greater than 0

Data Structure
- reduce method on an array

Algorithm
- use reduce method to accumulate a total sum of all digits

*/

function sum(num) {
  return String(num)
  .split("")
  .reduce((accum, digit) => accum + Number(digit), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45