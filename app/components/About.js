// The basics
import React from 'react';

// Styling
import DISPLAY from '../styles/styles';
import { Row, Col } from 'react-bootstrap';

const About = React.createClass({
  render: function() {

    return (
      <div>

        <Row>
          <Col xs={3} xsOffset={1}>
            <p style={null}>  GeoTube was my final project at General Assembly, and was built using React, the Google Maps and the YouTube APIs, and a Rails backend. Many YouTube videos have geolocation metadata with the coordinates of where they were filmed, and searching YouTube by coordinates instead of by video title makes it easy to discover interesting videos regionally. GeoTube makes it easy to discover and watch these videos, and visualizes the search area!</p>
          </Col>
        </Row>

        <Row style={DISPLAY.about.centerCol}>
          <Col xs={3} xsOffset={1}>
            <p style={null}>  is a bike riding, guitar playing, outdoors exploring guy. He graduated from Ithaca College with a B.A. in English and German, which led him to Hamburg, Germany as a Fulbright English Teaching Assistant and gave him a lifelong love for travel and new experiences. When he is not coding apps you can find him daydreaming up his next adventure!</p>
          </Col>
        </Row>

        <Row>
          <Col xs={3} xsOffset={1}>
            <p style={null}> is an ultimate frisbee playing, ex math-teachering, ice cream loving guy.  He graduated from the University of Delaware with a degree in Mathematics/Education and is currently doing nothing related to that: web development. On the weekends you can find him trying to relearn how to ride a unicycle, playing the new hotness 'Spikeball,' or logging an ungodly amount of time playing Fallout 4.</p>
          </Col>
        </Row>

      </div>
    )
  }
})

export default About;

//background size cover background position like center, top center, set background image to left col
