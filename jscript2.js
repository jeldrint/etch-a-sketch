const main = document.querySelector('main');
const sketchPad = document.querySelector('.sketchPad');

let sliderVal = 0;

let x = 0;
let y = 0;
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
    console.log(numberOfGrid);
}

function resetGrid() {
    while (sketchPad.hasChildNodes()){
        sketchPad.removeChild(sketchPad.firstChild);
    }
}

//HERE IS THE SECTION OF GRID COLORING
/* const buttonPressed = (e) => {
    e.target.style.backgroundColor = "black";
}
 */
sketchPad.addEventListener("mousedown", (e) =>{
    e.target.style.backgroundColor = "black";
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
});

sketchPad.addEventListener("mousemove", (e) =>{
    if (isDrawing){
        e.target.style.backgroundColor = "black";
        x = e.offsetX;
        y = e.offsetY;
    }
});

window.addEventListener("mouseup", () =>{
    x = 0;
    y = 0;
    isDrawing = false;
});

sketchPad.addEventListener("drag", (e)=>{

});