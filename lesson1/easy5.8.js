/*
Problem
- Input: positive integer
- Output: array of integers

- Rules:
  - input will always be positive

- Questions:
  - blanks?

Examples
- as expected

Data Structure
- XX

Algorithm
- split the number to an array of strings for each one
- iterate over the array and map Number(num)
- return new array

*/

function digitList(number) {
  return String(number).split("").map(num => {
    return Number(num);
  });
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]