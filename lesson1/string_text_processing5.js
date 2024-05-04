/*
Problem
- Input: a string
- Output: the same string but with all character cases swapped
- any non alphabetic character should stay the same

Examples
- strings aren't blank, and have no numbers

Data Structure
- 

Algorithm
- use map to transform cases
  if statement checking if lowercase, else make uppercase
- return the string

*/

function swapCase(string) {
  return string
  .split("")
  .map(letter => {
    if ((letter >= "a") && (letter <= "z")) {
      return letter.toUpperCase();
    } else if ((letter >= "A") && (letter <= "Z")) {
      return letter.toLowerCase();
    } else {
      return letter;
    }
  })
  .join("");
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"