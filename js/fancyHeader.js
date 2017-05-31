var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var header = document.getElementById('header');

// canvas.style.backgroundColor = 'black';

function setCanvasScalingFactor() {
   return window.devicePixelRatio || 1;
}

function draw() {
  var cascadeFactor = 235;
  var cascadeCoefficient = 1;

  function cascade() {
    //The number of color block columns and rows
    var columns = 55;
    // var rows = 2;
    //The length of each square
    var length = Math.round(canvas.width/(columns)) + 2;

    //Increments or decrements cascadeFactor by 1, based on cascadeCoefficient
    cascadeFactor += cascadeCoefficient;

    //Makes sure the canvas is clean at the beginning of a frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // for (var i = columns; i >= 1; i--) {
    //   for (var j = rows; j >= 1; j--) {
    //     //Where the color magic happens
    //     ctx.fillStyle = "rgba(" + (j*i*(cascadeFactor-110)) + "," + (i*cascadeFactor) + "," + (j*cascadeFactor) + "," + 0.6 + ")";
    //
    //     ctx.fillRect((length*(i-1)) + ((i-1)*2), (length*(j-1)) + ((j-1)*2), length, length);
    //   }
    // }
    for (var i = columns; i >= 1; i--) {
      // for (var j = rows; j >= 1; j--) {
        //Where the color magic happens
        ctx.fillStyle = "rgba(" + (105) + "," + (70+cascadeFactor) + "," + (cascadeFactor) + "," + 0.85 + ")";

        ctx.fillRect(length*(i-1), 0, length, canvas.height);
      // }
    }

    if (cascadeFactor > 235 || cascadeFactor < 130) {
      //Resets the color cascade
      cascadeCoefficient = -cascadeCoefficient;
    }
    //Continuously calls draw() again until cancelled
    // var aRequest = window.requestAnimationFrame(draw);
    var aRequest = window.requestAnimationFrame(cascade);
    console.log("sup");
  }

  cascade();
}

function resize() {
  headerWidth = window.getComputedStyle(header).getPropertyValue('width');
  console.log(headerWidth);

  canvas.width = parseInt(headerWidth, 10);
}

var headerWidth = window.getComputedStyle(header).getPropertyValue('width');
console.log(headerWidth);
canvas.width = parseInt(headerWidth, 10);

window.addEventListener('resize', resize, false);

draw();
