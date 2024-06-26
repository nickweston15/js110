/*
Problem
- Input: sentence as a string
- Output: sentennce as a string with any string numbers replaced with numbers

Examples
- one = 1, so on and so forth

Data Structure
- 

Algorithm
- 

*/

const NUM_WORDS = {
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
};

function wordToDigit(sentence) {
  Object.keys(NUM_WORDS).forEach(word => {
    let regex = new RegExp("\\b" + word + "\\b", "g");
    sentence = sentence.replace(regex, NUM_WORDS[word]);
  });

  console.log(sentence);
}


wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."