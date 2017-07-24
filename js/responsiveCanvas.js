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
    var elem = document.getElementById("blog");

    //The viewport is in portrait mode, so var width should be based off viewport WIDTH
    if (window.innerHeight > window.innerWidth) {
        //Makes the canvas 100% of parent width
        var width = parseInt(window.getComputedStyle(elem,null).getPropertyValue("width"), 10) - (parseInt(window.getComputedStyle(elem,null).getPropertyValue("padding-right"), 10)*2);
      // var width = parseInt(window.getComputedStyle(aWrapper,null).getPropertyValue("width"), 10) - (parseInt(window.getComputedStyle(aWrapper,null).getPropertyValue("padding-right"), 10)*2);
    }
  //The viewport is in landscape mode, so var width should be based off viewport HEIGHT
    else {
        //Makes the canvas 100% of parent width
        var width = parseInt(window.getComputedStyle(elem,null).getPropertyValue("width"), 10) - (parseInt(window.getComputedStyle(elem,null).getPropertyValue("padding-right"), 10)*2);
        // console.log(parseInt(window.getComputedStyle(elem,null).getPropertyValue("padding-right"), 10)*2);
    }

    //This is done in order to maintain the 1:1 aspect ratio, adjust as needed
    // var height = width;
    var height = Math.round(0.625 * width);
   // var height = Math.round(0.825 * width);

    //This will be used to downscale the canvas element when devicePixelRatio > 1
    aWrapper.style.width = width + "px";
    aWrapper.style.height = height + "px";

    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;
}

// var cascadeFactor = 35;
var cascadeFactor = 255;
var cascadeCoefficient = 1;

function draw() {
  //The number of color block columns and rows
  var columns = 8;
  var rows = 5;
  //The length of each square
  var length = Math.round(canvas.width/(columns)) - 2;

  //Increments or decrements cascadeFactor by 1, based on cascadeCoefficient
  cascadeFactor += cascadeCoefficient;

  //Makes sure the canvas is clean at the beginning of a frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = columns; i >= 1; i--) {
    for (var j = rows; j >= 1; j--) {
      //Where the color magic happens

      var r = (j*i*(cascadeFactor-110)),
          g = (i*cascadeFactor),
          b = (j*cascadeFactor),
          max = 248;

      if (r > max) {
         r = max;
      }
      if (g > max) {
         g = max;
      }
      if (b > max) {
         b = max;
      }

      ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + 0.6 + ")";

      ctx.fillRect((length*(i-1)) + ((i-1)*2), (length*(j-1)) + ((j-1)*2), length, length);
    }
  }

  if (cascadeFactor > 255 || cascadeFactor < 0) {
    //Resets the color cascade
    cascadeCoefficient = -cascadeCoefficient;
  }
  //Continuously calls draw() again until cancelled
  var aRequest = window.requestAnimationFrame(draw);
}

window.addEventListener("resize", resizeCanvas, false);

resizeCanvas();
draw();
