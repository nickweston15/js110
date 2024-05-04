/*
Problem
- Input: positive integer
- Output: same number, but digits reversed

Examples
- "leading" zeroes should be dropped
- single digits are returned

Data Structure
- 

Algorithm
- split the number to an array
- if array length is one, turn it into a number and log it
- else reverse the array
- drop any zeroes
  - for loop to check if 0, and shift if so
- turn it into a number and log it

*/

function reverseNumber(num) {
  let arr = String(num).split("");
  let revNum = arr.reverse().join("");
  console.log(parseInt(revNum), 10);
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1