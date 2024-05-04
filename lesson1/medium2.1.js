/*
Problem
- Input: string
- Output: object with three properties (% of characters that are lowercase,
% of characters that are uppercase, and % of characters that are neither)
- the string will not be empty

Examples
- spaces are chars, but neither

Data Structure
- 

Algorithm
- create a blank object
- create 3 blank array vars, upper, lower, neither
- convert the string to an array of chars
- figure out what bucket each char falls into and concat it to that var
- when done, divide each var array length by the length of the original array
  - multiply that by 100, & round that number for each var to 2 decimal places
- set the 3 properties of the blank object to the formatted %s

*/

// LS solution

function letterPercentages(string) {
  let count = string.length;

  function percentage(regex) {
    let matchingChars = string.match(regex) || [];
    return ((matchingChars.length / count) * 100).toFixed(2);
  }

  return {
    lowercase: percentage(/[a-z]/g),
    uppercase: percentage(/[A-Z]/g),
    neither:   percentage(/[^a-z]/gi),
  };
}

// My lengthy solution
/* 
function letterPercentages(string) {
  let answer = {};
  let upper = [];
  let lower = [];
  let neither = [];

  let stringArray = string.split("");

  stringArray.forEach(char => {
    if ("abcdefghijklmnopqrstuvwxyz".includes(char.toLowerCase())) {
      if (char === char.toLowerCase()) {
        lower.push(char);
      } else {
        upper.push(char);
      }
    } else {
      neither.push(char);
    }
  });

let upperPercent = ((upper.length / stringArray.length) * 100).toFixed(2);
let lowerPercent = ((lower.length / stringArray.length) * 100).toFixed(2);
let neitherPercent = ((neither.length / stringArray.length) * 100).toFixed(2);

answer["lowercase"] = String(lowerPercent);
answer["uppercase"] = String(upperPercent);
answer["neither"] = String(neitherPercent);

console.log(answer);

}
*/


letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }