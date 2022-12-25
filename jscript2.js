const main = document.querySelector('main');
const sketchPad = document.querySelector('.sketchPad');

let sliderVal = 0;

/* function creatingGrids(){
    let numberOfGrid = document.getElementById('gridRange').value;

    let dimension = (500-numberOfGrid) / numberOfGrid;

    for (let i =0; i < numberOfGrid; i++){
        for (let j =0; j< numberOfGrid; j++){
            const gridBox =  document.createElement('div');
            gridBox.classList.toggle('gridBox');

            gridBox.style.backgroundColor = "aliceblue";
            gridBox.style.width = `${dimension}px`;
            gridBox.style.height = `${dimension}px`;
            gridBox.style.border = "solid 0.05px rgb(0,0,0,0.1)";
            sketchPad.appendChild(gridBox);
        }
    }
    console.log(numberOfGrid);
} */

//Number of Grids
document.getElementById('gridRange').oninput = function creatingGrids() {
    let numberOfGrid = document.getElementById('gridRange').value;
    let dimension = (520-numberOfGrid)/ numberOfGrid;

    sketchPad.style.width = `${520 + numberOfGrid * 2}px`;
    sketchPad.style.height = `${520 + numberOfGrid * 2}px`;

    for (let i =0; i < numberOfGrid; i++){
        for (let j =0; j< numberOfGrid; j++){
            const gridBox =  document.createElement('div');
            gridBox.classList.toggle('grid-box');

            gridBox.style.backgroundColor = "aliceblue";
            gridBox.style.width = `${dimension}px`;
            gridBox.style.height = `${dimension}px`;
            gridBox.style.border = "solid 1px rgb(0,0,0,0.1)";

            //gridBox.style.display = "grid";
            //gridBox.style.grid = `${dimension} / auto auto auto`;
            sketchPad.appendChild(gridBox);
        }
    }
    console.log(numberOfGrid);
    console.log(dimension);
    console.log(sketchPad.style.width);
    console.log(sketchPad.style.height);
//    sketchPad.remove(chil)
};
