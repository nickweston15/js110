/*
Problem
- Input: XX
- Output: XX

- Rules:
  - XX
- Questions:
  - XX

Examples
- XX

Data Structure
- XX

Algorithm
- XX

*/

/* Again, mine

function fibonacci(index) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci = second;

  while (count < index) {
    fibonacci = first + second;
    first = second;
    second = fibonacci;
    count += 1n;
  }

  return fibonacci;
}
*/

// LS Solution

function fibonacci(nth) {
  let previousTwo = [1, 1];

  for (let counter = 3; counter <= nth; counter += 1) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
  }

  return previousTwo[1];
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050