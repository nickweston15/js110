/*
Problem
- Input: a positive integer
- Output: an integer

Examples
- 1 or 0 should return 0

Data Structure
- a couple for loops

Algorithm
- find the numbers to use
  - create a blank array and push from 0 to the given num
- get the total sum with a for loop
- sumOfSquares would be the same loop but the numbers squared first
- result is the difference of sum ** 2 - sumOfSquares

*/

function sumSquareDifference(count) {
  let sum = 0;
  let sumofSquares = 0;

  for (let num = 1; num <= count; num++) {
    sum += num;
    sumofSquares += Math.pow(num, 2);
  }

  return Math.pow(sum, 2) - sumofSquares;

}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
console.log(sumSquareDifference(100));    // 25164150