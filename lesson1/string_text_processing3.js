/*
Problem
- Input: a string
- Output: an object with 3 properties, lowercase, uppercase, neither
- the values of the object keys should be integers representing how many
of the characters in the string are uppercase, lowercase, or neither

Examples
- only letters should be uppercase/lowercase
- numbers are neither, blanks are none of the 3, essentially skip them

Data Structure
- 

Algorithm
- create an answer object
- use for loop to iterate through string and adding 1 to values if it matches

*/

function letterCaseCount(string) {
  let lowercaseChars = string.match(/[a-z]/g) || [];
  let uppercaseChars = string.match(/[A-Z]/g) || [];
  let neitherChars = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercaseChars.length,
    uppeercase: uppercaseChars.length,
    neither: neitherChars.length,
  };
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }