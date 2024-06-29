/*
Problem
- Input: array of strings
- Output: logs of each vehicle and occurences as a string

- Rules:
  - each vehicle should be logged once
  - each log should be on a new line
  - case matters

- Questions:
  - blanks?

Examples
- as expected

Data Structure
- object created to hold vehilces and counts
- formatting for logging

Algorithm
- create a blank holding object
- iterate over the array and check if that key exists in the object
  - if yes, add one to value
  - if no, create it with a value of 1
- iterate over the array of entries of the object
  - forEach element
    - setup `` to log the index 0, arrow, index 1, newline

*/

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

function countOccurrences(array) {
  let object = {};

  for (let index = 0; index < array.length; index += 1) {
    object[array[index]] ? object[array[index]] += 1 : object[array[index]] = 1;
  }

  Object.entries(object).forEach(element => {
    console.log(`${element[0]} => ${element[1]}`);
  });
}

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1