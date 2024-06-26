/*
Problem
- Input: string, string
- Output: int

- Rules:
  - output should be an int representing the amount of times the
  first string argument appears in the second string argument
  - search is case insensitive
  - punctuation is part of words, only spaces are breaks
- Questions:
  - XX

Examples
- as expected

Data Structure
- XX

Algorithm
- split the text into an array of words
- filter to the ones with the word
- return length

*/

function searchWord(word, text) {
  const regex = new RegExp(word, "gi");
  const matches = text.match(regex);

  return matches ? matches.length : 0;
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3