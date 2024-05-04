/*
Problem
- Input: a text template
- Output: the text template filled in with random words of the right type
- I need to come up with what the text template looks like as an input

Examples
- looks like they use a newline character after like 5 words

Data Structure
- 

Algorithm
- the templates should be template literals with like 4-5 lines
and spots with ${} for noun, verb, etc.
- then have an array of each type of word
- use a Math.random() to pick an index number
- have the template log the 

*/

// LS solution
let template1 =
  "The %{adjective} brown %{noun} %{adverb} " +
  "%{verb} the %{adjective} yellow " +
  "%{noun}, who %{adverb} %{verb} his " +
  "%{noun} and looks around.";

let template2 = "The %{noun} %{verb} the %{noun}'s %{noun}.";

function madlibs(template) {
  const REPLACEMENT_TEXTS = {
    adjective: ["quick", "lazy", "sleepy", "noisy", "hungry"],
    noun: ["fox", "dog", "head", "leg", "tail"],
    verb: ["jumps", "lifts", "bites", "licks", "pats"],
    adverb: ["easily", "lazily", "noisily", "excitedly"]
  };

  function replaceText(match) {
    let key = match.replace(/[^a-z]/g, "");
    let index = Math.floor(Math.random() * REPLACEMENT_TEXTS[key].length);
    return REPLACEMENT_TEXTS[key][index];
  }

  return template.replace(/%{[a-z]+}/g, replaceText);
}

// My solution
/*
let template1 = 
`The ${adj()} ${noun()} ${verb()} to the bridge and ${adv()} ${verb()} there.`;

let template2 = 
`Yesterday I heard that the ${adj()} ${noun()} ${verb()}, but then
a ${adj()} ${noun()} ${adv()} ${verb()}, so it all turned out ok in the end.`;

function noun() {
  let nounChoices = ["dog", "porcupine", "shrimp", "osprey", "stegasaurus"];
  return nounChoices[Math.floor(Math.random() * nounChoices.length)];
}

function verb() {
  let verbChoices = ["hid", "fell", "bounced", "ate", "laughed"];
  return verbChoices[Math.floor(Math.random() * verbChoices.length)];
}

function adj() {
  let adjChoices = ["affable", "insufferable", "belated", "hungry", "lazy"];
  return adjChoices[Math.floor(Math.random() * adjChoices.length)];
}

function adv() {
  let advChoices = ["ecstaticly", "crazily", "laughably", "brazenly", "disgustingly"];
  return advChoices[Math.floor(Math.random() * advChoices.length)];
}

function madlibs(template) {
  console.log(template);
}
*/

madlibs(template1);
madlibs(template2);