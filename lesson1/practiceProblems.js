// Using tricky second index argument of forEach
/*
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

function arrToObj(arr) {
  let newObj = {};

  arr.forEach((element, index) => {
    newObj[element] = index;
  });

  return newObj;
}

console.log(arrToObj(flintstones));
console.log(flintstones);
*/

// Add all ages
/*
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let sum = 0;

Object.values(ages).forEach(value => sum += value);

console.log(sum);
*/

// Pick minimum age
/*
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

console.log(Math.min(...Object.values(ages)));
*/

// Letter frequencies

let statement = "The Flintstones Rock";

let charInStatement = statement.split("").filter(char => char !== " ");
let newObj = {};

charInStatement.forEach(char => {
  newObj[char] = newObj[char] || 0; //short circuiting to say either value or 0
  newObj[char] += 1;
});

console.log(newObj);