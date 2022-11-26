const container = document.getElementById("grid-container");
const btnRestart = document.getElementById('restart');

function restartGrid(){
    const cell = document.querySelectorAll('.grid-cell');
    cell.forEach(item => {
        item.style.backgroundColor = 'white';
    })
}
function makeGrid(rows, cols) {
    for(let i = 0; i < (rows * cols) ; i++){
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.setAttribute('id','grid-cell' + i);
        
        container.appendChild(cell);
    }
}
makeGrid(16, 16);
container.addEventListener('mouseover',function(e){
    const newCell = e.target;
    newCell.style.backgroundColor = 'black';
});
btnRestart.addEventListener('click',restartGrid)
