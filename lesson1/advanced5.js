/*
Problem
- Input: two sorted arrays
- Output: one array, sorted, that merges both arrays

- Rules:
  - the output array should be sorted, regardless of where the elements
  appear in the original arrays
  - blank arrays still get merged
  - can't sort the result array
- Questions:
  - XX

Examples
- as expected

Data Structure
- XX

Algorithm
- 

*/

function merge(array1, array2) {
  let copy1 = array1.slice();
  let copy2 = array2.slice();
  let result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]