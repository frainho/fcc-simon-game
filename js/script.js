var moveCounter = 0;
var colorOrder = [];
var possibleColors = ['green', 'red', 'yellow', 'blue'];
document.getElementById('visor').value = moveCounter;
var color;
var clickOrder = 0;
var audio1 = new Audio('./sounds/simonSound1.mp3');
var audio2 = new Audio('./sounds/simonSound2.mp3');
var audio3 = new Audio('./sounds/simonSound3.mp3');
var audio4 = new Audio('./sounds/simonSound4.mp3');

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
        soundEngine(colorOrder[i]);
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
    soundEngine('green');
    lightOn('green');
    if (this.id == colorOrder[clickOrder - 1]) {
        console.log('correct color');
    } else {
        runSeq();
        return;
    }
    if (clickOrder >= colorOrder.length) {
        setTimeout(function() {
            addColorSeq();
        }, 1000);
    }

});

document.getElementById("red").addEventListener("click", function () {
    clickOrder++;
    soundEngine('red');
    lightOn('red');
    if (this.id == colorOrder[clickOrder - 1]) {
        console.log('correct color');
    } else {
        runSeq();
        return;
    }
    if (clickOrder >= colorOrder.length) {
        setTimeout(function() {
            addColorSeq();
        }, 1000);
    }
});

document.getElementById("yellow").addEventListener("click", function () {
    clickOrder++;
    soundEngine('yellow');
    lightOn('yellow');
    if (this.id == colorOrder[clickOrder - 1]) {
        console.log('correct color');
    } else {
        runSeq();
        return;
    }
    if (clickOrder >= colorOrder.length) {
        setTimeout(function() {
            addColorSeq();
        }, 1000);
    }
});
document.getElementById("blue").addEventListener("click", function () {
    clickOrder++;
    soundEngine('blue');
    lightOn('blue');
    if (this.id == colorOrder[clickOrder - 1]) {
        console.log('correct color');
    } else {
        runSeq();
        return;
    }
    if (clickOrder >= colorOrder.length) {
        setTimeout(function() {
            addColorSeq();
        }, 1000);
    }
});

function soundEngine(sound) {
    if (sound == 'red') {
        audio1.play();
    } else if (sound == 'blue') {
        audio2.play();
    } else if (sound == 'yellow') {
        audio3.play();
    } else {
        audio4.play();
    }
} 