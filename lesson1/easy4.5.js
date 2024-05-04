/*
Problem
- Input: array of numbers
- Output: array of numbers, same length (map?)
- NaN, negatives, infinity, floating?
- Empty array?

Examples
- They are all whole, positive, integers
- empty array should return empty array

Data Structure
- starting array, run method on it

Algorithm
- take an array
- create holding array
- iterate over starting array
- first element set to holding
- forEach other element, push to holding, current element + holding - index

*/

function runningTotal(arr) {
  let hold = [];
  let sum = 0;

  for (let idx = 0; idx < arr.length; idx += 1) {
    hold.push((sum += arr[idx]));
  }

  console.log(hold);
};

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []