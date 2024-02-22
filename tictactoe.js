let num = 0;
let placementArray = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]
const placeLetter = (id) => {
    let img = document.createElement("img");
    let letterType = '';
    if(document.getElementById(id).innerHTML === ''){
        if(num % 2 === 0) {
            img.src = "./Images/X.png";
            letterType = "X";
        } else {
            img.src = "./Images/O.png";
            letterType = "O";
        }
    }
    document.getElementById(id).appendChild(img);
    placementArray.push({ placement: placementNumber(id), letter: letterType});
    num++;
}

let placementNumber = (id) => {
    let re = /\d/g;
    return id.match(re);
}
