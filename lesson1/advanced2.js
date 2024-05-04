/*
Problem
- Input: a nested 3x3 array of integer elements
- Output: the same nested array elements, but transposed, that is, the
first row becomes the first column, so on and so forth

Examples
- original nested array should not be modified

Data Structure
- 

Algorithm
- create a new answer nested array
- iterate through the given topArray using forEach and for each element,
element [0] pushed to answer[0]
  - do the same thing with index 1 and 2 pushing to answer[1] and answer[2]

*/

// LS solution, can make sustainable with a const MATRIX SIZE = 3;
function transpose(matrix) {
  let transposed = [];

  for (let rowIdx = 0; rowIdx < 3; rowIdx += 1) {
    transposed.push([]);
  }

  for (let rowIdx = 0; rowIdx < 3; rowIdx += 1) {
    for (let colIdx = 0; colIdx < 3; colIdx += 1) {
      transposed[colIdx].push(matrix[rowIdx][colIdx]);
    }
  }

  return transposed;
}


// My solution
/*
function transpose(topArray) {
  let answer = [
    [],
    [],
    []
  ];

  topArray.forEach(element => answer[0].push(element[0]));
  topArray.forEach(element => answer[1].push(element[1]));
  topArray.forEach(element => answer[2].push(element[2]));

  return answer;
}
*/

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]