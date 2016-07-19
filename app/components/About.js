import React from 'react';
import display from '../styles/styles';

const About = React.createClass({
  render: function() {
    return(
      <div id="contentContainer" style={null}>

        <div id="leftCol" style={null}>
        </div>
        <div id="centerCol" style={null}>


          <div id="topInfo" style={null}>
            <div id="seanInfo" style={null}>
              <p style={null}> is an ultimate frisbee playing, ex math-teachering, ice cream loving guy.  He graduated from the University of Delaware with a degree in Mathematics/Education and is currently doing nothing related to that: web development. On the weekends you can find him trying to relearn how to ride a unicycle, playing the new hotness 'Spikeball,' or logging an ungodly amount of time playing Fallout 4.</p>
            </div>
          </div>

          <div id="bottomInfo" style={null}>
            <div id="andyInfo" style={null}>
              <p style={null}>  is a bike riding, guitar playing, outdoors exploring guy. He graduated from Ithaca College with a B.A. in English and German, which led him to Hamburg, Germany as a Fulbright English Teaching Assistant and gave him a lifelong love for travel and new experiences. When he's not coding apps you can find him daydreaming up his next adventure!</p>
            </div>
          </div>

        </div>

        <div id="rightCol" style={null}>
        </div>
      </div>
    )
  }
})

export default About;

//background size cover background position like center, top center, set background image to left col
