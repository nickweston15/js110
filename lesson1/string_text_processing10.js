/*
Problem
- Input: string, string
- Output: int

- Rules:
  - output should be the same string, just with the word highlighted
  - every occurence should be highlighted
  - highlighting means **AND ALL CAPS**
- Questions:
  - XX

Examples
- as expected

Data Structure
- XX

Algorithm
- create a regex that matches the word, case insensitive and global
- create an array of words from the string
- iterate through the array and map...
  - if word === word
    - return word formatted to highlight
  - else
    - return word
- join array back into string
- return string

*/

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';


/* My try

function searchWord(keyword, text) {
  let arrayOfWords = text.split(" ");

  arrayOfWords.map(word => {
    if (word === keyword) {
      return `**${word.toUpperCase()}**`;
    } else {
      return word;
    }
  });

  return arrayOfWords.join(" ");
}

*/

// LS Solution

function searchWord(word, text) {
  let ucWord = word.toUpperCase();
  let wordsInText = text.split(" ");
  let highlightedText = [];

  for (let index = 0; index < wordsInText.length; index += 1) {
    let currentWord = wordsInText[index];
    if (currentWord.toUpperCase() === ucWord) {
      currentWord = `**${word.toUpperCase()}**`;
    }

    highlightedText.push(currentWord);
  }

  return highlightedText.join(" ");
}

console.log(searchWord('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?"