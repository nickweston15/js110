/*
Problem
- Input: string
- Output: Boolean

- Rules:
  - can't close a set before you open it

- Questions:
  - XX

Examples
- XX

Data Structure
- XX

Algorithm
- 

*/

function isBalanced(string) {
  let parens = 0;

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === "(") {
      parens += 1;
    } else if (string[index] === ")") {
      parens -= 1;
    }
    if (parens < 0) return false;
  }

  return parens === 0;
}


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);