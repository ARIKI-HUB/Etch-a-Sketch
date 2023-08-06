// create div container to store child divs (squares)
//created variable to store number of squares we want to generate
//generate columns (write a for loop which creates columns and appends to parent div container)
// create div "squares" inside div container
//columns
// be able to change colors in the cells when clicked or hovered over
// containers in html, cells in js
let div_container = document.getElementById("parent_Container");
const numberSquaresBtn = document.getElementById("numberSquares");
const clearBtn = document.getElementById("clear");
let numberOfSquares = 16;
numberSquaresBtn.addEventListener("click", (e) => {
  numberOfSquares = prompt("How many squares?");
  while (numberOfSquares > 100) {
    numberOfSquares = prompt("Too many, try 100 or less");
  }
  div_container.innerHTML = "";
  generateGrid();
});
clearBtn.addEventListener("click", (e) => {
  numberOfSquares = 16;
  div_container.innerHTML = "";
  generateGrid();
});
//storing a div container in a variable ^
console.log("div_Container:", div_container);
function generateGrid() {
  for (let i = 0; i < numberOfSquares; i++) {
    const column = document.createElement("div");
    //creating div element, giving it a class
    column.classList.add("column");
    for (let j = 0; j < numberOfSquares; j++) {
      const square = document.createElement("div");
      column.appendChild(square);
      square.classList.add("square");
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "#32A852";
      });
    }
    div_container.appendChild(column);
  }
}
generateGrid();
