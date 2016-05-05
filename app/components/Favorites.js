import React from 'react'
import display from '../styles/styles';
import ajaxHelpers from '../utils/ajaxHelpers'

const Favorites = React.createClass({
  render: function() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <iframe width="560" height="280" src={this.props.url} frameborder="0" allowfullscreen></iframe>
      </div>
    )
  }
})

export default Favorites;
