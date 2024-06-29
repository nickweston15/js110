/*
Problem
- Input: a string
- Output: an array of strings

- Rules:
  - Case matters
  - Puntuation matters
  - Single characters are not palindromes
  - Duplicate substrings should be included multiple times as appearing
- Questions:
  - XX

Examples
- palindromes of letters with "-" on each end are two separate palindromes
- arrays seem to be sorted by
  1) where the substring started first
  2) shorter length of substring first

Data Structure
- XX

Algorithm
- XX

*/

function getSubstrings(string) {
  let substrings = [];

  for (let firstIndex = 0; firstIndex < string.length; firstIndex += 1) {
    for (let secondIndex = firstIndex + 1; secondIndex <= string.length; secondIndex += 1) {
      substrings.push(string.slice(firstIndex, secondIndex));
    }
  }

  return substrings;
}

function isPalindrome(string) {
  return string.length > 1 && string === string.split("").reverse().join("");
}

function palindromes(string) {
  return getSubstrings(string).filter(isPalindrome);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]