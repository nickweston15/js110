/*
Problem
- Input: string of words
- Output: object with keys of integers and values of integers representing
how many words are the length of the key
- what is a word

Examples
- any sequence of non-space characters is a word

Data Structure
- new obj, looping with forEach

Algorithm
- create holding obj 
- Split the string to an array of words
- Iterate over array and check if the word length is a key yet
  - if not, then create the key and make the value 1
  - if yes, then add 1 to the value

*/

function wordSizes(str) {
  let wordsArray = str.split(" ");
  let count = {};

  for (let index = 0; index < wordsArray.length; index += 1) {
    let wordSize = wordsArray[index].length;
    
    if (wordSize === 0) {
      continue;
    }

    if (!count[wordSize]) {
      count[wordSize] = 0;
    }
    count[wordSize] += 1;
  }

  console.log(count);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}