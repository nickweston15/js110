/*
Problem
- Input: nested array of subarrays each containing a string, then an int
- Output: array of strings

- Rules:
  - output array contains a word duplicated as many times as it's value int
- Questions:
  - what if 0 value?
  - what if same fruit for multiple keys

Examples
- as expected

Data Structure
- holding array to push strings to

Algorithm
- create a blank answerArray
- iterate over the argument array, and each iteration...
  - iterate over each subarray, and each iteration...
    - WHILE count is less than value, push the key to answerArray
- return answerArray

*/

function buyFruit(array) {
  let answerArray = [];

  for (let outerIndex = 0; outerIndex < array.length; outerIndex++) {
    let count = 0;
    while (count < array[outerIndex][1]) {
      answerArray.push(array[outerIndex][0]);
      count += 1;
    }
  }

  return answerArray;
}


console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]