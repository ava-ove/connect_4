const HEIGHT = 6;
const WIDTH = 7;

let elementArray = [];
let infoArray = [];
let buttons = [];
let grid = document.querySelector(".grid");
let turn = 0;
let gameOver = false;

function winCheck() {
  for (let i = 0; i < HEIGHT - 3; i++) {
    for (let j = 0; j < WIDTH; j++) {
      let cell = infoArray[i][j];
      if (cell === -1) continue;
      if (
        infoArray[i + 1][j] === cell &&
        infoArray[i + 2][j] === cell &&
        infoArray[i + 3][j] === cell
      ) {
        return true;
      }
    }
  }

  for (let i = 0; i < HEIGHT; i++) {
    for (let j = 0; j < WIDTH - 3; j++) {
      let cell = infoArray[i][j];
      if (cell === -1) continue;
      if (
        infoArray[i][j + 1] === cell &&
        infoArray[i][j + 2] === cell &&
        infoArray[i][j + 3] === cell
      ) {
        return true;
      }
    }
  }

  for (let i = 0; i < HEIGHT - 3; i++) {
    for (let j = 0; j < WIDTH - 3; j++) {
      let cell = infoArray[i][j];
      if (cell === -1) continue;
      if (
        infoArray[i + 1][j + 1] === cell &&
        infoArray[i + 2][j + 2] === cell &&
        infoArray[i + 3][j + 3] === cell
      ) {
        return true;
      }
    }
  }

  for (let i = 3; i < HEIGHT; i++) {
    for (let j = 0; j < WIDTH - 3; j++) {
      let cell = infoArray[i][j];
      if (cell === -1) continue;
      if (
        infoArray[i - 1][j + 1] === cell &&
        infoArray[i - 2][j + 2] === cell &&
        infoArray[i - 3][j + 3] === cell
      ) {
        return true;
      }
    }
  }
  return false;
}

function drawCheck() {
  for (let i = 0; i < HEIGHT; i++) {
    for (let j = 0; j < WIDTH; j++) {
      if (infoArray[i][j] === -1) {
        return false;
      }
    }
  }
  return true;
}

for (let j = 0; j < WIDTH; j++) {
  let button = document.createElement("div");
  button.classList.add("cell");
  button.classList.add("button");
  button.addEventListener("click", function () {
    if (gameOver) {
      return;
    }
    let num;
    turn % 2 === 0 ? (num = 0) : (num = 1);
    if (infoArray[0][j] !== -1) {
      return;
    }
    for (let i = 0; i < HEIGHT + 1; i++) {
      if (i == HEIGHT || infoArray[i][j] !== -1) {
        infoArray[i - 1][j] = num;
        elementArray[i - 1][j].innerHTML = `${num}`;
        if (winCheck()) {
          gameOver = true;
          console.log("HELLO");
        }
        if (drawCheck()) {
          gameOver = true;
        }
        turn++;
        break;
      }
    }
  });
  buttons.push(button);
  grid.appendChild(button);
}

for (let i = 0; i < HEIGHT; i++) {
  let row = [];
  let arr = [];
  for (let j = 0; j < WIDTH; j++) {
    let cell = document.createElement("div");
    let textNode = document.createTextNode("-1");
    cell.appendChild(textNode);
    grid.appendChild(cell);
    cell.classList.add("cell");
    row.push(cell);
    arr.push(-1);
  }
  elementArray.push(row);
  infoArray.push(arr);
}
