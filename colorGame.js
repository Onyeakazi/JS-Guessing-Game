var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    //mode Button Event Listener
    setUpModeButton();

    //Square Setup
    setUpSquares();
}

function setUpModeButton() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        //add event listeners to squares
        squares[i].addEventListener("click", function() {
             //grab clicked square
             var clickedColor =  this.style.background;
             //compare color of clicked square
             if(clickedColor === pickedColor) {
                 messageDisplay.textContent = "Correct!!";
                 resetButton.textContent = "Play Again?";
                 changeColor(clickedColor);
                 h1.style.background = clickedColor;
             }else{
                 this.style.background = "#232323";
                 messageDisplay.textContent = "Try Again!!";
             }
         })
     }
     
     resetButton.textContent = "Play Game";
}


function reset() {
     //generatr all new color
     colors = generateRandomColor(numSquares);
     //pick a new random color from array
     pickedColor = pickColor();
     //change displayColor to match picked color
     colorDisplay.textContent = pickedColor;
     //change colors of squares
     for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else{
            squares[i].style.display = "none";
        }
     }
     h1.style.background = "orange";
     messageDisplay.textContent = "";
     resetButton.textContent = "New Color";
}

resetButton.addEventListener("click", function() {
    reset();
})

function changeColor(color) {
  //loop through all squares
  for(var i = 0; i < squares.length; i++) {
    //change each colors to match the given color
    squares[i].style.background = color;
  }
}

function pickColor() {
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColor(num) {
    //make an array
    var arr = [];
    //repeat num times
    for(var i = 0; i < num; i++) {
        //get random color and push to arr
        arr.push(randomColor());
    }
    //return arr
    return arr;
}

function randomColor() {
    //pick a "red" from 0 - 255 
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255 
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255 
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}