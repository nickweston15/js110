/*
Problem
- Input: a nested array of integer elements, any length rows
- Output: the same nested array elements, but rotated 90 degrees, that is, the
top row becomes the right column, right column becomes the bottom row,
bottom row becomes the left column, and left column becomes the top row

Examples
- original nested array should not be modified

Data Structure
- 

Algorithm
- create a new answer nested array
- to find the amount of rows to create, find
the length of the first array
- to find the amount of columns to create, find
the length of the matrix (that is, the amount of original rows)

*/

function rotate90(matrix) {
  let rotated = [];
  let newRowsCount = matrix[0].length;

  for (let rowIdx = 0; rowIdx < newRowsCount; rowIdx += 1) {
    rotated.push([]);
  }

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1) {
    for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx += 1) {
      rotated[colIdx].push(matrix[rowIdx][colIdx]);
    }
  }

  for (let rowIdx = 0; rowIdx < newRowsCount; rowIdx += 1) {
    rotated[rowIdx].reverse();
  }

  return rotated;
}



let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]