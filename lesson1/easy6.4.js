/*
Problem
- Input: integer
- Output: array of integers in ascending order
- can it be positive 0?

Examples
- looks like I can rule out 0 and do the easy ones

Data Structure
- do/while loop that pushes 1 the first time and then checks? 

Algorithm
- create a holding array with a 1 in it
- for loop pushing count to the array until you hit the number
- log holding array

*/

function sequence(num) {
  let holdArray = [];

  for (let count = 1; count <= num; count += 1) {
    holdArray.push(count);
  }

  console.log(holdArray);
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]