function pressDiv() {
    const cellBlocks = document.getElementsByClassName("cell");
    let isX = true;
    let xCount = 0;
    let oCount = 0;

    for (const cellBlock of cellBlocks) {
        cellBlock.addEventListener("click", function (e) {
            if (!this.classList.contains("clicked")) {
                this.classList.add("clicked");
                if (isX) {
                    this.style.backgroundImage = "url('https://2.bp.blogspot.com/-44FEkFGb5h8/Ux3Ul5ly3LI/AAAAAAAAEGU/jl4_ktKNJp0/s1600/playX.png')";
                    this.style.width = "80px";
                    this.style.height = "80px";
                    this.style.backgroundSize = "contain";
                    isX = false;
                    xCount++;
                    if (xCount === 3) {
                        toggleHiddenCells();
                    }
                } else {
                    this.style.backgroundImage = "url('https://1.bp.blogspot.com/-lyELSi3oPWc/Ux3UlhpiAWI/AAAAAAAAEGI/VLvmMCW7aco/s1600/playO.png')";
                    this.style.width = "80px";
                    this.style.height = "80px";
                    this.style.backgroundSize = "contain";
                    isX = true;
                    oCount++;
                    if (oCount === 3) {
                        toggleHiddenCells();
                    }
                }
            }
        });
    }
}

function toggleHiddenCells() {
    const hiddenCells = document.getElementsByClassName("hidden");
    const header = document.getElementById("header")
    while (hiddenCells.length > 0) { // As long as there are hidden cells, continue the loop
        hiddenCells[0].classList.remove("hidden"); // Remove the 'hidden' class from the first hidden cell
    }
    header.textContent = "ISSA PRANK!"
}
