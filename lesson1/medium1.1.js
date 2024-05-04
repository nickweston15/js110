/*
Problem
- Input: should be an array, but can be any value 
- Output: If the argument isn't an array, undefined. If the argument is
an array, then put the first element at the end of the array and log
the new array (without modifying the original array!!).
- empty array input should be empty array output

Examples
- single element arrays should stay single element arrays
- empty array is empty array
- an object/array within the array is one element, treat it as such

Data Structure
- 

Algorithm
- check if input is array and return undefined if not, guard clause
- if the array has length of 1 or less, return the array
- else, create a copy of the array
- remove the first element and save it as a variable (shift)
- push that variable to the new array
- log the array

*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }

  if (arr.length === 0) {
    return [];
  }

  console.log(arr.slice(1).concat(arr[0]));
}

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]