import React from 'react'

class CanvasGameDevelopment extends React.Component {
  render() {
    return (
      <main className="mainContainer blogContainer">
        <section className="fullWidthContainerSmall flexCentered">
          <a href="/mixtin/">
            <img className="images" src="./assets/mixtin/mixtin-1x.png" alt="Screenshot of the mobile menu of a Bootstrap website." srcSet="./assets/mixtin/mixtin-1x-C.png, ./assets/mixtin/mixtin-2x-C.png 2x, ./assets/mixtin/mixtin-4x-C2.png 4x" />
          </a>
        </section>

        <section>
          <h1>Building a Bootstrap 3 Image Gallery</h1>
          <p>I designed and developed <a href="/mixtin/">this gallery</a> using Boostrap 3 components, LESS, HTML5, and a little bit of JavaScript. Bootstrap takes care of a lot of things for you: the design, media queries, modular classes, meta tags, and UI transitions and animations. Customization requires a little more knowledge, but otherwise it is a very easy framework to work with.</p>

          <h2>Boostrap Components</h2>
          <p>Components used included navbars, containers, columns, among other components. Bootstrap's extensive <a href="http://getbootstrap.com/components/" target="_blank">documentation</a> does more than enough to get you through any problems.</p>
          <h2>LESS</h2>
          <p>My <a href="https://github.com/ajarana/mixtin/tree/master/less" target="_blank">LESS directory</a> consisted of the Bootstrap LESS files along with my own custom ones. Vanilla Bootstrap isn't enough for a distinct look, though customization does come with its own set of problems since Bootstrap 3 does not use things like <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Advanced_layouts_with_flexbox" target="_blank">flexbox</a>.</p>
          <h2>HTML5</h2>
          <p>I used the <a href="http://getbootstrap.com/getting-started/#template" target="_blank">basic HTML5 template</a> from Bootstrap's website for this part. Included are necessary meta tags and links to the external stylesheets and scripts. The rest is <a href="https://github.com/ajarana/mixtin/blob/master/index.html" target="_blank">my own code</a>.</p>
          <h2>JS</h2>
          <p>I used a little bit of Vanilla JS to make a <a href="https://github.com/ajarana/mixtin/blob/master/js/mixtinTime1.js" target="_blank">counter</a> that keeps track of the date. jQuery is used for other UI effects, such as those for the header and image gallery sorting.</p>
          <h2>Conclusions</h2>
          <p>Bootstrap is an extremely useful framework for when you need to build a responsive front-end both quickly and easily. It will require much more work to actually learn about the specific technologies they use, but it is still worthwhile to spend your time learning Bootstrap.</p>

          <p>In the future, they will also include other additions to their framework including <a href="https://www.quackit.com/bootstrap/bootstrap_4/differences_between_bootstrap_3_and_bootstrap_4.cfm" target="_blank">flexbox, SCSS, rem rather than px, among other changes</a>.</p>
          <h2>Credits</h2>
          <p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Advanced_layouts_with_flexbox" target="_blank">Advanced layouts with flexbox</a></p>
          <p><a href="http://getbootstrap.com/" target="_blank">Bootstrap</a></p>
          <p><a href="https://www.quackit.com/bootstrap/bootstrap_4/differences_between_bootstrap_3_and_bootstrap_4.cfm" target="_blank">Differences Between Bootstrap 3 and 4</a></p>
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