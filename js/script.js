var moveCounter = 0;
var colorOrder = [];
var clickOrder = 0;
var possibleColors = ['green', 'red', 'yellow', 'blue'];
document.getElementById('visor').value = moveCounter;
var color;


document.getElementById("start").addEventListener("click", function(){
    document.getElementById('start').disabled = true;
    addColorSeq();
});

function addColorSeq() {
    moveCounter++;
    document.getElementById('visor').value = moveCounter;
    color = possibleColors[Math.floor(Math.random()*possibleColors.length)];
    colorOrder.push(color);
    runSeq();
}

var flag = false;

function runSeq() {
            colorOrder.forEach(function(seq) {
                if (flag == false) {
                    document.getElementById(seq).className += " selected";
                    flag = true;
                }             
                setTimeout(function() {
                    document.getElementById(seq).classList.remove("selected");
                    flag = false;
                }, 2000);
                });        
}

document.getElementById("green").addEventListener("click", function(){
    clickOrder++;
    console.log(this.id);
    console.log(colorOrder[clickOrder-1]);
    if (this.id == colorOrder[clickOrder-1]) {
        console.log('correct color');
    } else {
        console.log('wrong color');
    }
    setTimeout(function() {
        addColorSeq();
    }, 1000);
    
});

document.getElementById("red").addEventListener("click", function(){
    clickOrder++;
    console.log(this.id);
    console.log(colorOrder[clickOrder-1]);
    if (this.id == colorOrder[clickOrder-1]) {
        console.log('correct color');
    } else {
        console.log('wrong color');
    }
    setTimeout(function() {
        addColorSeq();
    }, 1000);
});

document.getElementById("yellow").addEventListener("click", function(){
    clickOrder++;
    console.log(this.id);
    console.log(colorOrder[clickOrder-1]);
    if (this.id == colorOrder[clickOrder-1]) {
        console.log('correct color');
    } else {
        console.log('wrong color');
    }
    setTimeout(function() {
        addColorSeq();
    }, 1000);
});
document.getElementById("blue").addEventListener("click", function(){
    clickOrder++;
    console.log(this.id);
    console.log(colorOrder[clickOrder-1]);
    if (this.id == colorOrder[clickOrder-1]) {
        console.log('correct color');
    } else {
        console.log('wrong color');
    }   
    setTimeout(function() {
        addColorSeq();
    }, 1000);
});