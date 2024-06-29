/*
Problem
- Input: string
- Output: string

- Rules:
  - only words with 5+ letters get reversed
  - words will be separated with a space
  - words themselves stay in their respective order

- Questions:
  - XX

Examples
- as expected

Data Structure
- XX

Algorithm
- split the string to an array of words
- iterate over the array and if the element is 5+ chars, reverse it
- join the array to a string and return it

*/

function reverseWords(string) {
  return string.split(" ").map(word => {
    if (word.length >= 5) {
      return word.split("").reverse().join("");
    } else {
      return word;
    }
  }).join(" ");
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"