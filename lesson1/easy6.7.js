/*
Problem
- Input: string
- Output: string

- Rules:
  - XX

- Questions:
  - XX

Examples
- XX

Data Structure
- XX

Algorithm
- split the sentence into an array of words
- reverse the array
- join the array back to a string and return it

*/

function reverseSentence(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"