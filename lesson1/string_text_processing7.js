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

function staggeredCase(string) {
  let needUpper = true;

  return string
    .split("")
    .map(char => {
      char = char.toLowerCase();
      if (char >= "a" && char <= "z") {
        if (needUpper) {
          needUpper = false;
          return char.toUpperCase();
        } else {
          needUpper = true;
          return char.toLowerCase();
        }
      } else {
        return char;
      }
    })
    .join("");
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);