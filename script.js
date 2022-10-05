// função que gera a cor random
function randomColor () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
// função que muda a cor
function changeColor () {
    let color = document.getElementsByClassName('color');
    for (let index = 1; index < color.length; index += 1){
        color[index].style.backgroundColor = randomColor();
    }
}
// função do evento do click 
function clickButton() {
    const button = document.getElementById('button-random-color');
    button.addEventListener('click', () => {
        changeColor(true)
    })
}
// Board de Pixels
function createBoard () {
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


// Chamando funções
createBoard();

clickButton();