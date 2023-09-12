let xCount = 0;
let oCount = 0;
let gameOver = false;
let boardRevealed = false;
let isX = true;

function pressDiv() {
    const cellBlocks = document.getElementsByClassName("cell");


    for (const cellBlock of cellBlocks) {
        cellBlock.addEventListener("click", function (e) {
            if (!this.classList.contains("clicked") && !gameOver) {
                this.classList.add("clicked");
                if (isX) {
                    this.style.backgroundImage = "url('https://2.bp.blogspot.com/-44FEkFGb5h8/Ux3Ul5ly3LI/AAAAAAAAEGU/jl4_ktKNJp0/s1600/playX.png')";
                    this.style.width = "80px";
                    this.style.height = "80px";
                    this.style.backgroundSize = "contain";
                    isX = false;
                    xCount++;
                } else {
                    this.style.backgroundImage = "url('https://1.bp.blogspot.com/-lyELSi3oPWc/Ux3UlhpiAWI/AAAAAAAAEGI/VLvmMCW7aco/s1600/playO.png')";
                    this.style.width = "80px";
                    this.style.height = "80px";
                    this.style.backgroundSize = "contain";
                    isX = true;
                    oCount++;
                }
                updateTurnMessage()

                if (xCount === 3 || oCount === 3) {
                    checkWin();
                } else if (xCount + oCount === 9 && !boardRevealed) {
                    alert("draw!")
                    revealHiddenRow();
                }
            }
        });
    }
}

function updateTurnMessage() {
    const turnDisplay = document.getElementById("turn-display");
    if (isX == true) {
        turnDisplay.textContent = "Player X's Turn";
    } else {
        turnDisplay.textContent = "Player O's Turn";
    }
}


function toggleHiddenCells() {
    const hiddenCells = document.getElementsByClassName("hidden");
    while (hiddenCells.length > 0) {
        hiddenCells[0].classList.remove("hidden");
    }
}

function checkWin() {
    const cells = document.querySelectorAll("div.cell");

    const winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [9, 10, 11],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        [9, 4, 2],
        [11, 4, 0]
    ];

    // Variable to store the winning combination
    let winningCombination = null;

    for (const combination of winCombinations) {
        const [a, b, c] = combination;
        if (
            cells[a].style.backgroundImage === cells[b].style.backgroundImage &&
            cells[b].style.backgroundImage === cells[c].style.backgroundImage &&
            cells[a].style.backgroundImage !== ""
        ) {
            const winner = cells[a].style.backgroundImage.includes("playX.png") ? "X" : "O";
            alert(`Player ${winner} wins!`);
            gameOver = true;

            // Store the winning combination
            winningCombination = combination;
            break;
        }
    }

    // Add the "winning-cell" class to highlight the winning combination
    if (winningCombination) {
        for (const cellIndex of winningCombination) {
            cells[cellIndex].classList.add("winning-cell");
        }
    }
}



function revealHiddenRow() {
    toggleHiddenCells();
    const header = document.getElementById("header");
    header.textContent = "ISSA PRANK! atik lang irefresh ra";
    gameOver = true;
    boardRevealed = true;
}
