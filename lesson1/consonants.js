function countMaxAdjacentConsonants(str) {
  str = str.split(" ").join("");

  let count = 0;
  let tempStr = "";

  for (let i = 0; i < str.length; i += 1) {
    let letter = str[i];

    if ("bcdfghjklmnpqrstvwxyz".includes(letter)) {
      tempStr += letter;

      if (tempStr.length > 1 && tempStr.length > count) {
        count = tempStr.length;
      }
    } else {
      tempStr = "";
    }
  }

  return count;
}

function sortStringsByConsonants(arr) {
  let arrCopy = arr.slice();

  let sortedArr = arrCopy.sort((a, b) => {
    return countMaxAdjacentConsonants(b) -
           countMaxAdjacentConsonants(a);
  });
  return sortedArr;
}

let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']