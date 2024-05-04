/*
Problem
- Input: two arrays with values
- Output: a single array, with elements alternating, starting with first array
- what type of values?
- what about empty arrays? 
- different size arrays?

Examples
- arrays won't be empty and will contain same length
- values appear to be positive integers and strings

Data Structure
- obviously a holding array

Algorithm
- create a holding array
- push to holding, the first element of array1, then first element of array 2
  - use a for loop and put the second push a line under the first push
- continue this until the length of array 1
- log holding array

*/

function interleave(arr1, arr2) {
  let holdArray = [];

  for (let count = 0; count < arr1.length; count += 1) {
    holdArray.push(arr1[count]);
    holdArray.push(arr2[count]);
  }

  console.log(holdArray);
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]