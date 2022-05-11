let gridContainer = document.getElementById("gridContainer"); 
let gridRowContainer = document.createElement("div");




for (let i = 0; i < 16; i++){
    let gridRowContainer = document.createElement("div");

    for(let c = 0; c < 16; c++){
        let cell = document.createElement("div");
        cell.innerText = "Box";
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

