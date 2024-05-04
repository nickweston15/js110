/*
Problem
- Input: unordered array 
- Output: logging a single value that is dupliated
- only one value in the array will be duplicated and the rest occur only once

Examples
- values appear to be positive integers

Data Structure
- a way to find the duplicate

Algorithm
- set a variable to the value at index 0 of array
- check the array using a for loop to see if any value matches and log if so
- go to the next value by increasing the variable to the next index

*/

// LS solution

function findDup(array) {
  let seen = {};

  for (let index = 0; index < array.length; index += 1) {
    if (seen[array[index]]) {
      console.log(array[index]);
      return array[index];
    } else {
      seen[array[index]] = true;
    }
  }
  return undefined;
}

// My discombobulated solution that works but returns the number twice
/*
function findDup(array) {

  for (let count = 0; count < array.length; count += 1) {
    let appearances = 0;
    let currentIndex = array[count];
    
    for (counter = 0; counter < array.length; counter += 1) {
      if (currentIndex === array[counter]) {
        appearances += 1;
      }

      if (appearances > 1) {
        console.log(currentIndex);
        break;
      }
    }
  }
}
*/

findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73