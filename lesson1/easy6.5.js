/*
Problem
- Input: string with a first name, space, and last name
- Output: string formatted last name, comma, space, first name
- how will caps work? 
- always that structure or some only first names, double spaces, hyphens, etc.

Examples
- only gives one basic example without anything tricky

Data Structure
- 

Algorithm
- split string to an array with 2 values, one before space and one after
- string interpolate second value, comma & space, then first value

*/

function swapName(str) {
  arr = str.split(" ");
  console.log(`${arr[1]}, ${arr[0]}`);
}

swapName('Joe Roberts');    // "Roberts, Joe"