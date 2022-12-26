const main = document.querySelector('main');
const sketchPad = document.querySelector('.sketchPad');

let sliderVal = 0;


//HERE IS THE SECTION OF GRID CREATION
document.getElementById('gridRange').oninput = function () {
    resetGrid();
    gridCreation();
};

function gridCreation(){
    let numberOfGrid = document.getElementById('gridRange').value;

    let dimension = (700-(numberOfGrid*2)) / numberOfGrid; //the minus part is for the border size

    for (let i =0; i < numberOfGrid; i++){
        for (let j =0; j< numberOfGrid; j++){
            const gridBox =  document.createElement('div');
            gridBox.classList.toggle('gridBox');
            gridBox.style.backgroundColor = "aliceblue";
            gridBox.style.width = `${dimension}px`;
            gridBox.style.height = `${dimension}px`;
            gridBox.style.border = "solid 1px rgb(0,0,0,0.1)";

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
const buttonPressed = (e) => {
    console.log(e.target);
}
sketchPad.addEventListener("click", buttonPressed);
