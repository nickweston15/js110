/*
Problem
- Input: an integer that is greater than or equal to 2
- Output: an integer, the index of the first Fibonacci number with the digits
of the argument integer

- Rules:
  - The first Fibonacci number has an index of 1
- Questions:
  - XX

Examples
- we're using bigint n in arguments

Data Structure
- XX

Algorithm
- find the Fibonacci numbers
- iterate by Fibonacci number
  - check if digits in number equal int
    - if yes, return the index
    - if no, continue

*/

function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;

  do {
    fibonacci = first + second;
    count += 1n;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return count;
}

console.log(findFibonacciIndexByLength(1n));
console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
// console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.