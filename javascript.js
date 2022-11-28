const container = document.getElementById('grid-container');
const btnRestart = document.getElementById('restart');
const userSize = document.getElementById('size');
const rainbowMode = document.getElementById('color');
const eraserMode = document.getElementById('eraser');
let isHover = false;
let isRainbow = false;
let eraser = false;
const size = userSize.addEventListener('keydown',function(e){
    if(e.keyCode === 13){
        const size = e.target.value * 1;
        if (size <= 100){
        restartGrid();
        makeGrid(size,size);
        } else {
        alert('error! insert a number lower than 100!');
        }
    } else {
        return;
    }
});

function rainbow(){
        var num = Math.round(0xffffff * Math.random());
        var r = num >> 16;
        var g = num >> 8 & 255;
        var b = num & 255;
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
} 
function restartGrid(){
    const cell = document.querySelectorAll('.grid-cell');
    makeGrid(16,16);
    cell.forEach(item => {
        item.style.backgroundColor = 'white';
    })
}
function makeGrid(rows, cols) {
    for(let i = 0; i < (rows * cols) ; i++){
        const cell = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${cols}, 1fr)`;
        cell.className = 'grid-cell';
        cell.setAttribute('id','grid-cell' + i);
        
        container.appendChild(cell);
    }
}
container.addEventListener('mousedown',function(e){
    isHover = true;
});

container.addEventListener('mousemove',function(e){
    const cell = e.target;
    if (isHover && isRainbow){
        cell.style.backgroundColor = rainbow();
    } else if (eraser && isHover){
        cell.style.backgroundColor = 'white';
    } else if (isHover){
        cell.style.backgroundColor = 'black';
    }
});
container.addEventListener('mouseup',function(e){
    isHover = false;
});
btnRestart.addEventListener('click',restartGrid);
rainbowMode.addEventListener('click',function(){
    isRainbow = !isRainbow;
});
eraserMode.addEventListener('click',function(){
    eraser =!eraser;
});
makeGrid(16,16);
