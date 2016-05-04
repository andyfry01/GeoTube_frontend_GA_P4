import React from 'react'

const Video = React.createClass({

  componentDidMount: function(){
    console.log("vid component mounted, props:", this.props);
  },
  render: function() {

    return (
      <div>
        <h4>{this.props.title}</h4>
        <h4>{this.props.videoId}</h4>
      </div>
    )
  }
})

export default Video

// style reference
//      <div style={display.videos.rightDiv} >
//        <div style={display.videos.eachVideoElement}>
//          <h4 style={display.videos.titleInfo}>{obj.title}</h4>

// iframe and button
// <iframe width="560" height="280" src={url} frameborder="0" allowfullscreen></iframe>
// <button type="button" onClick={()=>{console.log('hello')}}>Add to favorites</button>
