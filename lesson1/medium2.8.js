/*
Problem
- Input: either a string or a variable that is assigned the value of a string
- Output: 2 strings, 1 being the longest sentence in the input and the second
being a string that tells how many words that sentence contains
- Rules:
  - print the longest string
  - all non spaces and !, ?, . are words
  - sentences can run more than one line
- Questions:
  - what about empty strings?

Examples
- As we thought

Data Structure
- change strings to arrays to iterate through

Algorithm
- split string into array of sentences using a regex of sentence ends
- iterate through array to find the longest sentence
  - set index of longest to 0
  - set length of longest to length of 0
  - iterate through testing the length of each and if longer that current,
  replace both index with current and length with length of current index
- log sentence and letters
  - log index that it's set to
  - log length that it's set to

*/

function longestSentence(text) {
  let sentences = text.match(/\w.*?[.!?]/g);

  let longest = sentences.reduce(
    function(longest, sentence) {
      let length = sentence.split(/\s/).length;
      if (length > longest.length) {
        return {text: sentence, length: length};
      } else {
        return longest;
      }
    },
    {text: "", length: 0}
  );

  console.log(longest.text + "\n");
  console.log("The longest setntence has " + longest.length + " words.\n");
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent
// a new nation, conceived in liberty, and dedicated to the proposition that
// all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before
// us -- that from these honored dead we take increased devotion to that cause
// for which they gave the last full measure of devotion -- that we here highly
// resolve that these dead shall not have died in vain -- that this nation,
// under God, shall have a new birth of freedom -- and that government of the
// people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.