let count = 0;
let countg = 0;
let pEl = document.getElementById("score");
let pgEl = document.getElementById("guest");
let leadingTeam = document.getElementById("scorem");

function addOne() {
  count += 1;

  updateScore();
}

function addTwo() {
  count += 2;

  updateScore();
}

function addThree() {
  count += 3;

  updateScore();
}

function addOneGuest() {
  countg += 1;

  updateScore();
}

function addTwoGuest() {
  countg += 2;

  updateScore();
}

function addThreeGuest() {
  countg += 3;

  updateScore();
}

function newGame() {
  count = 0;
  countg = 0;
  pgEl.innerText = countg;
  pEl.innerText = count;
}

function updateScore() {
  pEl.innerText = count;
  pgEl.innerText = countg;
  highlightWinner();
}

function highlightWinner() {
  if (count > countg) {
    pEl.classList.add("leading");
    pgEl.classList.remove("leading");
  } else if (countg > count) {
    pgEl.classList.add("leading");
    pEl.classList.remove("leading");
  } else {
    // If it's a tie, remove highlight from both
    pEl.classList.remove("leading");
    pgEl.classList.remove("leading");
  }
}
