/*
Problem
- Input: integer and an array of objects
- Output: array of objects, filtered

- Rules:
  - the output should only include objects where the id key's value
  matches the integer argument
- Questions:
  - blanks, etc. 

Examples
- as expected, in order as they appear in the object

Data Structure
- XX

Algorithm
- filter the original array to only the objects with the value of the ID key
that matches the int passed

- create a new answerArray
- filter the original array and for each object...
  - check if the ID key has the value of the int and return true if it does
    - if object["id"] === int, return true, else return false
- return answerArray

*/

const ID_KEY_NAME = "id";

function transactionsFor(ID, trans) {
  let answerArray = trans.filter(object => {
    return object[ID_KEY_NAME] === ID;
  })

  return answerArray;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]