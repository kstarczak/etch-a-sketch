const container = document.querySelector('.container');
const messageBox = document.querySelector('.messageBox');
let width = 101;
let position = [(width-1)/2,(width-1)/2]
console.log(position)


function createGrid(width) {
    //const gridBox = document.createElement('div');
    //gridBox.classList.add('gridBox');
    for (let y = 0; y < (width); y++) {
        for (let x = 0; x < width; x++) {
        container.appendChild(document.createElement('div'));
        container.lastChild.classList.add('gridBox');
        container.lastChild.classList.add(`x-${x}`);
        container.lastChild.classList.add(`y-${y}`);
        const gridBoxWidth= 800 / width;
        container.lastChild.setAttribute(`style`, `width:${gridBoxWidth}px;height:auto`)
        }
    }
}

createGrid(width);




function draw(e) {
    messageBox.textContent = '';
    if (e.code === 'ArrowDown') {
        if (position[1] < width-1) {
            position[1] += 1;
            const gridDark = document.querySelector(`.x-${position[0]}.y-${position[1]}`)
            gridDark.classList.add('gridBoxDark')
        } else {
            messageBox.textContent = 'You\'ve reached the bottom edge of the screen';
        };
    } else if (e.code === 'ArrowUp') {
        if (position[1] > 0) {
            position[1] -= 1;
            const gridDark = document.querySelector(`.x-${position[0]}.y-${position[1]}`)
            gridDark.classList.add('gridBoxDark')
        } else {
            messageBox.textContent = 'You\'ve reached the top edge of the screen.';
        };
    } else if (e.code === 'ArrowRight') {
        if (position[0] < width-1) {
            position[0] += 1;
            const gridDark = document.querySelector(`.x-${position[0]}.y-${position[1]}`)
            gridDark.classList.add('gridBoxDark');
        } else {
            messageBox.textContent = 'You\'ve reached the right edge of the screen.';
        };
    } else if (e.code === 'ArrowLeft') {
        if (position[0] > 0) {
            position[0] -= 1;
            const gridDark = document.querySelector(`.x-${position[0]}.y-${position[1]}`)
            gridDark.classList.add('gridBoxDark')
        } else {
            messageBox.textContent = 'You\'ve reached the left edge of the screen.';
        };
    } else {
        messageBox.textContent = 'press one of the arrow keys to draw.';
    }
}



document.addEventListener('keydown', draw);

