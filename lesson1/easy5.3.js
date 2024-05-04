/*
Problem
- Input: array of values
- Output: nested array, an array containing two arrays with the first one being
the first half of the element in the given array, and the second being the
remainder
- what if there's an odd number?
- what about an empty array? 
- what are the value types within the given array and do they matter?

Examples
- if odd, give the extra to the first array in the nested array
- empty array returns empty array
- values appear to all be positive integers

Data Structure
- create three holding arrays, a top level and two for the nested 

Algorithm
- find the length of the original array (ceiling) and then push that many
element / 2 to the first array
- push the remainder to the second array
- push both of the arrays to the top level array
- log the top level array

*/

function halvsies(array) {
  let topArray = [];
  let bottomArray1 = [];
  let bottomArray2 = [];

  let elementsInBA1 = Math.ceil(array.length / 2);

  for (count = 0; count < elementsInBA1; count += 1) {
    bottomArray1.push(array[count]);
  }

  for (count = elementsInBA1; count < array.length; count += 1) {
    bottomArray2.push(array[count]);
  }

  topArray.push(bottomArray1, bottomArray2);

  console.log(topArray);
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]