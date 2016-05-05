import React from 'react';
import display from '../styles/styles';
// <img src="/app/images/seanNewGeoTube.jpg"/>

const About = React.createClass({
  render: function() {
    return(
      <div id="contentContainer" style={display.about.contentContainer}>

        <div id="leftCol" style={display.about.leftCol}>
        </div>
        <div id="centerCol" style={display.about.centerCol}>


          <div id="topInfo" style={display.about.topInfo}>
            <div id="seanInfo" style={display.about.infoPar}>
              <p style={display.about.p}>Sean is an ultimate frisbee playing, ex math-teachering, ice cream loving guy.  He graduated from the University of Delaware with a degree in Mathematics/Education and is currently doing nothing related to that: web development. On the weekends you can find him trying to relearn how to ride a unicycle, playing the new hotness 'Spikeball,' or logging an ungodly amount of time playing Fallout 4.</p>
            </div>
          </div>

          <div id="bottomInfo" style={display.about.bottomInfo}>
            <div id="andyInfo" style={display.about.infoPar}>
              <p style={display.about.p}>Andy is an acapella rocking, bike riding, new restaraunt exploring dude.  He graduated from Ithaca College and is currently making sweet new apps with his fancy developer skills.</p>
            </div>
          </div>

        </div>

        <div id="rightCol" style={display.about.rightCol}>
        </div>
      </div>
    )
  }
})

export default About;

//background size cover background position like center, top center, set background image to left col
