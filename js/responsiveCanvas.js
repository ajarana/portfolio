var aWrapper = document.getElementById("aWrapper");
var canvas = document.getElementById("myCanvas");

//Accesses the 2D rendering context for our canvasdfdf
var ctx = canvas.getContext("2d");

function setCanvasScalingFactor() {
   return window.devicePixelRatio || 1;
}

function resizeCanvas() {
    //Gets the devicePixelRatio
    var pixelRatio = setCanvasScalingFactor();

    //The viewport is in portrait mode, so var width should be based off viewport WIDTH
    if (window.innerHeight > window.innerWidth) {
        //Makes the canvas 100% of the viewport width
        var width = Math.round(0.4 * window.innerWidth);
    }
  //The viewport is in landscape mode, so var width should be based off viewport HEIGHT
    else {
        //Makes the canvas 100% of the viewport height
        var width = Math.round(0.4 * window.innerHeight);
    }

    //This is done in order to maintain the 1:1 aspect ratio, adjust as needed
    var height = width;

    //This will be used to downscale the canvas element when devicePixelRatio > 1
    aWrapper.style.width = width + "px";
    aWrapper.style.height = height + "px";

    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;
}

var cascadeFactor = 35;
var cascadeCoefficient = 1;

function draw() {
  //The length of each square
  var length = Math.round(canvas.width/6);;

  //Increments or decrements cascadeFactor by 1, based on cascadeCoefficient
  cascadeFactor += cascadeCoefficient;

  //Makes sure the canvas is clean at the beginning of a frame
  ctx.clearRect(0,0,canvas.width,canvas.height);

  for (var columns = 4; columns >= 1; columns--) {
    for (var rows = 4; rows >= 1; rows--) {
      //Where the color magic happens
      ctx.fillStyle = "rgba("+rows*columns*(cascadeFactor-115)+","+columns*cascadeFactor+","+rows*cascadeFactor+","+1+")";

      ctx.fillRect((length*columns)+(columns*2), (length*rows)+(rows*2), length, length);
    }
  }

  if (cascadeFactor > 275 || cascadeFactor < 35) {
    //Resets the color cascade
    cascadeCoefficient = -cascadeCoefficient;
  }
  var aRequest = window.requestAnimationFrame(draw);
}

window.addEventListener("resize", resizeCanvas, false);

resizeCanvas();
draw();
