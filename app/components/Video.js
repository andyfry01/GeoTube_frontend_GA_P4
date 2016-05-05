import React from 'react'
import display from '../styles/styles';
import ajaxHelpers from '../utils/ajaxHelpers'

const Video = React.createClass({

  addVideo: function(){
    console.log("HI!");
    return ajaxHelpers.addVideo(this.props.videoId, this.props.title)
    .then(function(response){
      console.log(response);
    })
  },

  render: function() {

    return (
      <div style={display.videos.rightDiv} >
        <div style={display.videos.eachVideoElement}>
          <h4 style={display.videos.titleInfo}>{this.props.title}</h4>
          <iframe width="560" height="280" src={this.props.url} frameborder="0" allowfullscreen></iframe>
          <button type="button" onClick={this.addVideo}>Add to favorites</button>
        </div>
      </div>
    )
  }
})

export default Video