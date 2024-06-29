/*
Problem
- Input: array of numbers
- Output: integer

- Rules:
  - each array will contain only numbers, and at least 1
- Questions:
  - XX

Examples
- as expected

Data Structure
- for loop

Algorithm
- add the numbers of the array together, starting with the first index, then
first + second, then first + second + third, etc.
- return the total when done with array

- create a totalSum variable
- iterate over the array and each iteration...
  - slice it into a copy array from index 0 to index count (count starting at 1)
  - then reduce that array and find the sum
  - add that sum to totalSum
- return totalSum

*/

function sumOfSums(array) {
  let totalSum = 0;

  for (let index = 1; index <= array.length; index++) {
    let currentSum = array.slice(0, index).reduce((accum, currentVal) => accum + currentVal);
    totalSum += currentSum;
  }

  return totalSum;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35