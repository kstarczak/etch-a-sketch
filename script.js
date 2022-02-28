const container = document.querySelector('.container');
const messageBox = document.querySelector('.messageBox');
let width = 101;
let position = [(width-1)/2,(width-1)/2]
console.log(position)


function createGrid(width) {
    for (let y = 0; y < (width); y++) {
        for (let x = 0; x < width; x++) {
        container.appendChild(document.createElement('div'));
        container.lastChild.classList.add('gridBox');
        const gridBoxWidth= 800 / width;
        container.lastChild.setAttribute(`style`, `width:${gridBoxWidth}px;height:auto`)
        }
    }
}

createGrid(width);

