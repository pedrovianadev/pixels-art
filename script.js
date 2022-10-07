function makePalette() {
  const father = document.getElementById('color-palette');
  for (let index = 0; index < 4; index += 1) {
    const colorPalette = document.createElement('div');
    colorPalette.className = 'color';
    colorPalette.style.display = 'inline-block';
    colorPalette.style.margin = 'auto';
    colorPalette.style.border = '1px solid black';
    colorPalette.style.width = '60px';
    colorPalette.style.height = '60px';
    colorPalette.style.boxShadow = '2px 5px 10px';
    colorPalette.style.borderRadius = '50%';
    father.appendChild(colorPalette);
  }
}

function divBlack() {
  const father = document.getElementById('color-palette');
  father.firstChild.className = 'color selected';
  father.firstChild.style.backgroundColor = 'black';
  father.firstChild.style.display = 'inline-block';
  father.firstChild.style.margin = 'auto';
}

// função que gera a cor random
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
// função que muda a cor
function changeColor() {
  const color = document.getElementsByClassName('color');
  for (let index = 1; index < color.length; index += 1) {
    color[index].style.backgroundColor = randomColor();
    if (color[index].style.backgroundColor === 'rgb(255, 255, 255)') {
      color[index].style.backgroundColor = randomColor();
    }
  }
}
// função do evento do click
function clickButton() {
  const button = document.getElementById('button-random-color');
  button.addEventListener('click', () => {
    changeColor();
    const saveColors = ['black'];
    const colorPalette = document.getElementsByClassName('color');
    for (let index = 1; index < 4; index += 1) {
      const colorSave = colorPalette[index].style.backgroundColor;
      saveColors.push(colorSave);
    } localStorage.setItem('colorPalette', JSON.stringify(saveColors));
  });
}
// Board de Pixels
function createBoard() {
  const board = document.createElement('div');
  board.setAttribute('id', 'pixel-board');
  document.body.appendChild(board);
  for (let index = 0; index < 25; index += 1) {
    const square = document.createElement('div');
    square.style.backgroundColor = 'white';
    square.style.width = '40px';
    square.style.height = '40px';
    square.style.border = '1px solid black';
    square.setAttribute('class', 'pixel');
    board.appendChild(square);
  }
}

// Aqui eu consegui fazer com a ajuda do Walber entendendo a lógica os requisitos 5 e 8
function colorStorage() {
  const saveColors = ['black'];
  const colorPalette = document.getElementsByClassName('color');
  for (let index = 1; index < 4; index += 1) {
    const colorSave = colorPalette[index].style.backgroundColor;
    saveColors.push(colorSave);
  } if (localStorage.length === 0) {
    localStorage.setItem('colorPalette', JSON.stringify(saveColors));
  } else {
    const parse = JSON.parse(localStorage.getItem('colorPalette'));
    for (let index2 = 1; index2 < 4; index2 += 1) {
      colorPalette[index2].style.backgroundColor = parse[index2];
    }
  }
}

function savePalette() {
  const colors = document.querySelector('#color-palette');
  colors.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    selected.className = 'color';
    // eslint-disable-next-line no-param-reassign
    event.target.className = 'color selected';
  });
}

function paint() {
  const pincel = document.querySelector('#pixel-board');
  pincel.addEventListener('click', (event) => {
    const painted = document.querySelector('.selected');
    // eslint-disable-next-line no-param-reassign
    event.target.style.backgroundColor = painted.style.backgroundColor;
  });
}

function clearBoard() {
  const clear = document.querySelector('#clear-board');
  clear.addEventListener('click', () => {
    const pixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  });
}
// Chamando funções
makePalette();

divBlack();

changeColor();

createBoard();

clickButton();

colorStorage();

savePalette();

paint();

clearBoard();
