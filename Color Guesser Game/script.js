var squares = document.querySelectorAll(".squares");
var correctRGB = document.querySelector("span");
var messageDisplay = document.querySelector("#messageDisplay");
var reset = document.querySelector("button");
var easyMode = document.querySelector("#Easy");
var hardMode = document.querySelector("#Hard");
var heading = document.querySelector("h1");
var length = 6;
var correctColor;
var colors = [];
reset.addEventListener("click",function(){
    control();
});
easyMode.addEventListener("click",function(){
    length = 3;
    this.classList.add("selected");
    hardMode.classList.remove("selected");
    control();
});
hardMode.addEventListener("click",function(){
    length = 6;
    this.classList.add("selected");
    easyMode.classList.remove("selected");
    control();
});
control();

function control(){
    messageDisplay.textContent = "";
    heading.style.background = "#7c4dff";
    reset.textContent = "New Colors";
    colorGenerator(length);
    correctColor = correctColorGenerator();
    correctRGB.textContent = correctColor;
    colorChecker();
}

function correctColorGenerator(){
    return (colors[Math.floor(Math.random()*length)]);
}

function colorChecker(){
    for(var i = 0; i < squares.length; i++){
        squares[i].addEventListener("click",function(){
        var clickedColor = this.style.background;
        if(correctColor === clickedColor){
            messageDisplay.textContent = "Correct!";
            reset.textContent = "Play Again?";
            changeColors();
            
        }else{
            if(!(this.style.display === "none")){
                this.style.background = "#18ffff";
                messageDisplay.textContent = "Try Again";
            }
        }
        });
    }
}

function colorGenerator(n){
    for(var i = 0; i < n; i++){
        colors[i] = randomiseColor();
        squares[i].style.background = colors[i];
    }
    if(n < 6){
        for(i = 3; i < 6; i++){
            squares[i].style.display = "none";
        }
    }     
}

function randomiseColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return ("rgb("+ r +", "+ g+ ", " + b +")");
}

function changeColors(){
    for(var i = 0; i < length ; i++){
        squares[i].style.background = correctColor;
    }
    heading.style.background = correctColor;
}