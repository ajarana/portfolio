import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Blog from './components/Blog'
import Resume from './components/Resume'
import ResponsiveCanvasDevelopment from './components/ResponsiveCanvasDevelopment'
import CanvasGameDevelopment from './components/CanvasGameDevelopment'
import Bootstrap3SiteDevelopment from './components/Bootstrap3SiteDevelopment'
import NewsFeedDevelopment from './components/NewsFeedDevelopment'
import { HashRouter as Router, Route } from "react-router-dom"
import ScrollToTop from './components/ScrollToTop'
import { hot } from 'react-hot-loader/root'
import 'normalize.css'
import './App.css'
import '../node_modules/@fortawesome/fontawesome-free/js/all.js'

class App extends Component {
  render() {
    return (
      <Router>

        <ScrollToTop>
          <article>

            <Header />

            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/resume" component={Resume} />
            <Route path="/blog/development-responsive-canvas" component={ResponsiveCanvasDevelopment} />
            <Route path="/blog/development-canvas-game" component={CanvasGameDevelopment} />
            <Route path="/blog/development-bootstrap-3-site" component={Bootstrap3SiteDevelopment} />
            <Route path="/blog/development-reactjs-news-feed" component={NewsFeedDevelopment} />

            <Footer />

          </article>
        </ScrollToTop>
      
      </Router>
    );
  }
}

export default hot(App);
