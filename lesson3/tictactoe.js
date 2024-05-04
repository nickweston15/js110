const rl = require("readline-sync");
const INITIAL_MARKER = " ";
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";
const POINTS_TO_WIN = 3;
const PLAYER_WIN_MESSAGE = "Player wins!";
const COMPUTER_WIN_MESSAGE = "Computer wins!";
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);

  console.log("");
  console.log("     |     |");
  console.log(`  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}`);
  console.log("     |     |");
  console.log("");
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;
  
  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}.`);
    square = rl.question().trim();
    if (emptySquares(board).includes(square)) break;
    
    prompt("Sorry, that's not a valid choice.");
    }
  
  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let square;

  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }

  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }

  if (!square && board[5] === INITIAL_MARKER) {
    square = 5;
  }
  
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];  
  }
  
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line ++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return PLAYER_WIN_MESSAGE;
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return COMPUTER_WIN_MESSAGE;
    }
  }

  return null;
}

function joinOr(array, delimiter = ", ", lastJoin = "or") {
  switch (array.length) {
    case 0:
      return "";
    case 1:
      return `${array[0]}`;
    case 2: 
      return array.join(` ${lastJoin} `);
    default:
      return array.slice(0, array.length - 1).join(delimiter) +
      `${delimiter}${lastJoin} ${array[array.length - 1]}`;
  }
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

/*
function addToScore(board) {
  if (detectWinner(board) === PLAYER_WIN_MESSAGE) {                
    playerScore += 1;
  } else if (detectWinner(board) === COMPUTER_WIN_MESSAGE) {
    computerScore += 1;
  } else {
    playerScore += 0;
  }
}

function refreshHighScore() {
  highScore = Math.max(playerScore, computerScore);
}

function printScore() {
  if (highScore === POINTS_TO_WIN) {
    prompt(`We have a winner! Final score is you: ${playerScore}, computer: ${computerScore}.`);
  } else {
    prompt(`Current score is you: ${playerScore}, computer: ${computerScore}.`);
  }
}


let playerScore = 0;
let computerScore = 0;
let highScore = 0;
*/


while (true) {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if(someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if(someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)}`);
  } else {
    prompt("It's a tie!");
  }

    prompt("Play again? (y or n)");
    let answer = rl.question().trim().toLowerCase()[0];
    if (answer != "y") break;
}

prompt("Thanks for playing Tic Tac Toe!");