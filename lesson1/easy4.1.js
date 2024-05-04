/*
Problem
- Input: 6 numbers obtained from the user using rl
- Output: An interpolated string that tells the user if their 6th entered
number appears in the first five entered numbers and what those numbers were
- Can the numbers be negative? Floating? NaN? Infinity? 

Examples
- All numbers given are whole, positive, integers

Data Structure
- Something that loops the question 6 times
- Store the numbers in an array, then includes method 

Algorithm
- Ask the user for 5 numbers and store them in an array
- Ask the user for a 6th number and store it as a variable
- Check if the variable is included in the array 
- Log a message to the console telling the user either way

*/

let rl = require("readline-sync");

let numsArray = [];

numsArray.push(rl.question("Enter the 1st number: "));
numsArray.push(rl.question("Enter the 2nd number: "));
numsArray.push(rl.question("Enter the 3rd number: "));
numsArray.push(rl.question("Enter the 4th number: "));
numsArray.push(rl.question("Enter the 5th number: "));
console.log("Enter the last number: ");
let numToCheck = Number(rl.prompt());

if (numsArray.includes(numToCheck)) {
  console.log(`The number ${numToCheck} appears in ${numsArray}.`);
} else {
  console.log(`The number ${numToCheck} does not appear in ${numsArray}.`);
}