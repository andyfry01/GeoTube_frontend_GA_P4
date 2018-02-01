// The basics
import React from 'react'
import ajaxHelpers from '../utils/ajaxHelpers';

// Stylings
import { Row, Col, Button } from 'react-bootstrap'
import DISPLAY from '../styles/styles';

const Video = React.createClass({

  addVideo: function(){
    return ajaxHelpers.addVideo(this.props.videoId, this.props.title)
    .then(function(response){
      console.log(response);
    })
  },

  render: function() {

    return (
      <div>
        <Row>
          <Col className='text-center' xs={DISPLAY.main.video.videoTitle.xs}>
            <h1 style={DISPLAY.main.video.videoTitle}>{this.props.title}</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={DISPLAY.main.video.videoCol.xs} style={DISPLAY.main.video.videoCol}>
            <iframe height='100%' width='100%' src={this.props.url} frameBorder="0" allowFullScreen></iframe>
          </Col>
        </Row>
        // <Row>
        //   <Col className='text-center' xs={DISPLAY.main.video.videoCol.xs}>
        //     <Button bsStyle={DISPLAY.main.button.bsStyle} style={DISPLAY.main.button} xs={DISPLAY.main.video.videoCol.xs} onClick={this.addVideo}>Add to favorites!</Button>
        //   </Col>
        // </Row>
      </div>
    )
  }
})

export default Video
