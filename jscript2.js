const main = document.querySelector('main');
const sketchPad = document.querySelector('.sketchPad');
const gridSize = document.querySelector('#grid-size');
const colorSwitch = document.querySelector('#color-switch');

let sliderVal = 0;
let gridColor = "black";
let xCoord = 0;
let yCoord = 0;
let isDrawing = false;


//HERE IS THE SECTION OF GRID CREATION
document.getElementById('gridRange').oninput = function () {
    resetGrid();
    gridCreation();
};

function gridCreation(){
    let numberOfGrid = document.getElementById('gridRange').value;

    let dimension = (750-(numberOfGrid*4)) / numberOfGrid; //the minus part is for the border size

    for (let i =0; i < numberOfGrid; i++){
        for (let j =0; j< numberOfGrid; j++){
            const gridBox =  document.createElement('div');
            gridBox.classList.toggle('gridBox');
            gridBox.style.backgroundColor = "aliceblue";
            gridBox.style.width = `${dimension}px`;
            gridBox.style.height = `${dimension}px`;
            gridBox.style.border = "dotted 2px rgb(0,0,0,0.1)";

            sketchPad.appendChild(gridBox);
        }
    }
    gridSize.textContent = `Grid: ${numberOfGrid} x ${numberOfGrid} px`
}

function resetGrid() {
    while (sketchPad.hasChildNodes()){
        sketchPad.removeChild(sketchPad.firstChild);
    }
}

function randomizeColor(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    gridColor = `rgb(${r},${g},${b})`;


}

//THIS IS FOR RANDOM COLOR TOGGLE
colorSwitch.children[0].addEventListener("click", () =>{
    if (colorSwitch.children[0].checked){
        randomizeColor();
        return;
    }else{
        gridColor = "black";
        return;
    }
});


//THIS IS FOR DRAWING
sketchPad.addEventListener("mousedown", (e) =>{
    e.target.style.backgroundColor = gridColor;
    xCoord = e.offsetX;
    yCoord = e.offsetY;
    isDrawing = true;
});

sketchPad.addEventListener("mousemove", (e) =>{
    if (isDrawing){
        if (colorSwitch.children[0].checked){
            randomizeColor();
        }    
        e.target.style.backgroundColor = gridColor;
        xCoord = e.offsetX;
        yCoord = e.offsetY;
    }
});

window.addEventListener("mouseup", () =>{
    xCoord = 0;
    yCoord = 0;
    isDrawing = false;
});
