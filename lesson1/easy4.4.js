/*
Problem
- Input: An integer to a function as an argument
- Output: returning true or false based on a condition
- return true if the integer passed as an argument is a palindrome
  - that is, same forward and backward
- floating point, negative, infinity, Nan?

Examples
- all whole, normal, positive, integers

Data Structure
- simple statement

Algorithm
- take an integer
- convert it to an array via a string
- check if palindrome using reverse
- return true or false

*/

function isPalindromicNumber(num) {
  return isPalindrome(String(num));
}

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true