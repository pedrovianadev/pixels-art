function createSquares(size){
    const div = document.getElementById('color-palette');
    for (let index = 0; index < size; index += 1) {
        const createSquares = document.createElement('div');
        createSquares.className = 'color'
    }
}

createSquares(4);