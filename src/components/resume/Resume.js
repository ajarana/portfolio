import React from 'react'
import { hot } from 'react-hot-loader/root'

class Resume extends React.Component {
  render() {
    return (
      <main id="resume">        
        <article>
          <header>
            <h1>Andres Arana</h1>

            <ul className="contact-information">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Reston, VA</span>
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
              <section className="flexSection front-end-skills">
                <h4 className="secondaryHeader">Front End</h4>

                <div>
                <div className="skillsContainer">
                  <div className="skillList">
                    <span>JavaScript</span><span>React</span><span>AngularJS</span><span>Node</span><span>CesiumJS</span><span>Vis.js</span><span>HTML5</span>
                  </div>

                  <div className="skillList">
                  <span>Responsive Design</span><span>CSS3</span><span>Sass</span><span>LESS</span><span>Bootstrap</span><span>Foundation</span>
                  </div>
                </div>
                </div>
              </section>

              <section className="flexSection">
                <h4 className="secondaryHeader">Software</h4>

                <div>
                  <div className="skillsContainer">
                    <div className="skillList">
                      <span>macOS</span><span>Ubuntu</span><span>Git</span><span>VS Code</span><span>Atom</span>
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
                  April 2019 - Present
                </p>
              </section>

              <h4>LifeFuels</h4>

              <ul>
                <li>
                  Project lead for a small remote team in charge of coordinating the project's various back-end, front-end, and design needs.
                </li>

                <li>
                  Building the React-based dashboard front end for sports teams to manage the nutrition and hydration of players using the LifeFuels bottle.
                </li>

                <li>
                  Built the majority of the lifefuels.com shop front end including cart, checkout, and subscription workflows using React.
                </li>

                <li>
                  Actively particpate in the UI/UX design process for public-facing projects.
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
                  Visualized real-time geospatial and weather data using CesiumJS for a prototype created for a federal customer.
                </li>
                <li>
                  Developed the front end for other web prototypes
                  using React and Vis.js.
                </li>
                <li>
                  Interviewed new team members and trained new hires in the necessary front-end technologies, including React and AngularJS, to support existing company projects.
                </li>
                <li>
                  Attended customer meetings to provide feature status updates and gather feedback.
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
                  Provided front-end web services including content updates, styling, and client-side scripts.
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
                  <p>December 2016 - Present</p>
            </section>
              <ul>
                <li>
                Custom-built and designed portfolio that hosts all of my personal projects.
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