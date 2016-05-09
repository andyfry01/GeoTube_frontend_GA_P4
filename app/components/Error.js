import React from 'react';
import display from '../styles/styles';

const Error = React.createClass({
  render: function(){
    return(
      <div style={display.search.searchHeader}>
        <h4>{this.props.locationError}</h4>
        <h4>{this.props.videoError}</h4>
      </div>
    )
  }
})

export default Error;
