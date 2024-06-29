/*
Problem
- Input: string
- Output: array of strings

- Rules:
  - blank strings return blank arrays
  - each string in the answer array is a word, space, int
  - the int should be the length of the word
- Questions:
  - XX

Examples
- punctuation counts as chars for length

Data Structure
- XX

Algorithm
- create a variable and split the string into an array of words
- return a map of that array and each element...
  - element concat with a space and length of element

*/

function wordLengths(words) {
  if (arguments.length === 0 || words.length === 0) {
    return [];
  }

  return words.split(" ").map(word => {
    return word + " " + String(word.length);
  });
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []