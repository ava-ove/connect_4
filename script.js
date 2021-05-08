const HEIGHT = 7;
const WIDTH = 7;

let elementArray = [];
let grid = document.querySelector(".grid");

for (let i = 0; i < HEIGHT; i++) {
  let row = [];
  for (let j = 0; j < WIDTH; j++) {
    let cell = document.createElement("div");
    let textNode = document.createTextNode(`(${i}, ${j})`);
    cell.appendChild(textNode);
    grid.appendChild(cell);
    cell.classList.add("cell");
    row.push(cell);
  }
  elementArray.push(row);
}
