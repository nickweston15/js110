/*
Problem
- Input: XX
- Output: XX

- Rules:
  - XX

- Questions:
  - XX

Examples
- XX

Data Structure
- XX

Algorithm
- XX

*/

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function integerToString(number) {
  let result = "";

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

function signedIntegerToString(number) {
  if (Object.is(number, -0)) {
    return "-0";
  }

  switch (Math.sign(number)) {
    case -1:
      return `-${integerToString(-number)}`;
    case +1:
      return `+${integerToString(number)}`;
    default:
      return integerToString(number);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
console.log(signedIntegerToString(-0) === "-0");