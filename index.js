const getRandomMove = () => {
  const moves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
};

const getOutcome = (moveOne, moveTwo) => {
  if (moveOne === moveTwo) {
    return "It's a draw!";
  }

  if (
    (moveOne === "scissors" && moveTwo === "paper") ||
    (moveOne === "rock" && moveTwo === "scissors") ||
    (moveOne === "paper" && moveTwo === "rock")
  ) {
    return "Player One wins!";
  }

  return "Player Two wins!";
};

// Removing elements (nodes) from the DOM
const resetGame = () => {
  if (document.getElementById("outcome")) {
    const outcome = document.body.lastChild;
    if (outcome) document.body.removeChild(outcome);
  }
};

const playGame = () => {
  // resetGame();
  const playerOneMove = getRandomMove();
  const playerTwoMove = getRandomMove();
  const outcome = getOutcome(playerOneMove, playerTwoMove);
  updateDOM(playerOneMove, playerTwoMove, outcome);
};

const updateDOM = (moveOne, moveTwo, outcome) => {
  const player1Img = document.getElementById("player-one-move__img");
  const player1Name = document.getElementById("player-one-move__name");
  player1Img.src = `./images/${moveOne}.png`;
  player1Name.innerText = moveOne;
  const player2Img = document.getElementById("player-two-move__img");
  const player2Name = document.getElementById("player-two-move__name");
  player2Img.src = `./images/${moveTwo}.png`;
  player2Name.innerText = moveTwo;
  const outCome = document.getElementById("outcome");
  outCome.innerText = outcome;
};

const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", playGame);
