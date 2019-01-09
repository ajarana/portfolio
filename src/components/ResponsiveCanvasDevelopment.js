import React from 'react'

class ResponsiveCanvasDevelopment extends React.Component {
  render() {
    return (
      <main>
      <div class="fullWidthContainerSmall backgroundGray">
         <div id="aWrapper" class="blogContainer">
           <a href="https://codepen.io/ajarana/pen/aJgPMR" target="_blank">
           <canvas id="myCanvas" class="responsiveCanvas">A canvas showing a plethora of cascading colors using 40 different blocks.</canvas>
           </a>
         </div>
      </div>
      <div id="blog" class="mainContainer blogContainer">
        <h1 class="textAlignLeft">Building a Responsive Canvas Using Vanilla JavaScript</h1>

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
          <pre id="lul" class="darkBackground"><code>&lt;<span class="codeRed">div</span> <span class="codeBlue">id</span>=<span class="codeGreen">"aWrapper"</span>&gt;
    <span class="codeGray">&lt;!--Include some fallback content on the 0.00001% chance your user's browser doesn't support canvas --&gt;</span>
    &lt;<span class="codeRed">canvas</span> <span class="codeBlue">id</span>=<span class="codeGreen">"myCanvas"</span>&gt;Fallback content&lt;/<span class="codeRed">canvas</span>&gt;
&lt;/<span class="codeRed">div</span>&gt;</code></pre>
          <p>Now we need the canvas element to inherit its width and height properties from its parent to allow for downscaling of the width and height properties. This will be further explained later (note: the width and height properties here could also be set through JavaScript, but this is more efficient if you want to overlay some UI elements or other canvases for your project).</p>
          <pre class="darkBackground"><code><span class="codeBlue">#aWrapper</span> &#123;
    <span class="codeGray">/*Horizontally centers the canvas*/</span>
    margin: <span class="codeOrange">0</span> auto;
    &#125;

<span class="codeBlue">#myCanvas</span> &#123;
    <span class="codeGray">/*This eliminates inconsistent rendering across browsers, canvas is supposed to be a block-level element across all browsers anyway*/</span>
    display: block;

    <span class="codeGray">/*myCanvas will inherit its CSS width and style property values from aWrapper*/</span>
    width: <span class="codeOrange">100%</span>;
    height: <span class="codeOrange">100%</span>;
    &#125;</code></pre>
          <p>Then we create some JavaScript variables to reference the necessary elements in our DOM and access the <a  href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D" target="_blank">2D rendering context</a> we'll use to draw shapes with.</p>
          <pre class="darkBackground"><code><span class="codePurple">var</span> aWrapper = <span class="codeRed">document</span>.<span class="codeTeal">getElementById</span>(<span class="codeGreen">"aWrapper"</span>);
<span class="codePurple">var</span> canvas = <span class="codeRed">document</span>.<span class="codeTeal">getElementById</span>(<span class="codeGreen">"myCanvas"</span>);

<span class="codeGray">//Accesses the 2D rendering context for our canvas</span>
<span class="codePurple">var</span> ctx = <span class="codeRed">canvas</span>.<span class="codeTeal">getContext</span>(<span class="codeGreen">"2d"</span>);</code></pre>
          <p>Now we just have to actually make the canvas responsive.</p>
          <h2>Maintaining canvas quality across various device pixel ratios</h2>
          <p>The canvas coordinate space must be rendered according to the <a  href="https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio" target="_blank">device pixel ratio</a> of the display, otherwise the content will become blurry for any display with a device pixel ratio higher than 1. These displays are often found in mobile and tablet devices, and have more than 1 physical pixel representing every logical pixel. A more in-depth look into this subtopic can be found <a  href="https://www.html5rocks.com/en/tutorials/canvas/hidpi/" target="_blank">here</a>.</p>
          <p>The following will query the device's pixel ratio so that we can use this to alter the coordinate space. You can test this simply by increasing the zoom on a desktop browser. You'll notice that the canvas coordinate space has larger dimensions than the actual canvas element itself.</p>
          <p><span class="red">Warning:</span> A devicePixelRatio with a floating pointer number value won't always be pretty (e.g. <a  href="https://mydevice.io/devices/#samsunggalaxys6" target="_blank">Microsoft's Lumia 1520</a> with a 2.5 pixel ratio).</p>
          <pre class="darkBackground"><code><span class="codePurple">function</span> <span class="codeBlue">setCanvasScalingFactor</span>() &#123;
    <span class="codePurple">return</span> <span class="codeRed">window</span>.<span class="codeRed">devicePixelRatio</span> <span class="codeTeal">||</span> <span class="codeOrange">1</span>;
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
          <pre class="darkBackground"><code><span class="codePurple">function</span> <span class="codeBlue">resizeCanvas</span>() &#123;
    <span class="codeGray">//Gets the devicePixelRatio</span>
    <span class="codePurple">var</span> pixelRatio = <span class="codeBlue">setCanvasScalingFactor</span>();

    <span class="codeGray">//The viewport is in portrait mode, so var width should be based off viewport WIDTH</span>
    <span class="codePurple">if</span> (<span class="codeRed">window</span>.<span class="codeRed">innerHeight</span> <span class="codeTeal">></span> <span class="codeRed">window</span>.<span class="codeRed">innerWidth</span>) &#123;
        <span class="codeGray">//Makes the canvas 100% of the viewport width</span>
        <span class="codePurple">var</span> width = <span class="codeYellow">Math</span>.<span class="codeTeal">round</span>(<span class="codeOrange">1.0</span> <span class="codeTeal">*</span> <span class="codeRed">window</span>.<span class="codeRed">innerWidth</span>);
    &#125;
  <span class="codeGray">//The viewport is in landscape mode, so var width should be based off viewport HEIGHT</span>
    <span class="codePurple">else</span> &#123;
        <span class="codeGray">//Makes the canvas 100% of the viewport height</span>
        <span class="codePurple">var</span> width = <span class="codeYellow">Math</span>.<span class="codeTeal">round</span>(<span class="codeOrange">1.0</span> <span class="codeTeal">*</span> <span class="codeRed">window</span>.<span class="codeRed">innerHeight</span>);
    &#125;

    <span class="codeGray">//This is done in order to maintain the 1:1 aspect ratio, adjust as needed</span>
    <span class="codePurple">var</span> height = width;

    <span class="codeGray">//This will be used to downscale the canvas element when devicePixelRatio > 1</span>
    <span class="codeRed">aWrapper</span>.<span class="codeRed">style</span>.<span class="codeRed">width</span> <span class="codeTeal">=</span> width <span class="codeTeal">+</span> <span class="codeGreen">"px"</span>;
    <span class="codeRed">aWrapper</span>.<span class="codeRed">style</span>.<span class="codeRed">height</span> <span class="codeTeal">=</span> height <span class="codeTeal">+</span> <span class="codeGreen">"px"</span>;

    <span class="codeGray">//pixelRatio will be either an integer or floating point number</span>
    <span class="codeRed">canvas</span>.<span class="codeRed">width</span> <span class="codeTeal">=</span> width <span class="codeTeal">*</span> pixelRatio;
    <span class="codeRed">canvas</span>.<span class="codeRed">height</span> <span class="codeTeal">=</span> height <span class="codeTeal">*</span> pixelRatio;
&#125;</code></pre>
          <p><a  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round" target="_blank">Math.round</a> (only useful for when you don't want the canvas to be 100% of the viewport height/width) is used on <span class="code">var width</span> because floating point numbers are not a reliable way of drawing pixel-perfect canvas content. The resizing transitions might not be as smooth, but a few miniscule jumps is well worth high canvas content quality. </p>
          <h2>Drawing some shapes</h2>
          <p>This function draws some rectangles to help show the responsive canvas in action. At the end, we use the <a  href="https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame" target="_blank">window.requestAnimationFrame</a> method. This allows the browser to call your draw function before its next repaint, with whatever frequency it deems appropriate. As a result, this option is preferable to the  <a  href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval" target="_blank">window.setInterval()</a> method of updating a canvas. </p>
          <pre class="darkBackground"><code><span class="codeGray">//To make dynamic colors</span>
<span class="codePurple">var</span> cascadeFactor <span class="codeTeal">=</span> <span class="codeOrange">255</span>;
<span class="codePurple">var</span> cascadeCoefficient <span class="codeTeal">=</span> <span class="codeOrange">1</span>;

<span class="codePurple">function</span> <span class="codeBlue">draw</span>() &#123;
    <span class="codeGray">//The number of color block columns and rows</span>
    <span class="codePurple">var</span> columns <span class="codeTeal">=</span> <span class="codeOrange">5</span>;
    <span class="codePurple">var</span> rows <span class="codeTeal">=</span> <span class="codeOrange">5</span>;
    <span class="codeGray">//The length of each square</span>
    <span class="codePurple">var</span> length <span class="codeTeal">=</span> <span class="codeYellow">Math</span>.<span class="codeTeal">round</span>(<span class="codeRed">canvas</span>.<span class="codeRed">width</span><span class="codeTeal">/</span>columns) <span class="codeTeal">-</span> <span class="codeOrange">2</span>;

    <span class="codeGray">//Increments or decrements cascadeFactor by 1, based on cascadeCoefficient</span>
    cascadeFactor <span class="codeTeal">+=</span> cascadeCoefficient;

    <span class="codeGray">//Makes sure the canvas is clean at the beginning of a frame</span>
    <span class="codeRed">ctx</span>.<span class="codeBlue">clearRect</span>(<span class="codeOrange">0</span>, <span class="codeOrange">0</span>, <span class="codeRed">canvas</span>.<span class="codeRed">width</span>, <span class="codeRed">canvas</span>.<span class="codeRed">height</span>);

    <span class="codePurple">for</span> (<span class="codePurple">var</span> i<span class="codeTeal"> = </span>columns; i <span class="codeTeal">>=</span> <span class="codeOrange">1</span>; i<span class="codeTeal">--</span>) &#123;
      <span class="codePurple">for</span> (<span class="codePurple">var</span> j<span class="codeTeal"> = </span>rows; j <span class="codeTeal">>=</span> <span class="codeOrange">1</span>; j<span class="codeTeal">--</span>) &#123;
        <span class="codeGray">//Where the color magic happens</span>
        <span class="codeRed">ctx</span>.<span class="codeBlue">fillStyle</span> <span class="codeTeal">=</span> <span class="codeGreen">"rgba("</span> <span class="codeTeal">+</span> j<span class="codeTeal">*</span>i<span class="codeTeal">*</span>(cascadeFactor<span class="codeTeal">-</span><span class="codeOrange">110</span>)<span class="codeTeal"> + </span><span class="codeGreen">","</span><span class="codeTeal"> + </span>i<span class="codeTeal">*</span>cascadeFactor<span class="codeTeal"> + </span><span class="codeGreen">","</span><span class="codeTeal"> + </span>j<span class="codeTeal">*</span>cascadeFactor <span class="codeTeal">+</span> <span class="codeGreen">","</span> <span class="codeTeal"> + </span><span class="codeOrange">0.6</span><span class="codeTeal"> + </span><span class="codeGreen">")"</span>;

        <span class="codeRed">ctx</span>.<span class="codeBlue">fillRect</span>((length<span class="codeTeal">*</span>(i<span class="codeTeal">-</span><span class="codeOrange">1</span>)) <span class="codeTeal">+</span> ((i<span class="codeTeal">-</span><span class="codeOrange">1</span>)<span class="codeTeal">*</span><span class="codeOrange">2</span>), (length<span class="codeTeal">*</span>(j<span class="codeTeal">-</span><span class="codeOrange">1</span>)) <span class="codeTeal">+</span> ((j<span class="codeTeal">-</span><span class="codeOrange">1</span>)<span class="codeTeal">*</span><span class="codeOrange">2</span>), length, length);
       &#125;
    &#125;

    <span class="codePurple">if</span> (cascadeFactor <span class="codeTeal">></span> <span class="codeOrange">275</span> <span class="codeTeal">||</span> cascadeFactor <span class="codeTeal">&lt;</span> <span class="codeOrange">0</span>) &#123;
      <span class="codeGray">//Resets the color cascade</span>
      cascadeCoefficient <span class="codeTeal">=</span> <span class="codeTeal">-</span>cascadeCoefficient;
    &#125;

    <span class="codeGray">//Continuously calls draw() again until cancelled</span>
    <span class="codePurple">var</span> someID <span class="codeTeal">=</span> <span class="codeRed">window</span>.<span class="codeBlue">requestAnimationFrame</span>(draw);
&#125;</code></pre>
          <p>Setting an ID for the request allows for canceling later using <a  href="https://developer.mozilla.org/en-US/docs/Web/API/Window/cancelAnimationFrame" target="_blank">window.cancelAnimationFrame()</a>.</p>
          <h2>Listening for the changes to our viewport</h2>
          <p>The most dependable way to listen for updates to window.innerWidth and window.innerHeight is to use: </p>
          <pre class="darkBackground"><code><span class="codeRed">window</span>.<span class="codeTeal">addEventListener</span>(<span class="codeGreen">"resize"</span>, resizeCanvas, <span class="codeOrange">false</span>);

<span class="codeGray">//Called once so everything renders correctly on load time</span>
<span class="codeBlue">resizeCanvas</span>();
<span class="codeBlue">draw</span>();</code></pre>
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
          <div class="blogDates">
          <p class="spacedOut lightGray"><i>Posted on March 31, 2017</i></p>
          <p class="spacedOut lightGray"><i>Last edited on July 23, 2017</i></p>
         </div>
        </section>
      </div>
    </main>
    )
  }
}

export default ResponsiveCanvasDevelopment