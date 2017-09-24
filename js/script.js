var moveCounter = 0;
var colorOrder = [];
var possibleColors = ['green', 'red', 'yellow', 'blue'];
document.getElementById('visor').value = moveCounter;
var color;
var clickOrder = 0;

//Starts the game
document.getElementById("start").addEventListener("click", function () {
    document.getElementById('start').disabled = true;
    addColorSeq();
});

function addColorSeq() {
    moveCounter++;
    document.getElementById('visor').value = moveCounter;
    color = possibleColors[Math.floor(Math.random() * possibleColors.length)];
    colorOrder.push(color);
    runSeq();
}

function runSeq() {
    clickOrder = 0;
    let i = 0;
    var interval = setInterval(function () {
        lightOn(colorOrder[i]);
        i++;
        if (i >= colorOrder.length) {
            console.log(colorOrder);
            clearInterval(interval);
        }
    }, 600);
}

function lightOn(btn) {
    document.getElementById(btn).className += " selected";
    setTimeout(function () {
        document.getElementById(btn).classList.remove('selected');
    }, 300);
}


document.getElementById("green").addEventListener("click", function () {
    clickOrder++;
    if (this.id == colorOrder[clickOrder - 1]) {
        console.log('correct color');
    } else {
        runSeq();
        return;
    }
    if (clickOrder >= colorOrder.length) {
        addColorSeq();
    }

});

document.getElementById("red").addEventListener("click", function () {
    console.log(colorOrder);
    clickOrder++;
    if (this.id == colorOrder[clickOrder - 1]) {
        console.log('correct color');
    } else {
        runSeq();
        return;
    }
    if (clickOrder >= colorOrder.length) {
        addColorSeq();
    }
});

document.getElementById("yellow").addEventListener("click", function () {
    console.log(colorOrder);
    clickOrder++;

    if (this.id == colorOrder[clickOrder - 1]) {
        console.log('correct color');
    } else {
        runSeq();
        return;
    }
    if (clickOrder >= colorOrder.length) {
        addColorSeq();
    }
});
document.getElementById("blue").addEventListener("click", function () {
    console.log(colorOrder);
    clickOrder++;
    if (this.id == colorOrder[clickOrder - 1]) {
        console.log('correct color');
    } else {
        runSeq();
        return;
    }
    if (clickOrder >= colorOrder.length) {
        addColorSeq();
    }
});