let num = 0;
let xWins = 0;
let oWins = 0;
let placementArray = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
let gameOver = false;

const placeLetter = (y, x, id) => {
    let img = document.createElement("img");
    if(!gameOver && placementArray[y][x] == 0){
        if(num % 2 === 0) {
            placementArray[y][x] = 2;
            img.src = "./Images/X.png";
            document.getElementById("player").innerHTML = "O";
        } else {
            placementArray[y][x] = 1;
            img.src = "./Images/O.png";
            document.getElementById("player").innerHTML = "X";
        }
    }
    document.getElementById(id).appendChild(img);
    num++;
    winCheck();
}

let winCheck = () => {
    // Check Rows/Columns
    for (let i = 0; i < 3; i++) {
        if(placementArray[i][0] == placementArray[i][1] && placementArray[i][0] == placementArray[i][2]) {
            if(placementArray[i][0] == 1) {
                document.getElementById("winner").innerHTML = "O Won!";
                oWins++;
                document.getElementById("o-wins").innerHTML = oWins;
                gameOver = true;
                return;
            } else if(placementArray[i][0] == 2) {
                document.getElementById("winner").innerHTML = "X Won!";
                xWins++;
                document.getElementById("x-wins").innerHTML = xWins;
                gameOver = true;
                return;
            }
        }
        if(placementArray[0][i] == placementArray[1][i] && placementArray[0][i] == placementArray[2][i]) {
            if(placementArray[0][i] == 1) {
                document.getElementById("winner").innerHTML = "O Won!";
                oWins++;
                document.getElementById("o-wins").innerHTML = oWins;
                gameOver = true;
                return;
            } else if(placementArray[0][i] == 2) {
                document.getElementById("winner").innerHTML = "X Won!";
                xWins++;
                document.getElementById("x-wins").innerHTML = xWins;
                gameOver = true;
                return;
            }
        }
    }

    // Check Diagonals
    if(placementArray[0][0] == placementArray[1][1] && placementArray[0][0] == placementArray[2][2]) {
        if(placementArray[0][0] == 1) {
            document.getElementById("winner").innerHTML = "O Won!";
            oWins++;
            document.getElementById("o-wins").innerHTML = oWins;
            gameOver = true;
            return;
        } else if(placementArray[0][0] == 2) {
            document.getElementById("winner").innerHTML = "X Won!";
            xWins++;
            document.getElementById("x-wins").innerHTML = xWins;
            gameOver = true;
            return;
        }
    }
    if(placementArray[0][2] == placementArray[1][1] && placementArray[0][2] == placementArray[2][0]) {
        if(placementArray[0][2] == 1) {
            document.getElementById("winner").innerHTML = "O Won!";
            oWins++;
            document.getElementById("o-wins").innerHTML = oWins;
            gameOver = true;
            return;
        } else if(placementArray[0][2] == 2) {
            document.getElementById("winner").innerHTML = "X Won!";
            xWins++;
            document.getElementById("x-wins").innerHTML = xWins;
            gameOver = true;
            return;
        }
    }

    // If game isn't finished, no winner
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (placementArray[i][j] === 0) {
            document.getElementById("winner").innerHTML = '';
            return;
            }
        }
    }

    // If tie, show "Cat's Game!"
    document.getElementById("winner").innerHTML = "Cat's Game!";
    return;
}

const resetBoard = () => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
        placementArray[i][j] = 0;
        }
    }
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {box.innerHTML = '';});
    num = 0;
    gameOver = false;
    document.getElementById("winner").innerHTML = '';
}