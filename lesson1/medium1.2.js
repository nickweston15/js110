/*
Problem
- Input: two integers, a number, and a count that tells how many places to
rotate
- Output: a rotated integer
- rotate the last count digits of a number
- anything before the count start digit, should be left in order

Examples
- number looks to always be a 6 digit positive integer

Data Structure
- operating on strings that are converted from numbers

Algorithm
- convert the original number to a string
- split the string into parts to remain unchanged and parts to change
- rotate the parts to change
- join the two parts together
- convert from string to number and log it

*/

function rotateRightmostDigits(num, count) {
  let strOriginalNum = String(num);
  let yesChange = strOriginalNum.slice(strOriginalNum.length - count);
  let noChange = strOriginalNum.slice(0, strOriginalNum.length - count);
  let resultString = noChange + rotateString(yesChange);
  console.log(Number(resultString));
}

function rotateString(str) {
  return str.slice(1) + str[0];
}


rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917