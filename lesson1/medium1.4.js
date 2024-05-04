/*
Problem
- Input: a string argument telling what commands to call and on what numbers 
- Output: an integer after performing an operation requested
- all values supplied with be integers and won't do invalid operations
- supposed to initialize stack to [] and register to 0

Examples
- if there's no print statement, nothing should be logged
- can print multiple lines in one request
- can push number multiple times in a row with consecutive push statements

Data Structure
- switch statement

Algorithm
- set stack and register to their values
- set up PRINT to log the register
- set up the other statements to do their action to the register and last value
- figure out how to save numbers in the right order as stack or register

*/

function minilang(program) {
  let stack = [];
  let register = 0;
  program.split(" ").forEach(token => {
    switch (token) {
      case "ADD":
        register += stack.pop();
        break;
      case "DIV":
        register = Math.floor(register / stack.pop());
        break;
      case "MULT":
        register *= stack.pop();
        break;
      case "REMAINDER":
        register = Math.floor(register % stack.pop());
        break;
      case "SUB":
        register -= stack.pop();
        break;
      case "PUSH":
        stack.push(register);
        break;
      case "POP":
        register = stack.pop();
        break;
      case "PRINT":
        console.log(register);
        break;
      default:
        register = Number(token);
    }
  });
  return register;
}


minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)