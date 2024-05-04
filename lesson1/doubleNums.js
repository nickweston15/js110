// No mutation, double odd values
/*
let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleNumbers(arr) {
  let count = 0;
  let doubledNums = [];

  while (count < arr.length) {
    let currentNum = arr[count];

    if (currentNum % 2 !== 0) {
      doubledNums.push(currentNum * 2);
    } else {
      doubledNums.push(currentNum);
    }

    count += 1;
  }

  return doubledNums;
}

console.log(doubleNumbers(myNumbers)); 
console.log(myNumbers);               
*/

// No mutation, double odd INDICES
/*
let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleNumbers(arr) {
  let doubledNums = [];

  for (let count = 0; count < arr.length; count += 1) {
    let currentNum = arr[count];

    if (count % 2 !== 0) {
      doubledNums.push(currentNum * 2);
    } else {
      doubledNums.push(currentNum);
    }
  }
  return doubledNums;
}

console.log(doubleNumbers(myNumbers)); 
console.log(myNumbers);        
*/

// Mutation
/*
let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleNumbers(arr) {
  let count = 0;

  while (count < arr.length) {
    myNumbers[count] *= 2;

    count += 1;
  }

  return myNumbers;
}

console.log(doubleNumbers(myNumbers)); 
console.log(myNumbers);                
*/

// No mutation, multiple by something

let myNumbers = [1, 4, 3, 7, 2, 6];
const multiplyBy = 3;

function multiply(arr, product) {
  let count = 0;
  let doubledNums = [];

  while (count < arr.length) {
    let currentNum = arr[count];

    doubledNums.push(currentNum * product);
    
    count += 1;
  }

  return doubledNums;
}

console.log(multiply(myNumbers, multiplyBy)); 
console.log(myNumbers);              