/*
Problem
- Input: A string to a function as an argument
- Output: returning true or false based on a condition
- return true if the string passed as an argument is a palindrome
  - that is, same forward and backward

Examples
- cases, special characters, and spaces, all DON'T matter

Data Structure
- within the function, need a way to store string and check it, an array
- if statement to decide true/false return

Algorithm
- take a string
- split it into an array
- create a new variable, blank string
- iterate over the array, checking if each element is alphanumeric
  - if yes, then make it lowercase and push to string until done
- check if that string is a palindrome using same way as before
- if palindrome, return true, else false

*/

function isRealPalindrome(string) {
  let cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanString === cleanString.split('').reverse().join('');
}

console.log(isRealPalindrome('madam'));             
console.log(isRealPalindrome('Madam'));               
console.log(isRealPalindrome("Madam, I'm Adam"));      
console.log(isRealPalindrome('356653'));              
console.log(isRealPalindrome('356a653'));
console.log(isRealPalindrome('123ab321'));