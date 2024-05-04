/*
Problem
- Input: string
- Output: an array containing a list of substrings of the given string
- each substring should begin with the first letter of the given string
- the list should be ordered from shortest to longest

Examples
- nothing learned

Data Structure
- loop, possibly slice with count

Algorithm
-  create a blank answer array
- loop through the string and push .slice(0, count) to the array with count
starting at 1
- sort the array and save as a new variable
- return the new variable

*/

function leadingSubstrings(string) {
  let answer = [];

  for (let count = 1; count <= string.length; count += 1) {
    answer.push(string.slice(0, count));
  }

  return answer;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]