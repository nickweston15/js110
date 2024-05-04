/*
Problem
- Input: a number
- Output: a number, rotated
- the number should be rotated once, then keep the first digit fixed,
continue rotating and keeping the next digit fixed, until you've
rotated with only 2 numbers

Examples
- note that any leading zeroes should be dropped

Data Structure
- parseInt drops zero, maybe using that

Algorithm
- use a loop to call rotateRigthmostDigit the correct amount of times,
which should be equal to however many digits the original number has

*/

function maxRotation(num) {
  let numDigits = String(num).length;

  for (let count = numDigits; count >= 2; count--) {
    num = rotateRightmostDigits(num, count);
  }

  console.log(num);
}

function rotateRightmostDigits(num, count) {
  let strOriginalNum = String(num);
  let yesChange = strOriginalNum.slice(strOriginalNum.length - count);
  let noChange = strOriginalNum.slice(0, strOriginalNum.length - count);
  let resultString = noChange + rotateString(yesChange);
  return Number(resultString);
}

function rotateString(str) {
  return str.slice(1) + str[0];
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845