// React
import React from 'react';

// Utils
import ajaxHelpers from '../utils/ajaxHelpers';

// Styling
import DISPLAY from '../styles/styles';
import { Button } from 'react-bootstrap'

const Favorites = React.createClass({
  deleteVideo: function(){
    return ajaxHelpers.deleteVideo(this.props.id)
    .then(function(response){
      console.log(response);
    })
  },
  render: function() {
    return (
        <div style={DISPLAY.favorites.videoDiv}>
          <div style={DISPLAY.favorites.iFrameDiv}>
            <iframe width="100%" height="100%" src={this.props.url} frameBorder="0" allowFullScreen></iframe>
          </div>

          <Button id="removeButton" bsStyle={DISPLAY.main.button.bsStyle} style={DISPLAY.favorites.button} onClick={this.deleteVideo}>Remove from favorites</Button>
        </div>
    )
  }
})

export default Favorites;
