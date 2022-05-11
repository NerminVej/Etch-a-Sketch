let gridContainer = document.getElementById("gridContainer"); 
let gridRowContainer = document.createElement("div");

//So that at the start of the script we get the 16x16 grid.
let userGridSizeInput = 0;

let newGridButton = document.getElementById("newGridButton");

newGridButton.addEventListener("click",newGridGenerator)

function newGridGenerator(){
    userGridSizeInput = prompt("Enter the size you want for the Grid from 1 to 100")
    //removes all divs inside of the gridContainer so that we can create a new grid
    gridContainer.innerHTML = "";
    newGrid(userGridSizeInput);

}




    function newGrid(gridSize){

    for (let i = 0; i < gridSize; i++){
        let gridRowContainer = document.createElement("div");
        gridRowContainer.setAttribute("id","rowContainer");
        for(let c = 0; c < gridSize; c++){
            let cell = document.createElement("div");
            cell.style.border = "solid black";
            cell.setAttribute("id","cells");
            gridRowContainer.appendChild(cell);
            //So that the cells turn black when you hover over them
            cell.addEventListener("mouseover",changeCellToBlack)
            function changeCellToBlack() {
            cell.style.backgroundColor = "black";
            }
    
        }
    
        gridContainer.appendChild(gridRowContainer);

    }
}


//So that we have the base 16x16 grid
    for (let i = 0; i < 16; i++){
        let gridRowContainer = document.createElement("div");
    
        for(let c = 0; c < 16; c++){
            let cell = document.createElement("div");
            //cell.innerText = "Box";
            cell.style.border = "solid black";
            cell.setAttribute("id","cells");
            gridRowContainer.appendChild(cell);
    
            cell.addEventListener("mouseover",changeCellToBlack)
        
    
            function changeCellToBlack() {
            cell.style.backgroundColor = "black";
            }
    
        }

    gridContainer.appendChild(gridRowContainer);
    }

document.body.append(gridContainer);

