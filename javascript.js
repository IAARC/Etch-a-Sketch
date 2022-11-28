//start pickr
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic', 
    default: 'black',

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            rgba: true,
            input: true,
            clear: true,
            save: true
        }
    }
});
// end pickr
const container = document.getElementById('grid-container');
const btnRestart = document.getElementById('clear');
const userSize = document.getElementById('size');
const rainbowMode = document.getElementById('rainbow');
const eraserMode = document.getElementById('eraser');

let currentMode = 'paint';
let isRainbow = false;
let isEraser = false
let painting = true;
let rgbaColor = 'black';

function newGrid(size){
    for (let i = 0; i < size * size; i++) {
        const newCell = document.createElement('div');
        newCell.classList.add('cell');
        container.appendChild(newCell);
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    }
}
function clearGrid(){
    container.innerHTML = '';
    newGrid(16);
}
pickr.on('change',(color, instance) => {
    rgbaColor = color.toRGBA().toString();
    currentMode = 'paint';
});

const rainbow = function(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

container.onclick = () => painting = !painting;
rainbowMode.onclick = () => currentMode = 'rainbow';
eraserMode.onclick = () => currentMode = 'eraser';
btnRestart.onclick = () => clearGrid();
container.addEventListener('mouseover', (e) => {
    let cell = e.target;
    if (e.type === 'mouseover' && painting) return;
        if (currentMode === 'rainbow'){
        cell.style.backgroundColor = rainbow();
    } else if (currentMode === 'eraser'){
        cell.style.backgroundColor = 'white';
    } else if (currentMode === 'paint'){
        cell.style.backgroundColor = rgbaColor;
    }
});
newGrid(16);
