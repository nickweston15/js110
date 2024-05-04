/*
Problem
- Input: string
- Output: string, with each character doubled, right next to each other
- empty string? 
- spaces? 

Examples
- spaces treated as characters
- empty string should be empty string 

Data Structure
- shouldn't need one, just a holder string

Algorithm
- create a holding string
- push each character to it twice, in order
- log the holding string

*/

function repeater(str) {
  let answer = str.split("").map(element => element += element).join("");

  console.log(answer);
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""