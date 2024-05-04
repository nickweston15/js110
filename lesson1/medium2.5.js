/*
Problem
- Input: an integer
- Output: the next featured number greater than the input integer, or error
- what is a feature number? Once that is odd, divisible by 7, and all of its
digits appear only once
- what about 0, return 7?

Examples
- the highest possible featured number is 9876543201 

Data Structure
- 

Algorithm
- check if lower than highest featured number and return error if so
- for loop starting at given num, going to highest featured num
- use 3 helper functions
  - one check if multiple of 7
    - easy
  - one check if odd
    - easy
  - one check if digits only used once
    - ?
- if all of these return true, log count

*/

// LS solution

function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = toOddMultipleOf7(number);

  do {
    if (allUnique(featuredNum)) {
      return featuredNum;
    }
    featuredNum += 14;
  } while (featuredNum <= MAX_FEATURED);

  return "There is no possible number that fulfills those requirements.";
}

function toOddMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 2 === 0 || number % 7 !== 0);

  return number;
}

function allUnique(number) {
  let digits = String(number).split("");
  let seen = {};

  for (let idx = 0; idx < digits.length; idx += 1) {
    if (seen[digits[idx]]) {
      return false;
    }

    seen[digits[idx]] = true;
  }

  return true;
}


// My almost solution
/*
function featured(int) {
  const LARGEST_POSSIBLE_FEATURED_NUMBER = 9876543201;

  if (int >= LARGEST_POSSIBLE_FEATURED_NUMBER) {
    return "There is no possible number that fulfills those requirements.";
  }

  for (let count = int; count <= LARGEST_POSSIBLE_FEATURED_NUMBER; count += 1) {
    if (isOdd && isMultipleOfSeven && digitsOnlyOnce) {
      return count;
    } else {
      continue;
    }
  }
}

function isOdd(num) {
  return num % 2 !== 0;
}

function isMultipleOfSeven(num) {
  return num % 7 === 0;
}

function digitsOnlyOnce(num) {
  ?????
}
*/

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."