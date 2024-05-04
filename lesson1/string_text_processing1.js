/*
Problem
- Input: string
- Output: true or false boolean
- true if all of the alphabetic characters inside the string are uppercase,
false otherwise
- ignore any non-alphabetic characters

Examples
- blank should be true

Data Structure
- 

Algorithm
-  split the string to an array and use the every method which returns
true if everything meets it's callback function
  - callback function should be if element === element to uppercase

*/

// LS solution
/*
function isUppercase(string) {
  return string.toUpperCase() === string;
}
*/

// My solution, too complicated, HA!
function isUppercase(string) {
  return string.split("").every(element => {
    return element === element.toUpperCase();
  });
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true