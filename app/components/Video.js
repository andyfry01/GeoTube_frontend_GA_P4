import React from 'react'
import styles from '../styles/styles.css';

const Video = React.createClass({

  addVideo: function(){
    console.log("HI!");
  },

  render: function() {

    return (
      <div style={display.videos.rightDiv} >
        <div style={display.videos.eachVideoElement}>
          <h4 style={display.videos.titleInfo}>{obj.title}</h4>
          <iframe width="560" height="280" src={url} frameborder="0" allowfullscreen></iframe>
          <button type="button" onClick={this.addVideo}>Add to favorites</button>
        </div>
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
