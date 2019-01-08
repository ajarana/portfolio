import React from 'react'

class Blog extends React.Component {
  render() {
    return (
      <main>
        <div className="mainContainer">
          <section id="blogDirectory" className="antiCollapsingMargins">
            <h2>March 2017</h2>
            <p>
              <a href="development-responsive-canvas">Building a Responsive Canvas Using Vanilla JavaScript</a>
            </p>
            <h2>July 2017</h2>
            <p>
              <a href="development-canvas-game">Building an HTML5 Canvas Game</a>
            </p>
            <p>
              <a href="development-bootstrap-3-site">Building a Bootstrap 3 Image Gallery</a>
            </p>
            <p>
              <a href="development-reactjs-news-feed">Building a ReactJS News Feed</a>
            </p>
          </section>
        </div>
      </main>
    )
  }
}

export default Blog