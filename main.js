const squareDiv = document.createElement('div');
const container = document.querySelector('.container');
const resizeBtn = document.querySelector('.prompt');
const clearBtn = document.querySelector('.clear')
let newGrid = 16;
resizeBtn.addEventListener('click', () => {
  removeSquareDiv();

  do {
    newGrid = prompt('Enter a number between 1 and 100');
  } while ((isNaN(newGrid)) || (newGrid > 100) || (newGrid < 1));
  container.style.backgroundColor = 'white';
  makeGrid(newGrid);
  return (newGrid)

});
clearBtn.addEventListener('click', () => {
  removeSquareDiv();
  makeGrid(newGrid);
})

function removeSquareDiv() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function makeGrid(gridCount) {
  squareDiv.style.width = `${400 / gridCount}px`;
  squareDiv.style.height = `${400 / gridCount}px`;
  for (i = 0; i < (gridCount ** 2); i++) {
    container.appendChild(squareDiv.cloneNode(true))
  };
}
container.addEventListener('mouseover', (event) => {
  event.stopPropagation();
  event.target.style.backgroundColor = 'black';
});

makeGrid(16);
// When Click or resize, redo  the functions with the new gridCount

// When entering the new size, remove the previous divs