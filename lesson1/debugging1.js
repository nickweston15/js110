/*
I tihnk this throws a TypeError, cannot read property "forEach" of undefined
becuase since there is no ; after the ladder variable declaration, it still
thinks we are in the process of assigning a value when we call the forEach
method.
*/

let ladder = ""

["head", "heal", "teal", "tall", "tail"].forEach(word => {
  if (ladder !== "") {
    ladder += "-"
  }

  ladder += word
})

console.log(ladder)