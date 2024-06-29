/*
Problem
- Input: positive integer
- Output: Boolean
- Rules:
  - prime numbers are evenly divisible by itself and 1 only
  - 1 is not prime
- Questions:
  - none

Examples
- as expected

Data Structure
-

Algorithm
- check if number if 1, return false
- iterate from 2 up to, but not including the number
  - if number divided by count has remainder 0, return false
- return true if it makes it through all iterations

*/

function is_prime(num) {
  if (num === 1) return false;

  for (let count = 2; count < num; count += 1) {
    if (num % count === 0) return false;
  }

  return true;
}

console.log(is_prime(1) === false)            // true
console.log(is_prime(2) === true)             // true
console.log(is_prime(3) === true)             // true
console.log(is_prime(4) === false)            // true
console.log(is_prime(5) === true)             // true
console.log(is_prime(6) === false)            // true
console.log(is_prime(7) === true)             // true
console.log(is_prime(8) === false)            // true
console.log(is_prime(9) === false)            // true
console.log(is_prime(10) === false)           // true
console.log(is_prime(23) === true)            // true
console.log(is_prime(24) === false)           // true
console.log(is_prime(997) === true)           // true
console.log(is_prime(998) === false)          // true
console.log(is_prime(3_297_061) === true)     // true
console.log(is_prime(23_297_061) === false)   // true