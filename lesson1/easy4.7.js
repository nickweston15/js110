/*
Problem
- Input: A string
- Output: an object with as many keys as unique substring lengths in the string
- Rules:
  - Implicit: empty string returns a blank object
  - Explicit: non-alphabetic characters should be excluded

Examples
- blank string to blank object

Data Structure
- start with string and turn into array to iterate

Algorithm
- Create a blank answer obj
- IF string is empty, RETURN answer
- Split the string into words as elements in an array so we can iterate
- Iterate over the array
  - IF the answer obj has a key equal to findLength of the element, add 1
    - Determining the length will use a helper function findLength()
  - ELSE push the new key as 1
- RETURN answer obj

- findLength will take a string
- SET count = 0
- split the string into characters in an array
- iterate over the characters checking if they are alphanumeric
  - IF yes, add 1 to count
- RETURN count

*/
const alphabetic = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function wordSizes(str) {
  let answer = {};
  let strArray = str.split(" ");

  if (str.trim() === "") return answer;

  strArray.forEach(word => {
    if (answer[findLength(word)]) {
      answer[findLength(word)] += 1;
    } else {
      answer[findLength(word)] = 1;
    }
  });

  return answer;
}

function findLength(str) {
  let count = 0;
  let charsArray = str.split("");

  charsArray.forEach(char => {
    if (alphabetic.includes(char)) {
      count += 1;
    }
  });

  return count;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}