import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Blog from './components/Blog'
import { HashRouter as Router, Route } from "react-router-dom"
import 'normalize.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>

      <article>

        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />

        <Footer />

      </article>
      </Router>
    );
  }
}

export default App;
