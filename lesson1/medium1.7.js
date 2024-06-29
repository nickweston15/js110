/*
Problem
- Input: integer (fibonacci index)
- Output: integer (fibonacci number)

- Rules:
  - Output should be the fibonacci number with index of the argument
  - index starts at 1
- Questions:
  - XX

Examples
- As expected

Data Structure
- Recursive loop

Algorithm
- iterate through fibonacci numbers while keeping track of their index
  - if the index matches the argument, return the number

- code out the fibonacci loop (do / while)
  - while count does not equal index
- return fibonacci

*/

/* Not recursive, but mine works

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

// LS solution

function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  }

  return fibonacci(nth - 1) + fibonacci(nth - 2);
}


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765