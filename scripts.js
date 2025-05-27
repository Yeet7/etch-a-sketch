function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


var gridContainer = document.querySelector(".grid-container");

function createGrid() {
    for (var i = 0; i <= 16; i++) {
        var cellRows = document.createElement("div");
        cellRows.className = "cellRow";
        for (var j = 0; j <= 16; j++) {
            var divCell = document.createElement("div");
            divCell.className = "divCell";
            cellRows.appendChild(divCell);
        }
        gridContainer.appendChild(cellRows);
    }
}

createGrid()