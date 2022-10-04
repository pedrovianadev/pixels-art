function randomColor () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function changeColor () {
    let color = document.getElementsByClassName('color');
    for (let index = 1; index < color.length; index += 1){
        color[index].style.backgroundColor = randomColor();
    }
}

function clickButton() {
    const button = document.getElementById('button-random-color');
    button.addEventListener('click', changeColor)
}

clickButton();