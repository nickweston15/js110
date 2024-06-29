/*
Problem
- Input: array of integers
- Output: number

- Rules:
  - output should be rounded to the nearest integer, down
  - input array will not be empty

- Questions:
  - XX

Examples
- as expected

Data Structure
- XX

Algorithm
- reduce the array to a single number and divide by the number of elements

*/

function average(array) {
  let numerator = array.reduce((accum, current) => accum + current);
  let denominator = array.length;

  return Math.floor(numerator / denominator);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40