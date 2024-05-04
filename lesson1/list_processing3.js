/*
Problem
- Input: two arrays, each containing a list of numbers
- Output: a new array continaing the products of all combinations of number
pairs that exist between the two arrays, sorted in ascending numerical order
- neither argument will be an empty array

Examples
- everything is a positive integer
- arrays can be different lengths

Data Structure
- create an answer array that is blank
- iterate over the first array, and push the result of multiplying count index
again each of the second array's elements
- do the same for vice versa arrays
- sort the answer array and return it

Algorithm
- create 

*/

function multiplyAllPairs(arr1, arr2) {
  let answer = [];

  for (let idx = 0; idx < arr1.length; idx += 1) {
    let currentIndex = arr1[idx];

    for (let count = 0; count < arr2.length; count += 1) {
      answer.push(currentIndex * arr2[count]);
    }
  }
  
  let sortedAnswer = answer.sort((a, b) => {return a - b});

  return sortedAnswer;
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]