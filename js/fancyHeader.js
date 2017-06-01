var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var header = document.getElementById('header');

function setCanvasScalingFactor() {
   return window.devicePixelRatio || 1;
}

function draw() {
  var cascadeUpperLimit = 255,
      cascadeLowerLimit = 0,
      redCoefficient = 1,
      greenCoefficient = 1,
      blueCoefficient = 1,
      redColor = 255,
      greenColor = 125,
      blueColor = 0;

  function cascade() {
    var columns = 25,
        length = Math.round(canvas.width/(columns)) + 2;

    //Increments or decrements cascadeFactor by 1 or -1
    redColor += redCoefficient;
    greenColor += greenCoefficient;
    blueColor += blueCoefficient;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = columns; i >= 1; i--) {
      ctx.fillStyle = "rgba(" + (redColor+(i*3)) + "," + (greenColor) + "," + (blueColor) + "," + 0.99 + ")";

      ctx.fillRect(length*(i-1), 0, length, canvas.height);
    }

    if (redColor > cascadeUpperLimit || redColor < cascadeLowerLimit) {
      redCoefficient = -redCoefficient;
    }
    else if (greenColor > (cascadeUpperLimit) || greenColor <= cascadeLowerLimit) {
      greenCoefficient = -greenCoefficient;
    }
    else if (blueColor > cascadeUpperLimit || blueColor < cascadeLowerLimit) {
      blueCoefficient = -blueCoefficient;
    }

    var aRequest = window.requestAnimationFrame(cascade);
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
