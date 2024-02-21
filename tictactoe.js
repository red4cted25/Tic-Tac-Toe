let letter = 0;
const placeLetter = (id) => {
    if(letter % 2 === 0) {
        document.getElementById(id).src = "./Images/X.png";
        document.getElementById(id).alt = "X";
    } else {
        document.getElementById(id).src = "./Images/O.png";
        document.getElementById(id).alt = "O";
    }
    letter++;
}


