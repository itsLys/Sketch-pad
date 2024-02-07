const squareDiv = document.createElement('div');
const container = document.querySelector('.container');
const resizeBtn = document.querySelector('.prompt');
const clearBtn = document.querySelector('.clear');
const randomBtn = document.querySelector('.random');
const blackBtn = document.querySelector('.black');
const redBtn = document.querySelector('.red');
const blueBtn = document.querySelector('.blue');
const greenBtn = document.querySelector('.green');
const orangeBtn = document.querySelector('.orange');
const progressiveBtn = document.querySelector('.progressive')


function setColorRandom() {
  const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  const rgb = `rgb(${r},${g},${b})`;
  return rgb;
};

// rgba(0, 0, 0, 0);
// return and rgba value with the .1 added to the ad

let newGrid = 16;
function removeSquareDiv() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  };
}
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
});
function makeGrid(gridCount) {
  squareDiv.style.width = `${400 / gridCount}px`;
  squareDiv.style.height = `${400 / gridCount}px`;
  for (i = 0; i < (gridCount ** 2); i++) {
    container.appendChild(squareDiv.cloneNode(true))
  };
};

container.addEventListener('mouseover', (event) => {
  event.stopPropagation();
  event.target.style.backgroundColor = 'black';
});

randomBtn.addEventListener('click', () => {
  container.addEventListener('mouseover', (event) => {
    event.stopPropagation();
    event.target.style.backgroundColor = setColorRandom();
  });
});
let a = 0.1;

blackBtn.addEventListener('click', () => {
  container.addEventListener('mouseover', (event) => {
    event.stopPropagation();
    event.target.style.backgroundColor = 'black';
  });
});

redBtn.addEventListener('click', () => {
  container.addEventListener('mouseover', (event) => {
    event.stopPropagation();
    event.target.style.backgroundColor = 'red';
  });
});
blueBtn.addEventListener('click', () => {
  container.addEventListener('mouseover', (event) => {
    event.stopPropagation();
    event.target.style.backgroundColor = 'blue';
  });
});

greenBtn.addEventListener('click', () => {
  container.addEventListener('mouseover', (event) => {
    event.stopPropagation();
    event.target.style.backgroundColor = 'green';
  });
});
orangeBtn.addEventListener('click', () => {
  container.addEventListener('mouseover', (event) => {
    event.stopPropagation();
    event.target.style.backgroundColor = 'orange';
  });
});
makeGrid(64);