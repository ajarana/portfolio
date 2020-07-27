import React, { Component } from 'react'
import Header from './components/etc/Header'
import Footer from './components/etc/Footer'
import Home from './components/home/Home'
import Blog from './components/blog/Blog'
import Resume from './components/resume/Resume'
import ResponsiveCanvasDevelopment from './components/blog/ResponsiveCanvasDevelopment'
import CanvasGameDevelopment from './components/blog/CanvasGameDevelopment'
import Bootstrap3SiteDevelopment from './components/blog/Bootstrap3SiteDevelopment'
import NewsFeedDevelopment from './components/blog/NewsFeedDevelopment'
import { HashRouter as Router, Route } from "react-router-dom"
import ScrollToTop from './components/etc/ScrollToTop'
import { hot } from 'react-hot-loader/root'
import 'normalize.css'
import './App.scss'

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
