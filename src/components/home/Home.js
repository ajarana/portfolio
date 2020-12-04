import React, { Component } from 'react'
import moment from 'moment';
import { NavLink } from "react-router-dom"

const Project = props => {
  const {
    project
  } = props;

  const {
    assets,
    blog,
    description,
    descriptionWarning,
    lastUpdated,
    title,
    url
  } = project;

  return (
    <section className="sectionContainer">
      <div className="project flexCenteredToFlexTopLeft flexWrapThenNoWrap invisible">
        <figure className="imageHolder flexCentered">
          <a href={ url } target="_blank" rel="noopener noreferrer">
            <img className="images" 
                src={ assets.src } 
                alt={ assets.alt }
                srcSet={ assets.srcset } />
          </a>
        </figure>

        <div className="listContainer">
          <header>
            <h3 className="sectionHeaders">
            { title } <span className="updated-time">Last updated: { lastUpdated }</span>
            </h3>

            <p>
              { description }
            </p>

            <p className="codeRed">{descriptionWarning}</p>
          </header>

          <ul className="linkContainer">
            {(url) &&
                <li>
                    <a href={ url } className="linkIcon" target="_blank" rel="noopener noreferrer">View project</a>
                </li>   
            }

            <li>
              <a href="https://github.com/ajarana/agame" className="linkIcon" target="_blank" rel="noopener noreferrer">View code</a>
            </li>

            <li>
              <NavLink to={ blog } className="linkIcon">Read more</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const Projects = props => {
  let projects = [
    {
      title: 'Block Aid',
      description: 'An HTML5 canvas game made with vanilla JavaScript and CSS3 via LESS. Maintains pixel-perfect quality even on high DPI screens.',
      assets: {
        src: 'assets/agame/agame-1x.png',
        alt: 'Screenshot of a memory game.',
        srcset: 'assets/agame/agame-1x.png, assets/agame/agame-2x.png 2x, assets/agame/agame-4x.png 4x'
      },
      lastUpdated: props.githubData.blockAid.lastUpdated,
      blog: '/blog/development-canvas-game',
      url: 'https://ajarana.github.io/agame/index.html'
    },
    {
      title: 'Mixtin',
      description: 'A responsive website designed and developed using Bootstrap 3 components, HTML5, and CSS3 via LESS.',
      assets: {
        src: 'assets/mixtin/mixtin-1x-C.png',
        alt: 'Screenshot of the mobile menu of a Bootstrap website.',
        srcset: 'assets/mixtin/mixtin-1x-C.png, assets/mixtin/mixtin-2x-C.png 2x, assets/mixtin/mixtin-4x-C2.png 4x'
      },
      lastUpdated: props.githubData.mixtin.lastUpdated,
      blog: '/blog/development-bootstrap-3-site',
      url: 'https://ajarana.github.io/mixtin/index.html'
    },
    {
      title: 'News Feed',
      description: "A tech, gaming, and science news feed designed and developed using React, Redux, HTML5, and CSS3. Data is gathered from an external JSON API using Ajax via the Fetch API.",
      descriptionWarning: "Unfortunately, this API has now only enabled CORS from localhost, so this project is no longer functional.",
      assets: {
        src: 'assets/arcade/arcade-1x-C2.png',
        alt: 'Screenshot of a news feed made using React and Redux.',
        srcset: 'assets/arcade/arcade-1x-C2.png, assets/arcade/arcade-2x-C2.png 2x, assets/arcade/arcade-4x-C2.png 4x'
      },
      lastUpdated: props.githubData.newsFeed.lastUpdated,
      blog: '/blog/development-reactjs-news-feed'
    }
  ];

  const ProjectList = projects.map((project, i) => (
    <Project 
      key={i}
      project={project}
    />
  ));

  return (
    <div className="mainContainer">
      { ProjectList }
    </div>
  );
};

class Home extends Component {
  constructor() {
    super() 

    this.state = {
      githubData: {
        blockAid: {
          lastUpdated: 'No data received yet.'
        },
        mixtin: {
          lastUpdated: 'No data received yet.'
        },
        newsFeed: {
          lastUpdated: 'No data received yet.'
        }
      }
    };
  }

  opacityEffectHandler() {
    let projects = Array.from(document.getElementsByClassName('project'))

    const checkProjectBounds = () => {
      projects.forEach((project) => {
        let boundingRect = project.getBoundingClientRect()
        let upperPoint = boundingRect.bottom - (boundingRect.height / 1.25)
        let lowerPoint = boundingRect.bottom - (boundingRect.height / 5)

        if ((upperPoint > 0 && upperPoint < window.innerHeight) || (lowerPoint > 0 && lowerPoint < window.innerHeight)) {
          if (project.classList.contains('invisible')) {
            project.classList.remove('invisible')
          }
        }
      })
    };


    window.setTimeout(() => {
      window.onscroll = () => {
        checkProjectBounds()
      }

      checkProjectBounds()
    }, 100);
  }

  async componentDidMount() {
    this.opacityEffectHandler()

    let blockResponse = await fetch('https://api.github.com/repos/ajarana/agame');

    let blockJson = await blockResponse.json();

    let formattedBlockJson = moment(blockJson.pushed_at).format("MMMM Do YYYY, h:mm:ss a")

    let mixtinResponse = await fetch('https://api.github.com/repos/ajarana/mixtin');

    let mixtinJson = await mixtinResponse.json();

    let formattedMixtinJson = moment(mixtinJson.pushed_at).format("MMMM Do YYYY, h:mm:ss a")

    let newsFeedResponse = await fetch('https://api.github.com/repos/ajarana/arcade');

    let newsFeedJson = await newsFeedResponse.json();

    let formattedNewsFeedJson = moment(newsFeedJson.pushed_at).format("MMMM Do YYYY, h:mm:ss a")

    this.setState(
      { 
        githubData: { 
          ...this.state.githubData,
          blockAid: { 
            ...this.state.githubData.blockAid, 
            lastUpdated: formattedBlockJson 
          },
          mixtin: {
            ...this.state.githubData.mixtin, 
            lastUpdated: formattedMixtinJson
          },
          newsFeed: {
            ...this.state.githubData.newsFeed, 
            lastUpdated: formattedNewsFeedJson
          }
        } 
      }
    );
  }

  render() {
    return (
      <main>

        <article className="portfolio">

          <header id="introduction" className="main-container-full-width textAlignCenter">
            <div className="hero-header-text">
              <h2>UI Developer</h2>

              <p>I am a UI developer with a chemistry degree. This mobile-first web app was made with <span id="react">React</span> and, for the purposes of learning, without any <span id="css3">CSS3</span> frameworks/libraries or <span id="html5">HTML5</span> templates. Portfolio website and resume design are my own. Below are some of my personal projects (<span className="codeRed">warning:</span> they are out of date).</p>

              <ul className="linkContainer">
                  <li>
                    <a href="https://github.com/ajarana/portfolio" className="linkIcon" target="_blank" rel="noopener noreferrer">Site code</a>
                  </li>
                  <li>
                    <NavLink className="linkIcon" to="/about/" rel="noopener noreferrer">
                      About
                    </NavLink>
                  </li>
                </ul>
            </div>
          </header>

          <Projects githubData={this.state.githubData} />

        </article>

      </main>
    )
  }
}

export default Home