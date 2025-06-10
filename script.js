const grid = document.getElementById('grid');
const setButton = document.getElementById('set');
const clearButton = document.getElementById('clear');
const blackButton = document.getElementById('black');
const randomButton = document.getElementById('random');

let gridSize = 16;
let colorMode = 'black';

// Initial grid creation
const createGrid = (size) => {
  grid.innerHTML = '';
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.darkness = '0';
    cell.addEventListener('mouseover', () => {
      if (colorMode === 'black') {
        cell.style.backgroundColor = 'black';
      } else if (colorMode === 'random') {
        cell.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      }
    });
    grid.appendChild(cell);
  }
}

// Function to set the grid size using an input html element and a button
setButton.addEventListener('click', () => {
  const sizeInput = document.getElementById('grid-size');
  const newSize = parseInt(sizeInput.value);
  if (newSize > 0 && newSize <= 100) {
    gridSize = newSize;
    createGrid(gridSize);
  } else {
    alert('Please enter a number between 1 and 100.');
  }
}
);  

// Function to clear the grid
clearButton.addEventListener('click', () => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.style.backgroundColor = '';
  });
});

// Function to set the color mode to black
blackButton.addEventListener('click', () => {
  colorMode = 'black';
});

// Function to set the color mode to random
randomButton.addEventListener('click', () => {
  colorMode = 'random';
});


