import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import display from '../styles/styles';
import styles from '../styles/styles.css';
import ScrollArea from 'react-scrollbar';
import ajaxHelpers from '../utils/ajaxHelpers'
import Video from './Video'

const Videos = React.createClass({
  render: function(){
    if (this.props.ajaxReturn.length > 0) {
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
    }
    else {
      return (
        <h1>Sorry, no videos were found with the specified search terms.</h1>
      )
    }
    return (
      <ScrollArea
        smoothScrolling={true}
        minScrollSize={40}
        >
        {video}
      </ScrollArea>
    )
  }
})

export default Videos;
