const screen = document.querySelector('.screen');
const messageBox = document.querySelector('.messageBox');
const screenWidth = screen.offsetWidth;
const screenHeight = screen.offsetHeight;
let width = screenWidth;
let height = screenHeight;
let position = [(width) / 2, (height) / 2];
console.log(position);


// run function below when user changes size. lowest width is 3 and hightest is 504. CHECK IF e.value is correct
function sizeSelector(e = 168) {
    width = e.value * 3;
    height = e.value * 4;
    position = [( width) / 2, (height) / 2];
}
// add eventlistener and scroll bar
// const scrollBar = document.querySelector(.....class of the scrollbar)
// scrollBar.addEventListener('change', sizeSelector);



/* create selector to pick colors
let color = "black";



function colorSelector(e = "black") {
    color = e.value;
}
 */

// how to replace class if one exists or create one if it does no




function createGrid(width,height) {
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
        screen.appendChild(document.createElement('div'));
        screen.lastChild.classList.add('gridBox');
        screen.lastChild.classList.add(`x-${x}`);
        screen.lastChild.classList.add(`y-${y}`);
            const gridBoxWidth = 1;
            const gridBoxHeight = 1;
        screen.lastChild.setAttribute(`style`, `width:${gridBoxWidth}px;height:${gridBoxHeight}`)
        }
    }
}

createGrid(width,height);


function draw(e) {
    messageBox.textContent = '';
    if (e.code === 'ArrowDown') {
        if (position[1] < height-1) {
            position[1] += 1;
            const gridDark = document.querySelector(`.x-${position[0]}.y-${position[1]}`)
            gridDark.classList.add('gridBoxDark')
            console.log(position);
        } else {
            messageBox.textContent = 'You\'ve reached the bottom edge of the screen';
            console.log(position);
        };
    } else if (e.code === 'ArrowUp') {
        if (position[1] > 0) {
            position[1] -= 1;
            const gridDark = document.querySelector(`.x-${position[0]}.y-${position[1]}`)
            gridDark.classList.add('gridBoxDark')
            console.log(position);
        } else {
            messageBox.textContent = 'You\'ve reached the top edge of the screen.';
        };
    } else if (e.code === 'ArrowRight') {
        if (position[0] < width-1) {
            position[0] += 1;
            const gridDark = document.querySelector(`.x-${position[0]}.y-${position[1]}`)
            gridDark.classList.add('gridBoxDark');
            console.log(position);
        } else {
            messageBox.textContent = 'You\'ve reached the right edge of the screen.';
            console.log(position);
        };
    } else if (e.code === 'ArrowLeft') {
        if (position[0] > 0) {
            position[0] -= 1;
            const gridDark = document.querySelector(`.x-${position[0]}.y-${position[1]}`)
            gridDark.classList.add('gridBoxDark')
            console.log(position);
        } else {
            messageBox.textContent = 'You\'ve reached the left edge of the screen.';
            console.log(position);
        };
    } else {
        messageBox.textContent = 'press one of the arrow keys to draw.';
        console.log(position);
    }
}



document.addEventListener('keydown', draw);

