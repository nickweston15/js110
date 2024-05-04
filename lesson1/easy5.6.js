/*
Problem
- Input: array of integers
- Output: a string of a number, rounded to 3 decimal places
- what types of integers?

Examples
- positive integers, no infinity or NaN

Data Structure
- feels like a job for the reduce function to get one number then just some
result manipulation

Algorithm
- multiply all numbers together in the array and save the result as a variable
  - use reduce
- save a new variables as that result divided by the length of the array
  - make sure I have that length first if reduce is destructive, it's not
- convert that number to a string, if needed
- round it to 3 decimals and log it

*/

function multiplicativeAverage(array) {
  let product = array.reduce((accum, currentValue) => accum * currentValue);

  let answer = (product / array.length).toFixed(3);

  console.log(answer);
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"