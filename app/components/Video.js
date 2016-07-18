import React from 'react'
import display from '../styles/styles';
import ajaxHelpers from '../utils/ajaxHelpers';
import {Button} from 'react-materialize';


const Video = React.createClass({

  addVideo: function(){
    return ajaxHelpers.addVideo(this.props.videoId, this.props.title)
    .then(function(response){
      console.log(response);
    })
  },

  render: function() {

    return (
      <div style={display.videos.rightDiv}  >
        <div style={display.videos.eachVideoElement}>
          <h6 style={display.videos.titleInfo}>{this.props.title}</h6>
          <iframe width="720" height="360" src={this.props.url} frameborder="0" allowfullscreen></iframe>
          <br/>
          <Button id="favoriteButton" onClick={this.addVideo} waves='light'>Add to favorites!</Button>
        </div>
      </div>
    )
  }
})

export default Video
