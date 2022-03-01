const container = document.querySelector('.container');
const messageBox = document.querySelector('.messageBox');
let gridBox;
let width = 10;
let mouseDown = true;


function createGrid(width) {
    for (let y = 0; y < (width); y++) {
        for (let x = 0; x < width; x++) {
        container.appendChild(document.createElement('div'));
        container.lastChild.classList.add('gridBox');
        const gridBoxWidth= 800 / width;
        container.lastChild.setAttribute(`style`, `width:${gridBoxWidth}px;height:auto`)
        }
    }
    gridBox = document.querySelectorAll('.gridBox');
}


function hoverDraw(e) {
        console.log(e.target);
        e.target.style.background = "black";
}

createGrid(width);

gridBox.forEach((box) => {box.addEventListener('mouseover',hoverDraw)});


