import React from 'react'
import display from '../styles/styles';
import ajaxHelpers from '../utils/ajaxHelpers';


const Video = React.createClass({

  addVideo: function(){
    return ajaxHelpers.addVideo(this.props.videoId, this.props.title)
    .then(function(response){
      console.log(response);
    })
  },

  render: function() {

    return (
      <div style={null}  >
        <div style={null}>
          <h6 style={null}>{this.props.title}</h6>
          <iframe width="720" height="360" src={this.props.url} frameborder="0" allowfullscreen></iframe>
          <br/>
          <button id="favoritebutton" onClick={this.addVideo}>Add to favorites!</button>
        </div>
      </div>
    )
  }
})

export default Video
