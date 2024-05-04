const rl = require("readline-sync");

const SUITS = ["H", "D", "S", "C"];
const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const ACE_VALUE = 11;
const FACE_VALUE = 10;
const GOAL_SUM = 21;
const DEALER_MIN_SUM = 17;

function prompt(message) {
  console.log(`=> ${message}`);
}


function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }

  return array;
}

function initializeDeck() {
  let deck = [];

  for (let suitIndex = 0; suitIndex < SUITS.length; suitIndex++) {
    let suit = SUITS[suitIndex];

    for (let valueIndex = 0; valueIndex < VALUES.length; valueIndex++) {
      let value = VALUES[valueIndex];
      deck.push([suit, value]);
    }
  }

  return shuffle(deck);
}

function total(cards) {

  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === "A") {
      sum += ACE_VALUE;
    } else if (["J", "Q", "K"].includes(value)) {
      sum += FACE_VALUE;
    } else {
      sum += Number(value);
    }
  });


  values
    .filter(value => value === "A")
    .forEach(_ => {
      if (sum > GOAL_SUM) sum -= 10;
    });

  return sum;
}

function busted(cards) {
  return total(cards) > GOAL_SUM;
}

function playerTurn(playerCards, deck) {
  while (true) {
    let playerTurn;
    while (true) {
      prompt("Would you like to (h)it or (s)tay?");
      playerTurn = rl.question().toLowerCase();
      if (["h", "s"].includes(playerTurn)) break;
      prompt("Sorry, must enter 'h' or 's'.");
    }

    if (playerTurn === "h") {
      playerCards.push(deck.pop());
      console.clear();
      prompt("You chose to hit!");
      prompt(`Your cards: ${hand(playerCards)}.`);
      prompt(`Your total: ${total(playerCards)}.`);
    }

    if (playerTurn === "s" || busted(playerCards)) break;
  }
}

function dealerTurn(dealerCards, deck) {
  while (total(dealerCards) < DEALER_MIN_SUM) {
    prompt(`Dealer hits!`);
    dealerCards.push(deck.pop());
    prompt(`Dealer's cards: ${hand(dealerCards)}.`);
  }
}

function detectResult(dealerCards, playerCards) {
  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  if (playerTotal > GOAL_SUM) {
    return "PLAYER_BUSTED";
  } else if (dealerTotal > GOAL_SUM) {
    return "DEALER_BUSTED";
  } else if (dealerTotal < playerTotal) {
    return "PLAYER";
  } else if (dealerTotal > playerTotal) {
    return "DEALER";
  } else {
    return "TIE";
  }
}

function logFinalScore(dealerCards, playerCards) {
  console.log("=============");
  prompt(`Dealer has ${hand(dealerCards)}, for a total of: ${total(dealerCards)}.`);
  prompt(`Player has ${hand(playerCards)}, for a total of: ${total(playerCards)}.`);
  console.log("=============");
}

function displayResults(dealerCards, playerCards) {
  let result = detectResult(dealerCards, playerCards);

  switch (result) {
    case "PLAYER_BUSTED":
      prompt("You busted! Dealer wins!");
      break;
    case "DEALER_BUSTED":
      prompt("Dealer busted! You win!");
      break;
    case "PLAYER":
      prompt("You win!");
      break;
    case "DEALER":
      prompt("Dealer wins!");
      break;
    case "TIE":
      prompt("It's a tie!");
  }
}

function playAgain() {
  console.log("=============");
  prompt("Do you want to play again? (y or n)");
  let answer = rl.question();
  return answer.toLowerCase()[0] === "y";
}

function popTwoFromDeck(deck) {
  return [deck.pop(), deck.pop()];
}

function hand(cards) {
  return cards.map(card => `${card[1]}${card[0]}`).join(", ");
}

console.clear();
prompt("Welcome to Twenty-One!");

while (true) {

  let deck = initializeDeck();
  let playerCards = [];
  let dealerCards = [];


  playerCards.push(...popTwoFromDeck(deck));
  dealerCards.push(...popTwoFromDeck(deck));

  prompt(`Dealer has ${hand([dealerCards[0]])} and ?`);
  prompt(`You have: ${hand(playerCards)}, for a total of ${total(playerCards)}.`);


  playerTurn(playerCards, deck);

  if (busted(playerCards)) {
    displayResults(dealerCards, playerCards);
    if (playAgain()) {
      console.clear();
      continue;
    } else {
      break;
    }
  } else {
    console.clear();
    prompt(`You stayed at ${total(playerCards)}.`);
  }


  prompt("Dealer turn...");
  dealerTurn(dealerCards, deck);

  if (busted(dealerCards)) {
    prompt(`Dealer total: ${total(dealerCards)}.`);
    displayResults(dealerCards, playerCards);
    if (playAgain()) {
      console.clear();
      continue;
    } else {
      break;
    }
  } else {
    prompt(`Dealer stays at ${total(dealerCards)}.`);
  }


  logFinalScore(dealerCards, playerCards);
  displayResults(dealerCards, playerCards);

  if (!playAgain()) break;

  console.clear();
}

console.log("===============");
console.log("We hope to see you again soon!");