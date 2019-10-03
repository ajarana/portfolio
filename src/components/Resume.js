import React from 'react'
import { hot } from 'react-hot-loader/root'

class Resume extends React.Component {
  constructor() {
    super()

    this.state = {
      skills: null
    }
  }

  resizer() {
    let skillsContainer;
    let width = parseInt(window.getComputedStyle(document.getElementById('root')).width, 10)

    if (width >= 750) {
      skillsContainer = (<div className="skillsContainer">
      <div className="skillList">
        <span>JavaScript</span><span>React</span><span>AngularJS</span><span>Node</span><span>CircleCI</span><span>CesiumJS</span><span>Vis.js</span><span>HTML5</span><span>CSS3</span>
      </div>
      <div className="skillList">
        <span>Sass</span><span>LESS</span><span>Bootstrap</span><span>Foundation</span><span>Font Awesome</span><span>Responsive Design</span>
      </div>
    </div>)
    }
    else if (width >= 550) {
      skillsContainer = (<div className="skillsContainer">
      <div className="skillList">
        <span>JavaScript</span><span>React</span><span>AngularJS</span><span>Node</span><span>CircleCI</span><span>CesiumJS</span>
      </div>
      <div className="skillList">
        <span>Vis.js</span><span>HTML5</span><span>CSS3</span><span>Sass</span><span>LESS</span><span>Bootstrap</span>
      </div>
      <div className="skillList">
      <span>Foundation</span><span>Font Awesome</span><span>Responsive Design</span>
      </div>
    </div>)
    }
    else {
      skillsContainer = (<div className="skillsContainer">
        <div className="skillList">
          <span>JavaScript</span><span>React</span><span>AngularJS</span><span>Node</span><span>CircleCI</span>
        </div>
        <div className="skillList">
          <span>CesiumJS</span><span>Vis.js</span><span>HTML5</span><span>CSS3</span>
        </div>
        <div className="skillList">
        <span>Sass</span><span>LESS</span><span>Bootstrap</span><span>Foundation</span>
        </div>
        <div className="skillList">
          <span>Font Awesome</span><span>Responsive Design</span>
        </div>
      </div>)
    }

    return skillsContainer
  }

  componentDidMount() {
    window.onresize = () => {
      this.setState({ skills: 'lol' })
    }

    this.resizer()
  }

  render() {
    let skillsContainer = this.resizer();

    return (
      <main id="resume">
        <section id="pdfLink">
          <a className="btn" href="/UI-Developer-Andres-Arana.pdf" target="_blank">
            <i className="fas fa-file-pdf"></i>
            <span>View PDF</span>
          </a>
        </section>
        
        <article>
          <header>
            <h1>Andres Arana</h1>

            <ul className="contact-information">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Ashburn, VA</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>ajoelarana@gmail.com</span>
              </li>
              <li>
                <i className="fas fa-mobile-alt"></i>
                <span>703-434-0219</span> 
              </li>
              <li>
                  <i className="fas fa-laptop-code"></i>
                  <span>ajarana.github.io</span>
              </li>
            </ul>   
          </header>

          <section id="skillSection" className="resumeSection">
            <h2>Skills</h2>

            <section className="subSection">
              <section className="flexSection">
                <h4 className="secondaryHeader">Front-End</h4>

                <div>
                  { skillsContainer }
                </div>
              </section>

              <section className="flexSection">
                <h4 className="secondaryHeader">Software</h4>

                <div>
                  <div className="skillsContainer">
                    <div className="skillList">
                      <span>Ubuntu</span><span>macOS</span><span>Git</span><span>VS Code</span><span>Atom</span>
                   </div>
                  </div>
                </div>
              </section>
                
              <section className="flexSection">
                <h4 className="secondaryHeader">Languages</h4>

                <div>
                  <div className="skillsContainer">
                    <div className="skillList">
                      <span>English</span><span>Spanish</span>
                    </div>
                  </div>
                </div>
              </section>
            </section>
            
          </section>

          <div className="separator"></div>

          <section id="workSection" className="resumeSection">
            <h2>Work Experience</h2>

            <section className="subSection">
              <section className="flexSeparated">
                <h3 className="secondaryHeader">Front-End Developer</h3> 
                <p>
                  April 2019 - present
                </p>
              </section>

              <h4>LifeFuels</h4>

              <ul>
                <li>
                  Built the lifefuels.com shop front-end from scratch using React, Contentful, and CircleCI and deployed to multiple environments including development, staging, and production.
                </li>
                <li>
                  Currently working on building the entire web front-end for a tool that will allow soccer coaches and managers to manage the nutritional goals and programs of their teams using the LifeFuels bottle.
                </li>
                <li>
                  Assign front-end tasks for internal tooling that helps maintain the LifeFuels bottle backend and LifeFuels user data.
                </li>
              </ul>
            </section>

            <section className="subSection">
              <section className="flexSeparated">
                <h3 className="secondaryHeader">UI Developer</h3> 
                <p>
                  September 2017 - April 2019
                </p>
              </section>

              <h4>Pragmatics</h4>

              <ul>
                <li>
                  Designing the user interface and developing new front-end functionality for an organization's internal application in order to reduce user error and improve services
                </li>
                <li>
                  Developed responsive interfaces to present large data sets using Cesium, React, Vis.js, and other open source front-end tools
                </li>
                <li>
                  Designed web applications, websites, and prototypes using mobile-first design principles
                </li>
                <li>
                  Integrated feedback from the team and customer in order to improve existing products
                </li>
                <li>
                  Helped interview new developers to determine their fit within existing company projects
                </li>
              </ul>
            </section>

            <section className="subSection">
              <section className="flexSeparated">
                <h3 className="secondaryHeader">Web Developer</h3>
                <p>October 2016 - November 2018</p>
              </section>
              
              <h4>Freelance</h4>

              <ul>
                <li>
                  Aided a children's mental health practice with customer aquisition and website migration.
                </li>
                <li>
                  Implemented portfolio websites and content updates.
                </li>
              </ul>
          </section>

          </section>

          <div className="separator"></div>

          <section className="resumeSection">
            <h2>Personal Projects</h2> 

            <section className="subSection">
              <section className="flexSeparated">
                  <h3>ajarana.github.io</h3>
                  <p>December 2016 - present</p>
            </section>
              <ul>
                <li>
                  Portfolio website built and designed from scratch
                </li>
                <li>
                  Hosts my various personal projects in an effort to learn more front-end technologies
                </li>
              </ul>
            </section>
          
          </section>

          <div className="separator"></div>

          <section className="resumeSection">
            <h2>Education</h2> 

            <section className="subSection">
              <section className="flexSeparated">
                <h3>Bachelor of Science in Chemistry</h3>
                <p>August 2012 - May 2016</p>
              </section>

              <p>College of William &amp; Mary</p>
            </section>
          </section>
        </article>
      </main>
    )
  }
}

export default hot(Resume)