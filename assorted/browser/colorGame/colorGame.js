// **VARIABLES**
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var tryAgain = document.getElementsByClassName("tryAgain");
var easyMode = false;

//**CHANGING DOM**
colorDisplay.textContent = pickedColor;


// **BUTTONS**

//reset button
resetButton.addEventListener("click", function(){
  if (!easyMode){
    colors = generateRandomColors(6);
  } else {
    colors = generateRandomColors(3);
  }
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.background = "#333";
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i]
  };
});

//easy button
easyBtn.addEventListener("click", function(){
  easyMode = true;
  this.classList.add("selected");
  hardBtn.classList.remove("selected");
  colors = generateRandomColors(3);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]){
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
})
//hard button
hardBtn.addEventListener("click", function(){
  easyMode = false;
  this.classList.add("selected");
  easyBtn.classList.remove("selected");
  colors = generateRandomColors(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
  }
})

// **FUNCTIONS**

//listener for array of colors
for (var i = 0; i < squares.length; i++){
  console.log(i);
  squares[i].style.background = colors[i];
  console.log(colors[i]);
  tryAgain[i].textContent = "";
  squares[i].addEventListener("click", function(){
    //grab color of clicked squares
    var clickedColor = this.style.background;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
      changeColors(clickedColor);
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again";
      messageDisplay.textContent = "";
      h1.style.background = clickedColor;
      tryAgain[i] = "";
    } else {
      this.style.background = "#333";
      messageDisplay.textContent = "Try again";
      console.log(tryAgain[i]);
      tryAgain[i] = "try again";
    }
  });
};


//change the squares' colors to the same
function changeColors(color){
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  };
};

//Generate colors for the colors array
function generateRandomColors(num){
  //make array
  var arr = [];
  //repeat num times
  for (var i = 0; i < num; i++) {
    //get random color and push into array
    arr.push(randomColor());
  }
  //return array
  return arr;
};

//create a rgb() color
function randomColor(){
  //pick a "red" from 0-255
  var r = Math.floor(Math.random() * 255);
  //pick a "green" from 0-255
  var g = Math.floor(Math.random() * 255);
  //pick a "blue" from 0-255
  var b = Math.floor(Math.random() * 255);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

//Select a color of the colors array (to use as the choosen one)
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
};
