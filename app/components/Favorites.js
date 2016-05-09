import React from 'react';
import ajaxHelpers from '../utils/ajaxHelpers';
import display from '../styles/styles';
import {Button} from 'react-materialize';



const Favorites = React.createClass({
  deleteVideo: function(){
    return ajaxHelpers.deleteVideo(this.props.id)
    .then(function(response){
      console.log(response);
    })
  },
  render: function() {
    return (
      <div>
        <div className="individual-video">
          <iframe width="460" height="230" src={this.props.url} frameborder="0" allowfullscreen></iframe>
          <Button id="removeButton" waves='light' onClick={this.deleteVideo}>Remove from favorites!</Button>
        </div>
      </div>
    )
  }
})

export default Favorites;
