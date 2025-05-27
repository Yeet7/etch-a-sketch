var getRows = 16;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


var gridContainer = document.querySelector(".grid-container");

function createGrid() {
    for (var i = 0; i < getRows; i++) {
        var cellRows = document.createElement("div");
        cellRows.className = "gridRow";
        for (var j = 0; j < getRows; j++) {
            var divCell = document.createElement("div");
            divCell.className = "gridCell";



            divCell.addEventListener("mouseover", (e) => {
            
                e.target.style.backgroundColor = `${getRandomColor()}`
            })

            

            cellRows.appendChild(divCell);
        }
        gridContainer.appendChild(cellRows);
    }
}

createGrid()

const resetButton = document.querySelector("#reset-button");

const onClickReset = resetButton.addEventListener("click", () => {
    getRows = prompt("How many Rows?");

    if(getRows > 100){
        alert("ERROR! Overflow, please enter a number less than 100.")
        getRows = prompt("How many Rows?");
    }

    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild)
    }

    createGrid();

})