import React from 'react'
import { hot } from 'react-hot-loader/root'
import { NavLink } from "react-router-dom"

class Header extends React.Component {
  componentDidMount() {
    var mobileButton = document.getElementById("mobileButton");
    var html = document.getElementsByTagName("html");
    var headerMenu = document.getElementById("headerMenu");
    var menuItems = document.getElementsByClassName("menuItems");

    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].onclick = () => {
        headerMenu.classList.add("transitionCollapse");
        headerMenu.classList.remove("transitionExpand");
        html[0].classList.remove("expanded");
      }
    }

    mobileButton.onclick = function() {

      if (html[0].classList.contains("expanded")) {
        headerMenu.classList.add("transitionCollapse");
        headerMenu.classList.remove("transitionExpand");
        html[0].classList.remove("expanded");
      }
      else {
        headerMenu.classList.add("transitionExpand");
        headerMenu.classList.remove("transitionCollapse");
        html[0].classList.add("expanded");
      }
    }

    window.addEventListener("resize", function() {
      headerMenu.classList.remove("transitionExpand");
      headerMenu.classList.remove("transitionCollapse");

      if (window.innerWidth >= 768) {
        html[0].classList.remove("expanded");
      }
    }, false);
  }

  render() {
    return (
      <header id="header">
        <div className="mainContainer flexLeft">
          <div id="titleContainer">
            <NavLink className="plainLink" to="/">
              <span id="logo" className="flexLeft">Andres</span>
            </NavLink>
          </div>

          <div id="buttonWrapper" className="flexRight">
            <button id="mobileButton">
              <span className="flexBottom">
                  <span id="hamburgerWrapper">
                    <span className="hamburgerIcon"></span>
                    <span className="hamburgerIcon"></span>
                    <span className="hamburgerIcon"></span>
                  </span>
              </span>
            </button>
          </div>
  
          <nav>
            <ul id="headerMenu" className="transitionExpand">
              <li className="menuItems">
                <NavLink to="/" exact className="textAlignCenter plainLink headerLink" activeClassName="selected">
                  <p>Home</p>
                </NavLink>
              </li>
  
              <li className="menuItems">
                <NavLink className="plainLink headerLink" to="/about/" activeClassName="selected">
                  <p>
                    About
                  </p>
                </NavLink>
              </li>

              <li className="menuItems">
                <NavLink to="/blog/" className="plainLink headerLink" activeClassName="selected">
                  <p>Blog</p>
                </NavLink>
              </li>

              <li className="menuItems">
                <a className="plainLink headerLink" href="https://github.com/ajarana/" target="_blank" rel="noopener noreferrer">
                  <p className="external-header-link">
                    GitHub
                  </p>
                </a>
              </li>
  
              <li className="menuItems">
                <a className="plainLink headerLink" href="https://codepen.io/ajarana/" target="_blank" rel="noopener noreferrer">
                  <p className="external-header-link">
                    CodePen
                  </p>
                </a>
              </li>
            </ul>
          </nav>

          <div className="invis-aligner"></div>
        </div>
      </header>
    )
  }
}

export default hot(Header)