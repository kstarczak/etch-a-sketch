const screen = document.querySelector('.screen');
const messageBox = document.querySelector('.messageBox');
const openSettingsBtn = document.querySelector('.leftKnob');
const clearBtn = document.querySelector('.rightKnob');
const cover = document.querySelector('.cover');
const settingsForm = document.querySelector('.settings');
const screenWidth = screen.offsetWidth;
const screenHeight = screen.offsetHeight;
let width = 112
let height = 84
let position = [(width) / 2, (height) / 2];


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



function createGrid(width,height) {
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
        screen.appendChild(document.createElement('div'));
        screen.lastChild.classList.add('gridBox');
        screen.lastChild.classList.add(`x-${x}`);
        screen.lastChild.classList.add(`y-${y}`);
            const gridBoxWidth = 6;
            const gridBoxHeight = 6;
        screen.lastChild.setAttribute(`style`, `width:${gridBoxWidth}px;height:${gridBoxHeight}`)
        }
    }
    position = [(width) / 2, (height) / 2];
}

function clearGrid() {
    while (screen.firstElementChild) {
        screen.removeChild(screen.lastElementChild);
    }
    createGrid(width,height);

};


function draw(e) {
    if (messageBox.style.display !== 'none' && (e.code === 'ArrowDown' || e.code === 'ArrowUp' || e.code === 'ArrowRight' || e.code === 'ArrowLeft')) {
        messageBox.style.display = 'none';
    }
    if (e.code === 'ArrowDown') {
        if (position[1] < height-1) {
            position[1] += 1;
            const gridDark = document.querySelector(`.x-${position[0]}.y-${position[1]}`)
            gridDark.classList.add('gridBoxDark')
        };
    } else if (e.code === 'ArrowUp') {
        if (position[1] > 0) {
            position[1] -= 1;
            const gridDark = document.querySelector(`.x-${position[0]}.y-${position[1]}`)
            gridDark.classList.add('gridBoxDark');
        };
    } else if (e.code === 'ArrowRight') {
        if (position[0] < width-1) {
            position[0] += 1;
            const gridDark = document.querySelector(`.x-${position[0]}.y-${position[1]}`)
            gridDark.classList.add('gridBoxDark');
        };
    } else if (e.code === 'ArrowLeft') {
        if (position[0] > 0) {
            position[0] -= 1;
            const gridDark = document.querySelector(`.x-${position[0]}.y-${position[1]}`)
            gridDark.classList.add('gridBoxDark');
        };
    } else {
        messageBox.style.display = 'block';
    }
}

function displaySettings() {
    cover.style.display ="block";
    settingsForm.style.display="block";
}

function hideSettings() {
    cover.style.display = "none";
    settingsForm.style.display = "none";
}

createGrid(width,height);

document.addEventListener('keydown', draw);
clearBtn.addEventListener('click', clearGrid);
//openSettingsBtn.addEventListener('click', displaySettings);
//closeSettingsBtn.addEventListener('click', hideSettings);

