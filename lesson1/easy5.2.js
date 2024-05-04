/*
Problem
- Input: two different arrays of values
- Output: one array that combines the values of the arrays while
removing any duplicates
- what are values here?

Examples
- values look to be only positive integers

Data Structure
- def need a holding array, well maybe not

Algorithm
- use spread syntax to merge arrays
- create a holding array
- use filter on merged array and push any non-duplicates to holding array

*/

// LS Solution

function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    if (!resultArray.includes(value)) {
      resultArray.push(value);
    }
  });
}

function union(...args) {
  const newArray = [];

  args.forEach(value => copyNonDupsTo(newArray, value));

  console.log(newArray);
}

// My solution that didn't quite work
/*
function union(arr1, arr2) {
  let merged = [...arr1, ...arr2];
  let holding = [];

  merged.forEach(value => {
    if (holding.includes(value)) {
      continue;
    } else {
      holding.push(value);
    }
  });

  console.log(holding);
}
*/

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]