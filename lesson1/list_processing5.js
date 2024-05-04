/*
Problem
- Input: a string
- Output: an array containing a list of all possible substrings from the given
string, with all substrings starting with the letter at index 0 coming first
and then index 1, etc. and within that framework, shortest to longest

Examples
- nothing learned

Data Structure
- 

Algorithm
- set up an answer array
- use a for loop to iterate through starting letters with the slice method
- each iteration, call the helper function, which pushes all combos to the
answer array

*/

// LS solution
/*
function substrings(string) {
  let substrings = [];

  for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
    let substring = string.substring(startIndex);
    substrings = substrings.concat(leadingSubstrings(substring));
  }

  return substrings;
}

function leadingSubstrings(string) {
  let substrings = [];

  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}
*/

// My solution

function substrings(string) {
  let answer = [];

  for (let count = 0; count < string.length; count += 1) {
    leadingSubstrings(string.slice(count), answer);
  }

  return answer;
}

function leadingSubstrings(string, arr) {
  for (let count = 1; count <= string.length; count += 1) {
    arr.push(string.slice(0, count));
  }
}

console.log(substrings('abcde'));


// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]