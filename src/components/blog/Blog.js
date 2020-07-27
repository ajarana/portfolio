import React from 'react'
import { NavLink } from "react-router-dom"

class Blog extends React.Component {
  render() {
    return (
      <main>
        <div className="mainContainer">
          <section id="blogDirectory" className="antiCollapsingMargins">
            <h2>March 2017</h2>
            <p>
              <NavLink to="/blog/development-responsive-canvas">Building a Responsive Canvas Using Vanilla JavaScript</NavLink>
            </p>
            <h2>July 2017</h2>
            <p>
              <NavLink to="/blog/development-canvas-game">Building an HTML5 Canvas Game</NavLink>
            </p>
            <p>
              <NavLink to="/blog/development-bootstrap-3-site">Building a Bootstrap 3 Image Gallery</NavLink>
            </p>
            <p>
              <NavLink to="/blog/development-reactjs-news-feed">Building a ReactJS News Feed</NavLink>
            </p>
          </section>
        </div>
      </main>
    )
  }
}

export default Blog