var no_of_square = 6;

// Pallet
var arr = [];

// Color Picked for Target
var picked;

// To Get all the Sqaure of div
var squares = document.getElementsByClassName('square');

// To Get the RGB Display
var targetColor = document.getElementById('targetColor');

// Message that can be Empty, Try Again or Correct
var message = document.getElementById('message');

// Heading
var head = document.querySelector('h1');

// Reset Button
var reset = document.getElementById('NewColor');

init();

function init() {
    // Generate Random Color Palette
    arr = generateRandomColor(no_of_square);
    // Get Target Color Randomly from the Array Size
    picked = arr[randomPickedColorIndex()];
    // Updating Target RGB Display
    targetColor.textContent = picked;

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = arr[i]
        squares[i].addEventListener('click', function () {
            // console.log(this.style.backgroundColor)
            // console.log(picked)
            if (picked === this.style.backgroundColor) {
                message.textContent = 'Correct';
                message.style.color = 'green';
                changeColor(this.style.backgroundColor);
                reset.textContent = 'Play Again..';
            }
            else {
                message.textContent = 'Try Again..';
                message.style.color = 'red';
                this.style.backgroundColor = '#232323';
                // console.log("error")
            }
        });
    }
}

reset.addEventListener('click', resetIn);

// To Get the Random Color from Exisiting Palette
function randomPickedColorIndex() {
    return Math.floor(Math.random() * arr.length);
}

// To Get the Random Palette of Colors
function generateRandomColor(limit) {
    var color = [];
    for (var i = 0; i < limit; i++) {
        color.push(rgbGenerator());
    }
    return color;
}

// To Generate the Single RGB
function rgbGenerator() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// When Correct, Change Everything to Correct Color
function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    head.style.backgroundColor = color;
}

// Set Things when player try to Reset
function resetIn() {
    arr = generateRandomColor(no_of_square);
    picked = arr[randomPickedColorIndex()];
    targetColor.textContent = picked;
    message.textContent = "";
    head.style.backgroundColor = 'steelblue';
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = arr[i];
    }

}