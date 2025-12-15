let bScore = 0;
let rScore = 0;

let bBoard = document.getElementById("scoreBoard1");
let rBoard = document.getElementById("scoreBoard2");

function addOneB(){
    bScore += 1;
    console.log(bScore);
    bBoard.textContent = bScore;
}
function addTwoB(){
    bScore += 2;
    console.log(bScore);
    bBoard.textContent = bScore;
}
function addThreeB(){
    bScore += 3;
    console.log(bScore);
    bBoard.textContent = bScore;
}

function addOneR(){
    rScore += 1;
    rBoard.textContent = rScore;
}
function addTwoR(){
    rScore += 2;
    rBoard.textContent = rScore;
}
function addThreeR(){
    rScore += 3;
    rBoard.textContent = rScore;
}