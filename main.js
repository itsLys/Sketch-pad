const squareDiv = document.createElement('div');
const container = document.querySelector('.container');
const resizeBtn = document.querySelector('.prompt');


resizeBtn.addEventListener('click', () => {
  makeGrid(prompt('Enter dimensions', '16'))
})



function makeGrid(gridCount) {
  squareDiv.style.width = `${400 / gridCount}px`;
  squareDiv.style.height = `${400 / gridCount}px`;
  for (i = 0; i < (gridCount ** 2); i++) {
    container.appendChild(squareDiv.cloneNode(true))
  };
}
container.addEventListener('mouseover', (event) => {
  event.target.style.backgroundColor = 'black';
});
makeGrid(16);
// When Click or resize, redo  the functions with the new gridCount

// When entering the new size, remove the previous divs