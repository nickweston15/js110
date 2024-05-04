/*
Problem
- Input: two integers, representing a count and a starting value
- Output: array containing the same number of elements as the first integer
- the values in the array

Examples
- all values are integers, posiive and negative but count is always positive
- 0 count returns blank array

Data Structure
- holding array for answer

Algorithm
- create holding array
- use for loop to push idx * the starting value to the array until
you hit count length

*/

function sequence(int1, int2) {
  let answer = [];

  for (let idx = 1; idx <= int1; idx += 1) {
    answer.push(idx * int2);  
  }

  console.log(answer);
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []