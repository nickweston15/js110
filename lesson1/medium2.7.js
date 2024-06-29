/*
Problem
- Input: array
- Output: sorted array (mutated original)
- Rules:
  - array will contain at least two elements
  - array elements should be sorted in ascending order
- Questions:
  - will argument arrays only contain one data type?

Examples
- looks like all same data type

Data Structure
- XX

Algorithm
- while array does not equal sorted array
  - run oneSwapThrough and pass the array
- return array

oneSwapThrough helper fn
  - iterate through the array starting at index 0, up to length, increment by 1
    - if element at index is greater than element at index + 1, swap the two
- note to make sure this mutates the array, because we won't return anything

*/

function bubbleSort(array) {
  while (true) {
    let swapped = false;
    for (let index = 1; index < array.length; index += 1) {
      if (array[index - 1] <= array[index]) continue;
      [array[index - 1], array[index]] = [array[index], array[index - 1]];
      swapped = true;
    }
    if (!swapped) break;
  }
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]