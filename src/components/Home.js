import React from 'react'

const Projects = () => {
  let projects = [
    {
      title: 'Block Aid',
      description: 'An HTML5 canvas game made with vanilla JavaScript and CSS3 via LESS. Maintains pixel-perfect quality even on high DPI screens.',
      assets: {
        src: './assets/agame/agame-1x.png',
        alt: 'Screenshot of a memory game.',
        srcset: './assets/agame/agame-1x.png, ./assets/agame/agame-2x.png 2x, ./assets/agame/agame-4x.png 4x'
      }
    },
    {
      title: 'Mixtin',
      description: 'A responsive website designed and developed using Bootstrap 3 components, HTML5, and CSS3 via LESS.',
      assets: {
        src: './assets/mixtin/mixtin-1x-C.png',
        alt: 'Screenshot of the mobile menu of a Bootstrap website.',
        srcset: './assets/mixtin/mixtin-1x-C.png, ./assets/mixtin/mixtin-2x-C.png 2x, ./assets/mixtin/mixtin-4x-C2.png 4x'
      }
    },
    {
      title: 'News Feed',
      description: 'A tech, gaming, and science news feed designed and developed using React, Redux, HTML5, and CSS3. Data is gathered from an external JSON API using Ajax via the Fetch API.',
      assets: {
        src: './assets/arcade/arcade-1x-C2.png',
        alt: 'Screenshot of a news feed made using React and Redux.',
        srcset: './assets/arcade/arcade-1x-C2.png, ./assets/arcade/arcade-2x-C2.png 2x, ./assets/arcade/arcade-4x-C2.png 4x'
      }
    }
  ];

  const projectList = projects.map((project, i) => 
    <section className="flexCenteredToFlexTopLeft flexWrapThenNoWrap sectionContainer project" key={ i }>
      <figure className="imageHolder flexCentered">
        <a href="/agame/">
          <img className="images" 
               src={ project.assets.src } 
               alt={ project.assets.alt }
               srcSet={ project.assets.srcset } />
        </a>
      </figure>

      <div className="listContainer">
        <header>
          <h3 className="sectionHeaders">
           { project.title }
          </h3>

          <p>
            { project.description }
          </p>
        </header>

        <ul className="linkContainer">
          <li>
            <a href="/agame/" className="linkIcon">View project</a>
          </li>
          <li>
            <a href="https://github.com/ajarana/agame" className="linkIcon" target="_blank" rel="noopener noreferrer">View code</a>
          </li>
          <li>
            <a href="/blog/development-canvas-game" className="linkIcon">Read more</a>
          </li>
        </ul>
      </div>
    </section>
  )

  return (
    <div className="mainContainer">
      {projectList}
    </div>
  )
};

class Home extends React.Component {
  render() {
    return (
      <main>

        <article className="portfolio">

          <header id="introduction" className="main-container-full-width textAlignCenter">
            <div className="hero-header-text">
              <h2>UI Developer</h2>

              <p>I am a UI developer with a chemistry degree. This site was made with <span id="react">React</span> and, for the purposes of learning, without any <span id="css3">CSS3</span> frameworks/libraries or <span id="html5">HTML5</span> templates. This design is my own. Below are some of my personal projects.</p>

              <ul className="linkContainer">
                  <li>
                    <a href="https://github.com/ajarana/ajarana.github.io"className="linkIcon">Site code</a>
                  </li>
                  <li>
                    <a href="https://github.com/ajarana/resume" className="linkIcon" target="_blank" rel="noopener noreferrer">Resume</a>
                  </li>
                </ul>
            </div>
          </header>

          <Projects />

          <div className="mainContainer">

            <section id="agameSectionContainer" className="flexCenteredToFlexTopLeft flexWrapThenNoWrap sectionContainer">

              <figure className="imageHolder flexCentered">
                <a href="/agame/">
                  <img className="images" src="./assets/agame/agame-1x.png" alt="Screenshot of a memory game." srcSet="./assets/agame/agame-1x.png, ./assets/agame/agame-2x.png 2x, ./assets/agame/agame-4x.png 4x" />
                </a>
              </figure>

              <div className="listContainer">
                <header>
                  <h3 className="sectionHeaders">Block Aid</h3>
                  <p>
                  An HTML5 canvas game made with vanilla JavaScript and CSS3 via LESS. Maintains pixel-perfect quality even on high DPI screens.
                  </p>
                </header>

                <ul className="linkContainer">
                  <li>
                    <a href="/blog/development-canvas-game" className="linkIcon">Read more</a>
                  </li>
                  <li>
                    <a href="https://github.com/ajarana/agame" className="linkIcon" target="_blank" rel="noopener noreferrer">View code</a>
                  </li>
                  <li>
                    <a href="/agame/" className="linkIcon">View project</a>
                  </li>
                </ul>
              </div>

            </section>

            <div className="border"></div>

            <section id="mixtinSectionContainer" className="flexCenteredUp flexWrapThenNoWrap sectionContainer">

              <figure className="imageHolder flexCentered primaryImage">
                <a href="/mixtin/">
                  <img className="images" src="./assets/mixtin/mixtin-1x-C.png" alt="Screenshot of the mobile menu of a Bootstrap website." srcSet="./assets/mixtin/mixtin-1x-C.png, ./assets/mixtin/mixtin-2x-C.png 2x, ./assets/mixtin/mixtin-4x-C2.png 4x" />
                </a>
              </figure>

              <div className="listContainer">
                <header>
                  <h3 className="sectionHeaders">Mixtin</h3>
                  <p>
                  A responsive website designed and developed using Bootstrap 3 components, HTML5, and CSS3 via LESS.
                  </p>
                </header>

                <ul className="linkContainer">
                  <li>
                    <a href="/blog/development-bootstrap-3-site" className="linkIcon">Read more</a>
                  </li>
                  <li>
                    <a href="https://github.com/ajarana/mixtin" className="linkIcon" target="_blank" rel="noopener noreferrer">View code</a>
                  </li>
                  <li>
                    <a href="/mixtin/" className="linkIcon">View project</a>
                  </li>
                </ul>
              </div>

              <figure className="imageHolder flexCentered secondaryImage">
                <a href="/mixtin/">
                  <img className="images" src="./assets/mixtin/mixtin-1x-C.png" alt="Screenshot of the mobile menu of a Bootstrap website." srcSet="./assets/mixtin/mixtin-1x-C.png, ./assets/mixtin/mixtin-2x-C.png 2x, ./assets/mixtin/mixtin-4x-C.png 4x" />
                </a>
              </figure>

            </section>

            <div className="border"></div>

            <section id="newsSectionContainer" className="flexCenteredToFlexTopLeft flexWrapThenNoWrap sectionContainer">

              <figure className="imageHolder flexCentered">
                <a href="/arcade/">
                  <img className="images" src="./assets/arcade/arcade-1x-C2.png" alt="Screenshot of a news feed made using React and Redux." srcSet="./assets/arcade/arcade-1x-C2.png, ./assets/arcade/arcade-2x-C2.png 2x, ./assets/arcade/arcade-4x-C2.png 4x" />
                </a>
              </figure>

              <div className="listContainer">
                <header>
                  <h3 className="sectionHeaders">News Feed</h3>
                  <p>
                  A tech, gaming, and science news feed designed and developed using React, Redux, HTML5, and CSS3. Data is gathered from an external JSON API using Ajax via the Fetch API.
                  </p>
                </header>

                <ul className="linkContainer">
                  <li>
                    <a href="/blog/development-reactjs-news-feed" className="linkIcon">Read more</a>
                  </li>
                  <li>
                    <a href="https://github.com/ajarana/arcade" className="linkIcon" target="_blank" rel="noopener noreferrer">View code</a>
                  </li>
                  <li>
                    <a href="/arcade/" className="linkIcon">View project</a>
                  </li>
                </ul>
              </div>

            </section>

          </div>

        </article>

      </main>
    )
  }
}

export default Home