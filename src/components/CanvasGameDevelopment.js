import React from 'react'

class CanvasGameDevelopment extends React.Component {
  render() {
    return (
      <main>
        <section className="fullWidthContainerSmall backgroundGray flexCentered">
        <a href="/agame/">
            <img className="images" src="assets/agame/agame-1x.png" alt="Screenshot of a memory game." srcSet="assets/agame/agame-1x.png, assets/agame/agame-2x.png 2x, assets/agame/agame-4x.png 4x" />
        </a>
      </section>

      <section className="mainContainer blogContainer">
         <h1>Building an HTML5 Canvas Game</h1>
         <p>I built <a href="/agame/">this game</a> game using vanilla JavaScript as my main tool. Below I elaborate on the things I learned about both JS and responsive design.</p>

         <h2>Responsive Design</h2>
         <p>If you're building a web game these days, it should be <a href="https://adwords.googleblog.com/2015/05/building-for-next-moment.html" target="_blank">responsive</a>. Mobile usage is only going to increase as more users get access to powerful handheld devices with their ever-increasing capabilities.</p>
         <p>Unfortunately, I didn't begin by building this game with a mobile-first approach, and it made development hell later on down the road. Designing a game that fits on large viewports is very simple; the more screen real estate, the less you have to worry about fitting in all of your necessary elements.</p>
         <p>But when you're trying to make the main content fit on a screen whose limiting dimension is, for example, 320 logical pixels, then it's a whole other story. Once I had finished the large viewport version of my game, the code didn't transfer so gracefully over to smaller viewports. Worse yet, I was using an <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API" target="_blank">HTML5 canvas</a> element, which doesn't have a whole lot written about it when it comes to responsive design.</p>
         <p><a href="/blog/development-responsive-canvas">This article</a> I wrote is a very solid start in order to develop a fully responsive canvas element using pure JavaScript, HTML5, and CSS3.</p>
         <h2>The JS</h2>
         <p>I certainly learned a lot from <a href="https://github.com/ajarana/agame/blob/master/js/agame.js" target="_blank">the code</a> I wrote. To be frank, it's inelegant, and I could do much better if I had the time to re-write it today. There's way too much use of recursive functions, global variables, and for loops with the plethora of better options currently available these days.</p>
         <p>Attempting to decipher every huge chunk of code that makes my game wouldn't be as fruitful as describing what I accomplished:</p>
         <ul>
            <li><strong>An original method for making a responsive canvas.</strong> I went through a whole lot of different ways in order to accomplish <a href="/blog/development-responsive-canvas">my goal</a>, but I learned why things worked the way they did.</li>
            <li><strong>Quick responsiveness for user selection on tablet and mobile devices.</strong> The default way mobile browsers take into account user selection is through the <a href="https://developer.mozilla.org/en-US/docs/Web/Events/click" target="_blank">click event</a>. My game responds to the user's <a href="https://github.com/ajarana/agame/blob/master/js/agame.js#L482-L485" target="_blank">first contact with a touchscreen</a> using <a href="https://developer.mozilla.org/en-US/docs/Web/Events/touchstart" target="_blank">touchstart</a>. Whether the user is on any device with or without touchscreen functionality, the game is immediately responsive.</li>
            <li><strong>Figuring out an algorithm for detecting adjacency.</strong> <a href="https://github.com/ajarana/agame/blob/master/js/agame.js#L360-L383" target="_blank">Green blocks are aware of other green blocks around them</a>; the same is true for blue blocks.</li>
            <li><strong>Preventing easy-to-memorize patterns.</strong> <a href="https://github.com/ajarana/agame/blob/master/js/agame.js#L100-L143" target="_blank">This</a> prevents easy patterns such as 2x2 squares in the game consisting of blocks of the same color.</li>
            <li><strong>Basic design considerations.</strong> This includes a <a href="https://github.com/ajarana/agame/blob/master/js/agame.js#L626-L644" target="_blank">point system</a>, <a href="https://github.com/ajarana/agame/blob/master/js/agame.js#L528-L566" target="_blank">checking to see if the user selected the correct block</a>, and a <a href="https://github.com/ajarana/agame/blob/master/js/agame.js#L750-L768" target="_blank">countdown</a> before the game starts.</li>
         </ul>
         <h2>Conclusions</h2>
         <p>Implementation is the key to learning how things function and work together. I'm not proud of my code; I'm proud of what I learned from making my code.</p>
         <h2>Credits</h2>
         <p><a href="https://adwords.googleblog.com/2015/05/building-for-next-moment.html" target="_blank">Building for the next moment</a></p>
         <p>
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API" target="_blank">Canvas API</a>
         </p>
         <p>
            <a href="https://developer.mozilla.org/en-US/docs/Web/Events/click" target="_blank">Click</a>
         </p>
         <p>
            <a href="https://developer.mozilla.org/en-US/docs/Web/Events/touchstart" target="_blank">Touchstart</a>
         </p>
         <div className="blogDates">
            <p className="spacedOut lightGray"><i>Posted on July 21, 2017</i></p>
            <p className="spacedOut lightGray"><i>Last edited on July 23, 2017</i></p>
         </div>
       </section>
      </main>  
    )
  }
}

export default CanvasGameDevelopment