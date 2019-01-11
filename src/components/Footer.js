import React, { Component } from 'react'
import moment from 'moment';

class Footer extends Component {
  constructor() {
    super() 
    
    this.state = {
      githubData: {
        portfolio: {
          lastUpdated: 'No data received yet.'
        }
      }
    }
  }

  async componentDidMount() {
    let portfolioResponse = await fetch('https://api.github.com/repos/ajarana/ajarana.github.io');

    let portfolioJson = await portfolioResponse.json();

    let formattedPortfolioJson = moment(portfolioJson.pushed_at).format("MMMM Do YYYY, h:mm:ss a")

    this.setState(
      { 
        githubData: { 
          ...this.state.githubData,
          portfolio: { 
            ...this.state.githubData.portfolio, 
            lastUpdated: formattedPortfolioJson 
          }
        } 
      }
    )
  }

  render () {
    return (
      <footer id="footer" className="flexCentered">
      <div className="mainContainer textAlignCenter">
        <h2 className="noMargin lightGray">Portfolio site last updated on: <span className="footer-updated-on">{this.state.githubData.portfolio.lastUpdated}</span></h2>
      </div>
    </footer>
    )
  }
}

export default Footer