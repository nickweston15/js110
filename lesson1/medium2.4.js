/*
Problem
- Input: year as an integer
- Output: an integer representing the count of Friday the 13ths in a year
- year will be 1753 or greater
- calendar will remain in use for the forseeable future

Examples
- nothing learned
- inputs will be 4+ digits

Data Structure
- 

Algorithm
- determine a starting point
- minimum = ?
- maximum = 12
- assign Friday to a 
- 

*/

function fridayThe13ths(year) {
  let thirteenths = [];

  for (let month = 0; month < 12; month += 1) {
    thirteenths.push(new Date(year, month, 13));
  }

  console.log(thirteenths);

  return thirteenths.reduce((count, day) => {
    return day.getDay() === 5 ? (count + 1) : count;
  }, 0);
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2