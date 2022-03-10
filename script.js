const container = document.querySelector('.container');
const messageBox = document.querySelector('.messageBox');
let gridBox;
let width = 21;
let mouseDown;


function createGrid(width) {
    for (let y = 0; y < (width); y++) {
        for (let x = 0; x < width; x++) {
        container.appendChild(document.createElement('div'));
        container.lastChild.classList.add('gridBox');
        const gridBoxWidth= 900 / width;
        container.lastChild.setAttribute(`style`, `width:${gridBoxWidth}px;height:auto`);
        container.lastChild.setAttribute('draggable', 'false');
        }
    }
    gridBox = document.querySelectorAll('.gridBox');
}

function mouseClick(e) {
    if (e.type === 'mousedown') {
        mouseDown = true;
    } else if (e.type === 'mouseup') {
        mouseDown = false;
    }
}

function hoverDraw(e) {
    if (mouseDown) {  
        e.target.style.background = "black";
    }
}

createGrid(width);

gridBox.forEach((box) => {box.addEventListener('mouseenter',hoverDraw)});
document.addEventListener('mousedown',mouseClick);
document.addEventListener('mouseup',mouseClick);



