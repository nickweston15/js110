/*
Problem
- Input: A string to a function as an argument
- Output: returning true or false based on a condition
- return true if the string passed as an argument is a palindrome
  - that is, same forward and backward

Examples
- cases, special characters, and spaces, all matter

Data Structure
- within the function, need a way to store string and check it, an array
- if statement to decide true/false return

Algorithm
- take a string
- split it into an array
- check if the array is a palindrome using reverse
- if palindrome, return true, else false

*/

function isPalindrome(str) {
  strRev = str.split("").reverse().join("");

  if (str === strRev) {
    return true;
  } else {
    return false;
  }
}


/* LS Solution

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

*/

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true