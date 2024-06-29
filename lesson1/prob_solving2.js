/*
Problem
- Input: num, int
- Output: art

- Rules:
  - input will always be an odd int

- Questions:
  - 0?

Examples
- as expected

Data Structure
- looping to create row number
- padding and half it

Algorithm
- XX

*/

function diamond(n) {
  numberSequence(n).forEach(number => {
    console.log(`${" ".repeat((n - number) / 2)}${"*".repeat(number)}`);
  });
}

function numberSequence(n) {
  let result = [];
  let increment = 2;
  let number = 1;

  while (number > 0) {
    result.push(number);
    if (number === n) {
      increment = -2;
    }
    number += increment;
  }

  return result;
}

console.log(diamond(1));

console.log(diamond(3));

console.log(diamond(9));
