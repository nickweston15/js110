const LOOKUP = "Fruit";

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function findValue(obj, value) {
  let newObj = {};
  let objKeys = Object.keys(obj);

  for (let count = 0; count < objKeys.length; count += 1) {
    let currentKey = objKeys[count];
    let currentValue = obj[currentKey];

    if (currentValue === value) {
      newObj[currentKey] = value;
    }
  }

  return newObj;
}

console.log(findValue(produce, LOOKUP));