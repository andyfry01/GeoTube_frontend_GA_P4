import React from 'react'

const Video = React.createClass({
  getInitialState: function(){
    return {

    }
  }
  const Style = {
    height: "50vh",
    width: "100vw",
  }
  render: function(){
    console.log("in vid comp and props are", this.props);
    <div style={display.videos.rightDiv} >
      <div style={display.videos.eachVideoElement}>
        <h4 style={display.videos.titleInfo}>{obj.title}</h4>
        <iframe width="560" height="280" src={url} frameborder="0" allowfullscreen></iframe>
        <button type="button" onClick={this.addVideo(obj.videoId, obj.title)}>Add to favorites</button>
      </div>
  }
})

export default Video
