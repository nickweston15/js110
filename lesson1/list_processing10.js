/*
Problem
- Input: int and array of objects
- Output: Boolean

- Rules:
  - return true if the quantity of that ID is greater than 0
  - based on the order of their index, IDs can gain or lose quantity depending
  on the movement key's value of "in" or "out"
- Questions:
  - negatives, non ints, etc.

Examples
- 101 is -1 quantity by the end, return false
rest as expected

Data Structure
- object that stores quantity amounts

Algorithm 1
- create a blank holdingObject
- iterate over the array and forEach object...
  - check if that ID exists as a key
    - if yes..
      - if movement is "in"
        - add to the value int (representing quantity)
      - if movement is "out"
        - subtract from the value int (representing quantity)
    - if no...
      - create the key ID and assign the quantity int as the value
- if holdingObject[original int ID argument] > 0
  - return true
- else
  - return false

Algorithm 2
- filter the array down to only the objects with the ID key's value matching
the passed int argument
- create a totalQuantity variable
- iterate over the array and forEach object...
  - if movement is "in"
    - add to the totalQuantity the value of the quantity key
  - if movement is "out"
    - subtract from the totalQuantity the value of the quantity key
- return totalQuantity > 0

*/

const ID_KEY_NAME = "id";

function transactionsFor(ID, trans) {
  let answerArray = trans.filter(object => {
    return object[ID_KEY_NAME] === ID;
  });

  return answerArray;
}

function isItemAvailable(ID, trans) {
  let totalQuantity = 0;
  let filteredTrans = transactionsFor(ID, trans);

  filteredTrans.forEach(object => {
    if (object["movement"] === "in") {
      totalQuantity += object["quantity"];
    } else {
      totalQuantity -= object["quantity"];
    }
  });

  return totalQuantity > 0;
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

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true