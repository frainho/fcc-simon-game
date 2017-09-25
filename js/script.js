var moveCounter = 0;
var colorOrder = [];
var possibleColors = ['green', 'red', 'yellow', 'blue'];
var color;
var clickOrder = 0;
var strict = false;

document.getElementById('visor').value = moveCounter;

document.getElementById("strict").addEventListener("click", function () {
    let btnText;
    if (strict) {
        strict = false;
        btnText = document.getElementById("strict");
        btnText.innerHTML = 'Strict Off';
    } else{
        strict = true;
        btnText = document.getElementById("strict");
        btnText.innerHTML = 'Strict On';
    }
    alert('You can now start the game with ' + btnText.innerHTML);
});

//Starts the game
document.getElementById("start").addEventListener("click", function () {
    document.getElementById('start').disabled = true;
    addColorSeq();
});

function addColorSeq() {
    if (moveCounter == 20) {
        alert('You win');
    } else {
        moveCounter++;
        document.getElementById('visor').value = moveCounter;
        color = possibleColors[Math.floor(Math.random() * possibleColors.length)];
        colorOrder.push(color);
        runSeq();
    }
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
    } else if (strict == false){
        runSeq();
        return;
    } else {
        reset();
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
    } else if (strict == false){
        runSeq();
        return;
    } else {
        reset();
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
    } else if (strict == false){
        runSeq();
        return;
    } else {
        reset();
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
    } else if (strict == false){
        runSeq();
        return;
    } else {
        reset();
        return;
    }
    if (clickOrder >= colorOrder.length) {
        setTimeout(function() {
            addColorSeq();
        }, 1000);
    }
});

function soundEngine(sound) {
    let audio1 = new Audio('./sounds/simonSound1.mp3');
    let audio2 = new Audio('./sounds/simonSound2.mp3');
    let audio3 = new Audio('./sounds/simonSound3.mp3');
    let audio4 = new Audio('./sounds/simonSound4.mp3');    
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

function reset() {
    let failAudio= new Audio('./sounds/fail.mp3');
    failAudio.playbackRate = 3;
    failAudio.play();
    clickOrder = 0;
    moveCounter = 0;
    colorOrder = [];
    document.getElementById('visor').value = moveCounter;
    setTimeout(function() {
        addColorSeq();
    }, 3000);
}