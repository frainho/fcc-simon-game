var moveCounter = 0;
var colorOrder = [];
var possibleColors = ['green', 'red', 'yellow', 'blue'];
document.getElementById('visor').value = moveCounter;


document.getElementById("start").addEventListener("click", function(){
    moveCounter++;
    document.getElementById('visor').value = moveCounter;
    var color =possibleColors[Math.floor(Math.random()*possibleColors.length)];
    console.log(color);
    document.getElementById(color).className += "selected";
    colorOrder.push(color);
    setTimeout(function() {
        document.getElementById(color).classList.remove("selected");
    }, 1000);
});