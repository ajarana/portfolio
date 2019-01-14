import React from 'react'

class NewsFeedDevelopment extends React.Component {
  render() {
    return (
      <main>
      <section className="fullWidthContainerSmall backgroundGray flexCentered">
        <a href="/arcade/">
           <img id="reactThumbnail" className="images" src="/assets/arcade/arcade-1x-C2.png" alt="Screenshot of a news feed made using React and Redux." srcSet="/assets/arcade/arcade-1x-C2.png, /assets/arcade/arcade-2x-C2.png 2x, /assets/arcade/arcade-4x-C2.png 4x" />
        </a>
      </section>

      <section className="mainContainer blogContainer">
         <h1>Building a ReactJS News Feed</h1>
         <p>This <a href="/arcade/">news feed</a> was built using ReactJS and Redux. I also used plain, old CSS3 for the layout and icons. I didn't bother generating the header or footer with React, however, because it's a static component I use across my entire website.</p>

         <h2>React</h2>
         <p>As I mentioned before, everything besides the header and footer are rendered with ReactJS. I separated the layout between <a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0" target="_blank">presentational and container components</a> in order to separate elements that serve as sources of data versus those that are simply passed data to present.</p>
         <p>This also served as a great introduction to <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla" target="_blank">ES6</a>. My components included:</p>
         <ul>
            <li><a href="https://github.com/ajarana/arcade/blob/master/src/containers/Filter.js" target="_blank"><strong>Filter</strong></a> (container component)</li>
            <li><a href="https://github.com/ajarana/arcade/blob/master/src/components/Picker.js" target="_blank"><strong>Picker</strong></a> (presentational component)</li>
            <li><a href="https://github.com/ajarana/arcade/blob/master/src/components/ProgressBar.js" target="_blank"><strong>Progress Bar</strong></a> (presentational component)</li>
            <li><a href="https://github.com/ajarana/arcade/blob/master/src/components/Refresh.js" target="_blank"><strong>Refresh</strong></a> (presentational component)</li>
            <li><a href="https://github.com/ajarana/arcade/blob/master/src/components/Sources.js" target="_blank"><strong>Sources</strong></a> (presentational component)</li>
         </ul>
         <h2>Redux</h2>
         <p><a href="http://redux.js.org/docs/basics/DataFlow.html" target="_blank">Redux</a> was used for state management; it was really annoying to have to pass data through a bunch of componenets just so the last one in the chain could have access to some data. Redux stores the entire state of the application in one object so that you can access it at any given point in time.</p>
         <p>In my project, Ajax calls are made via the Fetch API depending on the currently selected category. The returned data is stored in one object. Components like Progress Bar can then directly access the data to give an accurate representation of how much data has been downloaded at any given point in time through the Ajax calls.</p>
         <p>Another presentational component, Picker, also receives data from my Filter container component in order to change its styling according to the selected category.</p>
         <h2>CSS3</h2>
         <p>The styling was very straightforward for this project. The trickiest part was making sure components were rendered with the <a href="https://github.com/ajarana/arcade/blob/master/src/components/Picker.js#L9" target="_blank">correct CSS class</a>.</p>
         <p>CSS3 transitions work wonderfully even when React has to re-render a component.</p>
         <h2>Conclusions</h2>
         <p>I really enjoyed getting to know the basics of React and Redux here. Although I used the JSX preprocessor for React, I was also able to use vanilla JS directly alongside it and continue learning its nuances.</p>
         <h2>Credits</h2>
         <p><a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0" target="_blank">Presentational and Container Components</a></p>
         <p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla" target="_blank">ECMAScript 2015 support in Mozilla</a></p>
         <p><a href="http://redux.js.org/docs/basics/DataFlow.html" target="_blank">Data Flow</a></p>
         <div className="blogDates">
            <p className="spacedOut lightGray"><i>Posted on July 21, 2017</i></p>
            <p className="spacedOut lightGray"><i>Last edited on July 23, 2017</i></p>
         </div>
     </section>
  </main>
    )
  }
}

export default NewsFeedDevelopment