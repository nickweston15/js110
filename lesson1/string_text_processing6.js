/*
Problem
- Input: string
- Output: string, transformed

- Rules:
  - non-alphabetic characters should not be changed
  - non-alphabetic characters should be counted as chars
  - the first letter is always capitalized
  - spaces should be counted as chars
  - if index is odd and it's alphabetic, capitalize it
  - if index is even and it's alphabetic, lowercase it
- Questions:
  - XX

Examples
- as expected

Data Structure
- holding string

Algorithm
- create a blank holding string
- create an array of chars from the original string
- iterate over that array of chars and forEach char...
  - if

*/

function staggeredCase(string) {
  return string
  .split("")
  .map((char, index) => {
    if (index % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  })
  .join("");
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"