let turn = "x";
let symbols = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const board = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));

board.addEventListener("click", ({ target }) => {
  const classes = Array.from(target.classList);
  if (classes.includes("tile") && classes.length !== 1) return;

  const idx = tiles.indexOf(target);

  target.classList.add(`tile-${turn}`);
  symbols[idx % 3][Math.floor(idx / 3)] = turn;
  turn = turn === "x" ? "o" : "x";

  displayTurn(turn);

  setTimeout(function () {
    checkWin();
  }, 100);
});

function displayTurn(turn) {
  document.getElementsByClassName("turn").item(0).innerHTML =
    turn.toUpperCase() + " turn";
}

function checkWin() {
  if (
    (symbols[0][0] == symbols[1][1] &&
      symbols[1][1] == symbols[2][2] &&
      symbols[1][1] != "") ||
    (symbols[0][2] == symbols[1][1] &&
      symbols[1][1] == symbols[2][0] &&
      symbols[1][1] != "")
  ) {
    alert(symbols[1][1] + " wins!");
    return;
  }
  for (symbol in symbols) {
    if (
      symbols[symbol][0] == symbols[symbol][1] &&
      symbols[symbol][1] == symbols[symbol][2] &&
      symbols[symbol][0] != ""
    ) {
      alert(symbols[symbol][0] + " wins!");
      return;
    } else if (
      symbols[0][symbol] == symbols[1][symbol] &&
      symbols[1][symbol] == symbols[2][symbol] &&
      symbols[0][symbol] != ""
    ) {
      alert(symbols[0][symbol] + " wins!");
      return;
    }
  }
}

// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset
document.querySelector(".reset").addEventListener("click", () => {
  reset();
});
function reset() {
  // 4. zresetuj stan gry
  turn = "x";
  symbols = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  displayTurn(turn);
  for (tile in tiles) {
    tiles[tile].classList = "tile";
  }
}
