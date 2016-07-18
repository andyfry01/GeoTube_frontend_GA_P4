import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import display from '../styles/styles';
import styles from '../styles/styles.css';
import { Scrollbars } from 'react-custom-scrollbars';
import ajaxHelpers from '../utils/ajaxHelpers'
import Video from './Video'

const Videos = React.createClass({

  render: function(){
    let video = this.props.ajaxReturn.map((obj) => {
      let url = "https://www.youtube.com/embed/" + obj.videoId;

      return (
        <Video
          key = {obj.title}
          url = {url}
          videoId={obj.videoId}
          title = {obj.title}
          />
      )
    })

    return (
      <Scrollbars
        >
        {video}
      </Scrollbars>

    )
  }
})

export default Videos;
