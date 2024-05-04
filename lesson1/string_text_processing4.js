/*
Problem
- Input: string
- Output: the same string, but with each first letter of a word capitalized

Examples
- quotes and considered the first letter, so the next letter is lowercase
- strings are only letters, and not blank

Data Structure
- 

Algorithm
- split the string into an array of elements at each space
- capitalize the first letter of each element
  - using a map method
- join the array elements back to a string
- return the string

*/

function wordCap(string) {
  array = string.split(" ");

  let capitalArray = array.map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase());

  return capitalArray.join(" ");
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'