var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var header = document.getElementById('header');

function setCanvasScalingFactor() {
   return window.devicePixelRatio || 1;
}

function draw() {
  var cascadeUpperLimit = 235;
  var cascadeLowerLimit = 70;
  var cascadeCoefficient = 1;
  var cascadeFactor = cascadeUpperLimit;

  function cascade() {
    var columns = 25;
    var length = Math.round(canvas.width/(columns)) + 2;

    //Increments or decrements cascadeFactor by 1 or -1
    cascadeFactor += cascadeCoefficient;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = columns; i >= 1; i--) {
      ctx.fillStyle = "rgba(" + (55) + "," + (cascadeFactor+110) + "," + (cascadeFactor+(i*3)-50) + "," + 0.85 + ")";
      console.log(ctx.fillStyle);
      ctx.fillRect(length*(i-1), 0, length, canvas.height);
    }

    if (cascadeFactor > cascadeUpperLimit || cascadeFactor < cascadeLowerLimit) {
      //Resets the color cascade
      cascadeCoefficient = -cascadeCoefficient;
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
