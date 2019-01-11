import React from 'react'

class ResponsiveCanvasDevelopment extends React.Component {
  constructor() {
    super()

    this.aWrapper = null;
    this.canvas = null;
    this.ctx = null;

    this.setCanvasScalingFactor = this.setCanvasScalingFactor.bind(this);
    this.resizeCanvas = this.resizeCanvas.bind(this);
  }

  componentDidMount() {
    this.aWrapper = document.getElementById("aWrapper");
    console.log('ah', this.aWrapper.style)
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");

    let that = this;

    // function setCanvasScalingFactor() {
    //   return window.devicePixelRatio || 1;
    // }

    // function resizeCanvas() {
    //   // //Gets the devicePixelRatio
    //   // var pixelRatio = setCanvasScalingFactor();
    //   // var elem = document.getElementById("blog");

    //   // //The viewport is in portrait mode, so var width should be based off viewport WIDTH
    //   // if (window.innerHeight > window.innerWidth && window.getComputedStyle(elem,null)) {
    //   //     //Makes the canvas 100% of parent width
    //   //     var width = parseInt(window.getComputedStyle(elem,null).getPropertyValue("width"), 10) - (parseInt(window.getComputedStyle(elem,null).getPropertyValue("padding-right"), 10)*2);
    //   //   // var width = parseInt(window.getComputedStyle(aWrapper,null).getPropertyValue("width"), 10) - (parseInt(window.getComputedStyle(aWrapper,null).getPropertyValue("padding-right"), 10)*2);
    //   // }
    //   // //The viewport is in landscape mode, so var width should be based off viewport HEIGHT
    //   // else {
    //   //     //Makes the canvas 100% of parent width
    //   //     var width = parseInt(window.getComputedStyle(elem,null).getPropertyValue("width"), 10) - (parseInt(window.getComputedStyle(elem,null).getPropertyValue("padding-right"), 10)*2);
    //   //     // console.log(parseInt(window.getComputedStyle(elem,null).getPropertyValue("padding-right"), 10)*2);
    //   // }

    //   // //This is done in order to maintain the 1:1 aspect ratio, adjust as needed
    //   // // var height = width;
    //   // var height = Math.round(0.625 * width);
    //   // // var height = Math.round(0.825 * width);

    //   // //This will be used to downscale the canvas element when devicePixelRatio > 1
    //   // that.aWrapper.style.width = width + "px";
    //   // that.aWrapper.style.height = height + "px";

    //   // that.canvas.width = width * pixelRatio;
    //   // that.canvas.height = height * pixelRatio;
    // }

    // var cascadeFactor = 35;
    var cascadeFactor = 255;
    var cascadeCoefficient = 1;

    function draw() {
      //The number of color block columns and rows
      var columns = 8;
      var rows = 5;
      //The length of each square
      var length = Math.round(that.canvas.width/(columns)) - 2;

      //Increments or decrements cascadeFactor by 1, based on cascadeCoefficient
      cascadeFactor += cascadeCoefficient;

      //Makes sure the canvas is clean at the beginning of a frame
      that.ctx.clearRect(0, 0, that.canvas.width, that.canvas.height);

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

          that.ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + 0.6 + ")";

          that.ctx.fillRect((length*(i-1)) + ((i-1)*2), (length*(j-1)) + ((j-1)*2), length, length);
        }
      }

      if (cascadeFactor > 255 || cascadeFactor < 0) {
        //Resets the color cascade
        cascadeCoefficient = -cascadeCoefficient;
      }
      //Continuously calls draw() again until cancelled
      var aRequest = window.requestAnimationFrame(draw);
    }

    window.addEventListener("resize", this.resizeCanvas, false);
    console.log("window", window)
    this.resizeCanvas();
    draw();
  }

  setCanvasScalingFactor() {
    return window.devicePixelRatio || 1;
  }

  resizeCanvas() {
    //Gets the devicePixelRatio
    var pixelRatio = this.setCanvasScalingFactor();
    var elem = document.getElementById("blog");

    //The viewport is in portrait mode, so var width should be based off viewport WIDTH
    if (window.innerHeight > window.innerWidth && window.getComputedStyle(elem,null)) {
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
    this.aWrapper.style.width = width + "px";
    this.aWrapper.style.height = height + "px";

    this.canvas.width = width * pixelRatio;
    this.canvas.height = height * pixelRatio;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeCanvas, false);
  }
  
  render() {
    return (
      <main id="specialPost">
      <div className="fullWidthContainerSmall backgroundGray">
         <div id="aWrapper" className="blogContainer">
           <a href="https://codepen.io/ajarana/pen/aJgPMR" target="_blank">
           <canvas id="myCanvas" className="responsiveCanvas">A canvas showing a plethora of cascading colors using 40 different blocks.</canvas>
           </a>
         </div>
      </div>
      <div id="blog" className="mainContainer blogContainer">
        <h1 className="textAlignLeft">Building a Responsive Canvas Using Vanilla JavaScript</h1>

        <div>
        </div>
        <section>
          <p>Building a high-quality <a  href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API" target="_blank">canvas</a> that's fully compatible with nearly all the various device pixel ratios, screen resolutions, and browsers available isn't an easy task. The main challenges revolve around maintaining the canvas's original aspect ratio in the user's viewport at all times and ensuring the canvas content maintains a high pixel quality.</p>
          <h2>Scaling the canvas: some options</h2>
          <p>The canvas element becomes cleared of all its contents whenever its width and height attributes are changed. There are several options available for updating the canvas contents whenever this happens:</p>
          <ol>
            <li><strong>You can store the contents in a temporary canvas using the <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage">CanvasRenderingContext2D.drawImage()</a> method.</strong> After the original canvas width and height attributes are rescaled, you can call <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage">drawImage()</a> again in order to restore the content from the temporary canvas.</li>

            <li><strong>You can store the contents in an <a  href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image" target="_blank">Image object</a> using <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL">HTMLCanvasElement.toDataURL()</a>.</strong> After the original canvas is rescaled, <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage">drawImage()</a> can be called in order to restore canvas contents. This option is very similar to the first one.</li>
            <li><strong>Redrawing everything from scratch.</strong></li>
          </ol>
          <p>This last option is the one with the most flexibility. It's really the only way to ensure canvas contents will continue to look sharp on any screen. The first two options will make your canvas's contents look blurry after resizing because the rendering context only draws the actual shape once, afterwards it merely stretches or shrinks an image of that shape on the rescaled canvas.</p>
          <h2>Setting up our canvas</h2>
          <p>First, we need to create a canvas element that we can then access through JavaScript.</p>
          <pre id="lul" className="darkBackground">
            <code>&lt;<span className="codeRed">div</span> <span className="codeBlue">id</span>=<span className="codeGreen">"aWrapper"</span>&gt;{`
  `}
            <span className="codeGray">
            &lt;!--Include some fallback content on the 0.00001% chance your user's browser doesn't support canvas --&gt;</span>
            {`\n  `}&lt;<span className="codeRed">canvas</span> <span className="codeBlue">id</span>=<span className="codeGreen">"myCanvas"</span>&gt;Fallback content&lt;/<span className="codeRed">canvas</span>&gt;
&lt;/<span className="codeRed">div</span>&gt;
          </code>
          </pre>
          <p>Now we need the canvas element to inherit its width and height properties from its parent to allow for downscaling of the width and height properties. This will be further explained later (note: the width and height properties here could also be set through JavaScript, but this is more efficient if you want to overlay some UI elements or other canvases for your project).</p>
          <pre className="darkBackground"><code><span className="codeBlue">#aWrapper</span> &#123;
    <span className="codeGray">{`\n  `}/*Horizontally centers the canvas*/{`\n  `}</span>
    margin: <span className="codeOrange">0</span> auto;{`\n`}
    &#125;
{`\n  `}
{`\n`}<span className="codeBlue">#myCanvas</span> &#123;
    <span className="codeGray">{`\n  `}/*This eliminates inconsistent rendering across browsers, canvas is supposed to be a block-level element across all browsers anyway*/</span>
    {`\n  `}display: block;
{`\n  `}
    {`\n  `}<span className="codeGray">/*myCanvas will inherit its CSS width and style property values from aWrapper*/</span>
    {`\n  `}width: <span className="codeOrange">100%</span>;
    {`\n  `}height: <span className="codeOrange">100%</span>;
    {`\n`}&#125;</code></pre>
          <p>Then we create some JavaScript variables to reference the necessary elements in our DOM and access the <a  href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D" target="_blank">2D rendering context</a> we'll use to draw shapes with.</p>
          <pre className="darkBackground"><code><span className="codePurple">var</span> aWrapper = <span className="codeRed">document</span>.<span className="codeTeal">getElementById</span>(<span className="codeGreen">"aWrapper"</span>);
          {`\n`}
<span className="codePurple">var</span> canvas = <span className="codeRed">document</span>.<span className="codeTeal">getElementById</span>(<span className="codeGreen">"myCanvas"</span>);
{`\n\n`}
<span className="codeGray">//Accesses the 2D rendering context for our canvas</span>
{`\n`}
<span className="codePurple">var</span> ctx = <span className="codeRed">canvas</span>.<span className="codeTeal">getContext</span>(<span className="codeGreen">"2d"</span>);</code></pre>
          <p>Now we just have to actually make the canvas responsive.</p>
          <h2>Maintaining canvas quality across various device pixel ratios</h2>
          <p>The canvas coordinate space must be rendered according to the <a  href="https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio" target="_blank">device pixel ratio</a> of the display, otherwise the content will become blurry for any display with a device pixel ratio higher than 1. These displays are often found in mobile and tablet devices, and have more than 1 physical pixel representing every logical pixel. A more in-depth look into this subtopic can be found <a  href="https://www.html5rocks.com/en/tutorials/canvas/hidpi/" target="_blank">here</a>.</p>
          <p>The following will query the device's pixel ratio so that we can use this to alter the coordinate space. You can test this simply by increasing the zoom on a desktop browser. You'll notice that the canvas coordinate space has larger dimensions than the actual canvas element itself.</p>
          <p><span className="red">Warning:</span> A devicePixelRatio with a floating pointer number value won't always be pretty (e.g. <a  href="https://mydevice.io/devices/#samsunggalaxys6" target="_blank">Microsoft's Lumia 1520</a> with a 2.5 pixel ratio).</p>
          <pre className="darkBackground"><code><span className="codePurple">function</span> <span className="codeBlue">setCanvasScalingFactor</span>() &#123;
          {`\n  `}
    <span className="codePurple">return</span> <span className="codeRed">window</span>.<span className="codeRed">devicePixelRatio</span> <span className="codeTeal">||</span> <span className="codeOrange">1</span>;
    {`\n`}
    &#125;</code></pre>
          <p>There is a fallback value of 1 in case the browser does not support the property.</p>
          <h2>Altering the canvas coordinate space</h2>
          <p>Let's say we need to make sure our canvas maintains a 1:1 aspect ratio after the viewport has been resized. Unfortunately, the easiest approach of resizing the canvas through its CSS properties will result in very blurry canvas content. This is because the width and height properties only determine the size of the canvas element, not the coordinate space on which its content is drawn. The latter can only be changed dynamically by using Javascript to alter the canvas width and height HTML attributes.</p>
          <p>Now we have some options on how we'll adjust the canvas's coordinate space:</p>
          <ol>
            <li><strong><a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth">window.innerWidth</a> and <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight">window.innerHeight</a></strong></li>
            <li><strong><a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Window/outerWidth">window.outerWidth</a> and <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Window/outerHeight">window.outerHeight</a></strong></li>
            <li><strong><a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Screen/width">window.screen.width</a> and <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Screen/height">window.screen.height</a></strong></li>
            <li><strong><a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Screen/availWidth">window.screen.availWidth</a> and <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Screen/availHeight">window.screen.availHeight</a></strong></li>
          </ol>
          <p>To make a long story short, the most dependable of those 4 combos is the innerWidth/innerHeight pair. As of iOS 10, for example, both window.outerWidth and window.outerHeight return 0 on mobile Safari, Chrome, Firefox, and Opera Mini. These properties are also less useful because they include the whole browser window, rather than just the viewport where elements are actually rendered.</p>
          <p>Screen.width always returns the same value for iOS devices, whether the screen is in landscape or portrait mode. On Android, however, screen.width is dynamic and will change according to the device's current orientation. The same is true for screen.availWidth and screen.availHeight.</p>
          <p>So now that we have a reliable way of altering the coordinate space, we can figure out how exactly we'll do that. If the viewport is in portrait mode (window.innerHeight > window.innerWidth), then our limiting factor is the viewport width, so we set our canvas's width relative to the viewport width. If the viewport is in landscape mode (window.innerWidth > window.innerHeight), then the limiting factor is the viewport height, so we set width relative to the viewport height.</p>
          <p>Feel free to use whatever breakpoints you want:</p>
          <pre className="darkBackground"><code><span className="codePurple">function</span> <span className="codeBlue">resizeCanvas</span>() &#123;
          {`\n  `}
    <span className="codeGray">//Gets the devicePixelRatio</span>
    {`\n  `}
    <span className="codePurple">var</span> pixelRatio = <span className="codeBlue">setCanvasScalingFactor</span>();
    {`\n  `}
    <span className="codeGray">//The viewport is in portrait mode, so var width should be based off viewport WIDTH</span>
    {`\n\n  `}
    <span className="codePurple">if</span> (<span className="codeRed">window</span>.<span className="codeRed">innerHeight</span> <span className="codeTeal">></span> <span className="codeRed">window</span>.<span className="codeRed">innerWidth</span>) &#123;
    {`\n    `}
        <span className="codeGray">//Makes the canvas 100% of the viewport width</span>
        {`\n    `}
        <span className="codePurple">var</span> width = <span className="codeYellow">Math</span>.<span className="codeTeal">round</span>(<span className="codeOrange">1.0</span> <span className="codeTeal">*</span> <span className="codeRed">window</span>.<span className="codeRed">innerWidth</span>);
        {`\n  `}
    &#125;
    {`\n  `}
  <span className="codeGray">//The viewport is in landscape mode, so var width should be based off viewport HEIGHT</span>
  {`\n  `}
    <span className="codePurple">else</span> &#123;
    {`\n    `}
        <span className="codeGray">//Makes the canvas 100% of the viewport height</span>
        {`\n    `}
        <span className="codePurple">var</span> width = <span className="codeYellow">Math</span>.<span className="codeTeal">round</span>(<span className="codeOrange">1.0</span> <span className="codeTeal">*</span> <span className="codeRed">window</span>.<span className="codeRed">innerHeight</span>);
        {`\n  `}
    &#125;
{`\n\n  `}
    <span className="codeGray">//This is done in order to maintain the 1:1 aspect ratio, adjust as needed</span>
    {`\n  `}
    <span className="codePurple">var</span> height = width;

    <span className="codeGray">
    {`\n\n  `}//This will be used to downscale the canvas element when devicePixelRatio > 1</span>
    {`\n  `}
    <span className="codeRed">aWrapper</span>.<span className="codeRed">style</span>.<span className="codeRed">width</span> <span className="codeTeal">=</span> width <span className="codeTeal">+</span> <span className="codeGreen">"px"</span>;
    {`\n  `}
    <span className="codeRed">aWrapper</span>.<span className="codeRed">style</span>.<span className="codeRed">height</span> <span className="codeTeal">=</span> height <span className="codeTeal">+</span> <span className="codeGreen">"px"</span>;
    {`\n\n  `}
    <span className="codeGray">//pixelRatio will be either an integer or floating point number</span>
    {`\n  `}
    <span className="codeRed">canvas</span>.<span className="codeRed">width</span> <span className="codeTeal">=</span> width <span className="codeTeal">*</span> pixelRatio;
    {`\n  `}
    <span className="codeRed">canvas</span>.<span className="codeRed">height</span> <span className="codeTeal">=</span> height <span className="codeTeal">*</span> pixelRatio;
    {`\n`}
&#125;</code></pre>
          <p><a  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round" target="_blank">Math.round</a> (only useful for when you don't want the canvas to be 100% of the viewport height/width) is used on <span className="code">var width</span> because floating point numbers are not a reliable way of drawing pixel-perfect canvas content. The resizing transitions might not be as smooth, but a few miniscule jumps is well worth high canvas content quality. </p>
          <h2>Drawing some shapes</h2>
          <p>This function draws some rectangles to help show the responsive canvas in action. At the end, we use the <a  href="https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame" target="_blank">window.requestAnimationFrame</a> method. This allows the browser to call your draw function before its next repaint, with whatever frequency it deems appropriate. As a result, this option is preferable to the  <a  href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval" target="_blank">window.setInterval()</a> method of updating a canvas. </p>
          <pre className="darkBackground"><code><span className="codeGray">//To make dynamic colors</span>
          {`\n`}
<span className="codePurple">var</span> cascadeFactor <span className="codeTeal">=</span> <span className="codeOrange">255</span>;
{`\n`}
<span className="codePurple">var</span> cascadeCoefficient <span className="codeTeal">=</span> <span className="codeOrange">1</span>;
{`\n\n`}
<span className="codePurple">function</span> <span className="codeBlue">draw</span>() &#123;
{`\n  `}
    <span className="codeGray">//The number of color block columns and rows</span>
    {`\n  `}
    <span className="codePurple">var</span> columns <span className="codeTeal">=</span> <span className="codeOrange">5</span>;
    {`\n  `}
    <span className="codePurple">var</span> rows <span className="codeTeal">=</span> <span className="codeOrange">5</span>;
    {`\n\n  `}
    <span className="codeGray">//The length of each square</span>
    {`\n  `}
    <span className="codePurple">var</span> length <span className="codeTeal">=</span> <span className="codeYellow">Math</span>.<span className="codeTeal">round</span>(<span className="codeRed">canvas</span>.<span className="codeRed">width</span><span className="codeTeal">/</span>columns) <span className="codeTeal">-</span> <span className="codeOrange">2</span>;
{`\n\n  `}
    <span className="codeGray">//Increments or decrements cascadeFactor by 1, based on cascadeCoefficient</span>
    {`\n  `}
    cascadeFactor <span className="codeTeal">+=</span> cascadeCoefficient;
{`\n\n  `}
    <span className="codeGray">//Makes sure the canvas is clean at the beginning of a frame</span>
    {`\n  `}
    <span className="codeRed">ctx</span>.<span className="codeBlue">clearRect</span>(<span className="codeOrange">0</span>, <span className="codeOrange">0</span>, <span className="codeRed">canvas</span>.<span className="codeRed">width</span>, <span className="codeRed">canvas</span>.<span className="codeRed">height</span>);
{`\n\n  `}
    <span className="codePurple">for</span> (<span className="codePurple">var</span> i<span className="codeTeal"> = </span>columns; i <span className="codeTeal">>=</span> <span className="codeOrange">1</span>; i<span className="codeTeal">--</span>) &#123;
    {`\n    `}
      <span className="codePurple">for</span> (<span className="codePurple">var</span> j<span className="codeTeal"> = </span>rows; j <span className="codeTeal">>=</span> <span className="codeOrange">1</span>; j<span className="codeTeal">--</span>) &#123;
      {`\n      `}
        <span className="codeGray">//Where the color magic happens</span>
        {`\n      `}
        <span className="codeRed">ctx</span>.<span className="codeBlue">fillStyle</span> <span className="codeTeal">=</span> <span className="codeGreen">"rgba("</span> <span className="codeTeal">+</span> j<span className="codeTeal">*</span>i<span className="codeTeal">*</span>(cascadeFactor<span className="codeTeal">-</span><span className="codeOrange">110</span>)<span className="codeTeal"> + </span><span className="codeGreen">","</span><span className="codeTeal"> + </span>i<span className="codeTeal">*</span>cascadeFactor<span className="codeTeal"> + </span><span className="codeGreen">","</span><span className="codeTeal"> + </span>j<span className="codeTeal">*</span>cascadeFactor <span className="codeTeal">+</span> <span className="codeGreen">","</span> <span className="codeTeal"> + </span><span className="codeOrange">0.6</span><span className="codeTeal"> + </span><span className="codeGreen">")"</span>;
        {`\n      `}

        <span className="codeRed">ctx</span>.<span className="codeBlue">fillRect</span>((length<span className="codeTeal">*</span>(i<span className="codeTeal">-</span><span className="codeOrange">1</span>)) <span className="codeTeal">+</span> ((i<span className="codeTeal">-</span><span className="codeOrange">1</span>)<span className="codeTeal">*</span><span className="codeOrange">2</span>), (length<span className="codeTeal">*</span>(j<span className="codeTeal">-</span><span className="codeOrange">1</span>)) <span className="codeTeal">+</span> ((j<span className="codeTeal">-</span><span className="codeOrange">1</span>)<span className="codeTeal">*</span><span className="codeOrange">2</span>), length, length);
        {`\n    `}
       &#125;
       {`\n  `}
    &#125;
    {`\n\n  `}

    <span className="codePurple">if</span> (cascadeFactor <span className="codeTeal">></span> <span className="codeOrange">275</span> <span className="codeTeal">||</span> cascadeFactor <span className="codeTeal">&lt;</span> <span className="codeOrange">0</span>) &#123;
    {`\n    `}
      <span className="codeGray">//Resets the color cascade</span>
      {`\n    `}
      cascadeCoefficient <span className="codeTeal">=</span> <span className="codeTeal">-</span>cascadeCoefficient;
      {`\n  `}
    &#125;
{`\n\n  `}
    <span className="codeGray">//Continuously calls draw() again until cancelled</span>
    {`\n  `}
    <span className="codePurple">var</span> someID <span className="codeTeal">=</span> <span className="codeRed">window</span>.<span className="codeBlue">requestAnimationFrame</span>(draw);
    {`\n`}
&#125;</code></pre>
          <p>Setting an ID for the request allows for canceling later using <a  href="https://developer.mozilla.org/en-US/docs/Web/API/Window/cancelAnimationFrame" target="_blank">window.cancelAnimationFrame()</a>.</p>
          <h2>Listening for the changes to our viewport</h2>
          <p>The most dependable way to listen for updates to window.innerWidth and window.innerHeight is to use: </p>
          <pre className="darkBackground"><code><span className="codeRed">window</span>.<span className="codeTeal">addEventListener</span>(<span className="codeGreen">"resize"</span>, resizeCanvas, <span className="codeOrange">false</span>);
{`\n\n`}
<span className="codeGray">//Called once so everything renders correctly on load time</span>
{`\n`}
<span className="codeBlue">resizeCanvas</span>();
{`\n`}
<span className="codeBlue">draw</span>();</code></pre>
          <p>Events such as <a  href="https://developer.mozilla.org/en-US/docs/Web/Events/orientationchange" target="_blank">orientationchange</a> can also be used for mobile and tablet devices, but they're unreliable across browsers. For example, window.innerWidth and window.outerWidth will update properly by the time the orientationchange event ends on Safari in iOS 10, but they will not update properly on Firefox, Chrome, or Opera Mini on iOS devices.</p>

          <h2>Conclusion</h2>
          <p>Putting it all together we get something like this:  </p>
          <ul>
            <li><strong><a  href="https://codepen.io/ajarana/full/aJgPMR/" target="_blank">CodePen (Full page)</a></strong></li>
            <li><strong><a  href="https://codepen.io/ajarana/pen/aJgPMR/" target="_blank">CodePen (Editor view)</a></strong></li>
          </ul>
          <p>Whenever the viewport changes, the canvas will continue to redraw itself using its new width and height variables, and will also check to see if devicePixelRatio has changed.</p>
          <p>We end up with a responsive canvas capable of handling nearly all device pixel ratios, browsers, and platforms.</p>
          <h2>Credits</h2>
          <p><a href="https://developer.mozilla.org/en-US/" target="_blank">MDN</a></p>
          <p><a  href="https://www.html5rocks.com/en/tutorials/canvas/hidpi/" target="_blank">High DPI Canvas</a></p>
          <p><a  href="https://www.html5rocks.com/en/tutorials/casestudies/gopherwoord-studios-resizing-html5-games/" target="_blank">Case Study: Auto-Resizing HTML5 Games</a></p>
          <p><a  href="https://stackoverflow.com/questions/3543358/resizing-a-html-canvas-blanks-its-contents" target="_blank">Resizing a HTML canvas blanks its contents</a></p>
          <div className="blogDates">
          <p className="spacedOut lightGray"><i>Posted on March 31, 2017</i></p>
          <p className="spacedOut lightGray"><i>Last edited on July 23, 2017</i></p>
         </div>
        </section>
      </div>
    </main>
    )
  }
}

export default ResponsiveCanvasDevelopment