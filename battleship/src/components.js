const friendly = document.querySelector('.friendly-waters');
const enemy = document.querySelector('.enemy-waters');

function createGrid(gridType) {
  for (let i = 0; i < 10 * 10; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridType.appendChild(gridItem);
  }
}

export { createGrid };
