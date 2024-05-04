/*
Problem
- Input: string
- Output: string with consonants doubled
- what about non-consonants and non-vowels?

Examples
-  only lettered consonants should be doubled, nothing else

Data Structure
- shouldn't need one

Algorithm
- split the string of characters to an array
- map and in callback use an if to check if the value includes consonant
  - let's bring it to lowercase before checking
- if yes, double it
- log answer

*/

// LS solution

function doubleConsonants(str) {
  const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
  'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

  let answer = [];

  for (let count = 0; count < str.length; count += 1) {
    answer.push(str[count]);
    if (CONSONANTS.indexOf(str[count].toLowerCase()) >= 0) {
      answer.push(str[count]);
    }
  }

  console.log(answer.join(""));
}


// My solution that didn't work
/*
function doubleConsonants(str) {
  let answer = str.split("").map(element => {
    if ("bcdfghjklmnpqrstvwxyz".includes(element.toLowerCase())) {
      element += element;
    }
  }).join("");

  console.log(answer);
}
*/

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""