// let arr = [1, 2, 3].filter(num => {
//   let string = 'hi';
// });
// // []
// // 
// console.log(arr);

// ['ant', 'bear', 'caterpillar'].pop().length; //

// console.log(['ant', 'bear', 'caterpillar'].pop().length);

// let arr = [[1, 2], [3, 4], Object.entries({name: "Nick", green: true, "26": 26})].map(arr => {
//   return arr.map(num => num * 2); // [2, 4], [6,8]
// });

// // 

// console.log(arr); // [[2, 4], [6, 8]]
// // 

let arr = [{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});

console.log(arr);

// { a: 'ant', b: 'elephant' }
// ["a", "b"]
// { a: 'ant', b: 'elephant' }
// object["a"] => ant[0] => "a" === "a" 
// object["b"] => elephant[0] => "b" === "e" false

//[{ c: 'cat', d: 'dog' }]