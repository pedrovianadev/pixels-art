// função que gera a cor random
function randomColor () {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return corStorage = `rgb(${r}, ${g}, ${b})`;
}
// função que muda a cor
function changeColor() {
  let color = document.getElementsByClassName('color');
  for (let index = 1; index < color.length; index += 1) {
    color[index].style.backgroundColor = randomColor();
  }
}
// função do evento do click
function clickButton() {
  const button = document.getElementById('button-random-color');
  button.addEventListener('click', () => {
    changeColor();
    let saveColors = ['black'];
    let colorPalette = document.getElementsByClassName('color');
    for (let index = 1; index < 4; index += 1){
        let colorSave = colorPalette[index].style.backgroundColor;
        saveColors.push(colorSave);
    } localStorage.setItem('colorPalette', JSON.stringify(saveColors));
  });
}
// Board de Pixels
function createBoard() {
  let board = document.createElement('div');
  board.setAttribute('id', 'pixel-board');
  document.body.appendChild(board);
  for (let index = 0; index < 25; index += 1) {
    let square = document.createElement('div');
    square.style.backgroundColor = 'white';
    square.style.width = '40px';
    square.style.height = '40px';
    square.style.border = '1px solid black';
    square.setAttribute('class', 'pixel');
    board.appendChild(square);
    console.log('teste');
  }
}

// function loadBg () {
//     let colorPalette = document.getElementsByClassName('color');
//     if(!localStorage.getItem('colorPalette')) {
//         colorPalette.innerHTML = localStorage.getItem('color');
//     } else {
//         colorStorage();
//     }
// }

function colorStorage() {
    let saveColors = ['black'];
    let colorPalette = document.getElementsByClassName('color');
    for (let index = 1; index < 4; index += 1) {
        let colorSave = colorPalette[index].style.backgroundColor;
        saveColors.push(colorSave);
    } if (localStorage.length === 0) {
        localStorage.setItem('colorPalette', JSON.stringify(saveColors));
    } else {
        let parse = JSON.parse(localStorage.getItem('colorPalette'));
        for (let index2 = 1; index2 < 4; index2 += 1) {
            colorPalette[index2].style.backgroundColor = parse[index2];
        }
    }
}


// function Paint () {
//   let colors = document.getElementsByClassName('color');
//   for (let index = 0; index > colors.length; index += 1) {
//     let saveColors = colors[index].style.backgroundColor;
//     }

// }

// Chamando funções
createBoard();

clickButton();

colorStorage();