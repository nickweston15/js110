/*
Problem
- Input: two arrays of numbers
- Output: one array of numbers

- Rules:
  - each array will have the same number of elements
  - elements at the same index should be multiplied together

- Questions:
  - blanks?

Examples
- as expected

Data Structure
- holding array

Algorithm
- create a holding array
- iterate from 0 to length of either array
  - each iteration, multiply index[count] of each array together
  - push result to holding array
- return holding array

*/

function multiplyList(array1, array2) {
  let result = [];

  for (let index = 0; index < array1.length; index += 1) {
    result.push(array1[index] * array2[index]);
  }

  return result;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]