/*
Problem
- Input: A string of words seperated by spaces
- Output: the same string, but the first and last char of every word swapped
- Rules:
  - Implicit: case matters, single chars should remain
  - Explicit: every word contains at least one letter, and that the string
  will always contain at least one word. You may also assume that each string
  contains nothing but words and spaces, and that there are no leading,
  trailing, or repeated spaces.
  Questions: what about blank strings? what about punctuation?

Examples
- As we thought

Data Structure
- Might need to save the first and last letters as values explicitly

Algorithm
- split the str into an array of words
- iterate over the array
  - IF the element has length 1, continue
  - ELSE swap first and last
- join array back to one string
- RETURN string

*/

function swap(str) {
  let strArray = str.split(" ");

  for (let idx = 0; idx < strArray.length; idx += 1) {
    strArray[idx] = swapChars(strArray[idx]);
  }

  return strArray.join(" ");
}

function swapChars(word) {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"