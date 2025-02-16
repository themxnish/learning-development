const gamingSpace = document.querySelector("#gaming-space");
const info = document.querySelector("#inforamtion");

const startGame = [
    "", "", "",
    "", "", "",
    "", "", ""
];
let go = "circle";

info.textContent = "circle's turn first - (O)";

// Creating the gaming board 
function createBoard() {
    startGame.forEach((_square, index) => {
        const squareElement = document.createElement('div');
        squareElement.classList.add('square');
        squareElement.id = index;
        squareElement.addEventListener('click', addGo);
        gamingSpace.append(squareElement);
    });
}

createBoard();

// Handles player moves
function addGo(e) {
    console.log("clicked", e);
    const display = document.createElement('div');
    display.classList.add(go);
    e.target.append(display);
    go = go === "circle" ? "cross" : "circle";
    info.textContent = "it is now " + go + "'s turn to go";
    e.target.removeEventListener("click", addGo);
    score();
}

function score() {
    const allSquares = document.querySelectorAll(".square");
    const winCombos = [
        [0,1,2], [3,4,5], [6,7,8],  // Rows
        [0,3,6], [1,4,7], [2,5,8],  // Columns
        [0,4,8], [2,4,6]            // Diagonals
    ];

    // check if a player has won
    function checkWinner(player) {
        return winCombos.some(combo => {
            return combo.every(position => {
                const square = allSquares[position];
                return square.firstChild?.classList.contains(player);
            });
        });
    }

    // Check winners and update display
    if (checkWinner('circle')) {
        info.textContent = "circle wins!!";
        info.style.color = "#90EE90";
        info.style.fontSize = "33px";
        allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
    }
    else if (checkWinner('cross')) {
        info.textContent = "cross wins!!";
        info.style.color = "#87CEFA"; 
        info.style.fontSize = "33px";
        allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
    }
}
