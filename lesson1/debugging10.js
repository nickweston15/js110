// The issue is they are mutating the array in real time with splice

function neutralize(sentence) {
  let words = sentence.split(" ");

  return words.filter(word => !isNegative(word)).join(" ");
}

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);