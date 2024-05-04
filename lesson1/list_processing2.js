/*
Problem
- Input: array of integers between 0-19
- Output: same array of integers, but sorted based on english
alphabetical order

Examples
- nothing learned

Data Structure
- a const obj with mappings for every number, 0-19
- holding array

Algorithm
- create a const obj to map numbers to words
- create a holding array
- create answer array
- loop through given array and push to holding array the mapped word
- use sort() on holding array
- loop through holding array and push to answer array the mapped number
- return the answer array

*/

// LS solution

const NUMBER_WORDS = ["zero", "one", "two", "three", "four", "five", "six",
"seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen",
"fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

function wordSort(num1, num2) {
  if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(array) {
  return [...array].sort(wordSort);
}

// My almost answer 
/*
function alphabeticNumberSort(array) {
  const wordNumbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
  };

  let holding = [];
  let answer = [];

  for (count = 0; count < array.length; count += 1) {
    holding.push(wordNumbers[count]);
  }

  let sortedHolding = holding.sort();

  for (count = 0; count < sortedHolding.length; count += 1) {
    answer.push(wordNumbers[?]);
  }

}
*/

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]