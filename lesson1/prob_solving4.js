/*
Problem
- Input: XX
- Output: XX

- Rules:
  - XX

- Questions:
  - XX

Examples
- XX

Data Structure
- XX

Algorithm
- XX

*/

function buildStarRow(spacesBetween, spacesPadding) {
  let asterisks = ["*", "*", "*"];
  let starRow = asterisks.join(" ".repeat(spacesBetween));
  let paddedStarRow = " ".repeat(spacesPadding) + starRow;

  return paddedStarRow;
}

function star(size) {
  let middleIdx = Math.floor(size / 2);

  for (let idx = 0; idx < middleIdx; idx += 1) {
    let spacesBetween = (size - 3) / 2 - idx;
    let spacesPadding = idx;
    console.log(buildStarRow(spacesBetween, spacesPadding));
  }

  console.log("*".repeat(size));

  for (let idx = 0; idx < middleIdx; idx += 1) {
    let spacesBetween = idx;
    let spacesPadding = (size - 3) / 2 - idx;
    console.log(buildStarRow(spacesBetween, spacesPadding));
  }
}

star(7);

star(9);