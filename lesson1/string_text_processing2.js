/*
Problem
- Input: array of strings
- Output: array of the same string values but will all vowels removed

Examples
- everything will be a non-blank array of letters 

Data Structure
- 

Algorithm
- Create a blank answer array
- iterate through each element of the original array using forEach
  - while iterating through, use replace with a regex to replace vowels
  with a blank space
  - this way I don't need to iterate though each letter itself
  - chain this inside a push method call to the answer array

*/

// LS solution
/*
function removeVowels(strings) {
  return strings.map(string => string.replace(/[aeiou]/gi, ""));
}
*/


// My solution
function removeVowels(array) {
  let answer = [];
  vowelRegex = /[aeiou]/gi;

  array.forEach(element => {
    answer.push(element.replace(vowelRegex, ""));
  });

  return answer;
}


console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]