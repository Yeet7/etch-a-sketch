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
            var gridCell = document.createElement("div");
            gridCell.className = "gridCell";

            gridCell.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = `${getRandomColor()}`
                let currentOpacity = parseFloat(e.target.style.opacity);
                if(isNaN(currentOpacity)) currentOpacity = 1;
                let newOpacity = currentOpacity - 0.1;
                if(newOpacity < 0) newOpacity = 0;
                e.target.style.opacity = newOpacity;
            })

            cellRows.appendChild(gridCell);
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