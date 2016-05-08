import React from 'react';
import display from '../styles/styles';

const Error = React.createClass({
  render: function(){
    return(
      <div>
        <h2>{this.props.locationError}</h2>
        <h2>{this.props.videoError}</h2>
      </div>
    )
  }
})

export default Error;
