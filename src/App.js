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
  componentDidMount() {
    this.createGreeting();
  }

  createGreeting() {
    const style = `
      display: block;
      padding: 20px;
      margin: 10px;
      color: #333; 
      background: linear-gradient(217deg, hsl(207, 89%, 86%), hsl(207, 89%, 82%));
      border: 2px solid #74c0e7;
      font: 600 16px monospace; 
      border-radius: 10px;
      line-height: 1.75;
    `;

    console.log("%cHello, I'm Andres. I developed this website, with the help of some packages, and designed it myself. I'm always open to learning new things, so please reach out at ajoelarana@gmail.com if you would like to talk.", style);
  }

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
