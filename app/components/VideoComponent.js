import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import display from '../styles/styles';
import { Scrollbars } from 'react-custom-scrollbars';
import { Row, Col } from 'react-bootstrap';


import ajaxHelpers from '../utils/ajaxHelpers'
import Video from './Video'

const Videos = React.createClass({

  render: function(){
    let video = this.props.ajaxReturn.map((obj) => {
      let url = "https://www.youtube.com/embed/" + obj.videoId;

      return (
        <div>
          <Video
            key={obj.title}
            url={url}
            videoId={obj.videoId}
            title={obj.title}
            />
        </div>
      )
    })

    return (
      <div>
        <Row>
          <Col sm={6}>
            {video}
          </Col>
        </Row>
      </div>

    )
  }
})

export default Videos;
