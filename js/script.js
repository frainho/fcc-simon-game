var moveCounter = 0;
var colorOrder = [];
var possibleColors = ['green', 'red', 'yellow', 'blue'];
var color;
var clickOrder = 0;
var strict = false;
var error = new Audio('./sounds/error.mp3');
var startedGame = false;

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
    document.getElementById('strict').disabled = true;
    startedGame = true;
    addColorSeq();
});

function addColorSeq() {
    let winnerSound = new Audio('./sounds/winner.mp3');
    if (moveCounter == 3) {
        document.getElementById('visor').value = 'OO';
        winnerSound.playbackRate = 3;
        winnerSound.play();
        document.getElementById('start').disabled = false;
        document.getElementById('strict').disabled = false;
        clickOrder = 0;
        moveCounter = 0;
        colorOrder = [];
    } else {
        moveCounter++;
        document.getElementById('visor').value = moveCounter;
        color = possibleColors[Math.floor(Math.random() * possibleColors.length)];
        colorOrder.push(color);
        runSeq();
    }
}

function runSeq() {
    document.getElementById('visor').value = moveCounter;
    let colorTiming = 0;
    if (moveCounter < 9) {
        colorTiming = 600;
    } else if (moveCounter >= 9 && moveCounter < 15) {
        colorTiming = 400;
    } else {
        colorTiming = 200;
    }
    clickOrder = 0;
    let i = 0;
    var interval = setInterval(function () {
        lightOn(colorOrder[i]);
        soundEngine(colorOrder[i]);
        i++;
        if (i >= colorOrder.length) {
            clearInterval(interval);
        }
    }, colorTiming);
}

function lightOn(btn) {
    let lightOnOff = 0;
    if (moveCounter < 9) {
        lightOnOff = 300;
    } else if (moveCounter >= 9 && moveCounter < 15) {
        lightOnOff = 150;
    } else {
        lightOnOff = 75;
    }
    document.getElementById(btn).className += " selected";
    setTimeout(function () {
        document.getElementById(btn).classList.remove('selected');
    }, 300);
}

document.getElementById("green").addEventListener("click", function () {
    if (startedGame) {
        clickOrder++;
        soundEngine('green');
        lightOn('green');
        if (this.id == colorOrder[clickOrder - 1]) {
        } else if (strict == false){
            document.getElementById('visor').value = 'XX';
            error.playbackRate = 2;
            setTimeout(function() {
                error.play();
            }, 1000);
            setTimeout(function() {
                runSeq();
            }, 2000);
            return;
        } else {
            document.getElementById('visor').value = 'XX';
            error.playbackRate = 2;
            setTimeout(function() {
                error.play();
            }, 1000);
            setTimeout(function() {
                reset();
            }, 2000);
            return;
        }
        if (clickOrder >= colorOrder.length) {
            setTimeout(function() {
                addColorSeq();
            }, 1000);
        }
    }


});

document.getElementById("red").addEventListener("click", function () {
    if (startedGame) {
        clickOrder++;
        soundEngine('red');
        lightOn('red');
        if (this.id == colorOrder[clickOrder - 1]) {
        } else if (strict == false){
            document.getElementById('visor').value = 'XX';
            error.playbackRate = 2;
            setTimeout(function() {
                error.play();
            }, 1000);
            setTimeout(function() {
                runSeq();
            }, 2000);
            return;
        } else {
            document.getElementById('visor').value = 'XX';
            error.playbackRate = 2;
            setTimeout(function() {
                error.play();
            }, 1000);
            setTimeout(function() {
                reset();
            }, 2000);
            return;
        }
        if (clickOrder >= colorOrder.length) {
            setTimeout(function() {
                addColorSeq();
            }, 1000);
        }
    }

});

document.getElementById("yellow").addEventListener("click", function () {
    if (startedGame) {
        clickOrder++;
        soundEngine('yellow');
        lightOn('yellow');
        if (this.id == colorOrder[clickOrder - 1]) {
        } else if (strict == false){
            document.getElementById('visor').value = 'XX';
            error.playbackRate = 2;
            setTimeout(function() {
                error.play();
            }, 1000);
            setTimeout(function() {
                runSeq();
            }, 2000);
            return;
        } else {
            document.getElementById('visor').value = 'XX';
            error.playbackRate = 2;
            setTimeout(function() {
                error.play();
            }, 1000);
            setTimeout(function() {
                reset();
            }, 2000);
            return;
        }
        if (clickOrder >= colorOrder.length) {
            setTimeout(function() {
                addColorSeq();
            }, 1000);
        }
    }

});

document.getElementById("blue").addEventListener("click", function () {
    if (startedGame) {
        clickOrder++;
        soundEngine('blue');
        lightOn('blue');
        if (this.id == colorOrder[clickOrder - 1]) {
        } else if (strict == false){
            document.getElementById('visor').value = 'XX';
            error.playbackRate = 2;
            setTimeout(function() {
                error.play();
            }, 1000);
            setTimeout(function() {
                runSeq();
            }, 2000);
            return;
        } else {
            document.getElementById('visor').value = 'XX';
            error.playbackRate = 2;
            setTimeout(function() {
                error.play();
            }, 1000);
            setTimeout(function() {
                reset();
            }, 2000);
            return;
        }
        if (clickOrder >= colorOrder.length) {
            setTimeout(function() {
                addColorSeq();
            }, 1000);
        }
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
    let failAudio = new Audio('./sounds/fail.mp3');
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