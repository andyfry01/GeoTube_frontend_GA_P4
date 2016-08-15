import React from 'react';
import { Link } from 'react-router';
import display from '../styles/styles';

const Nav = React.createClass({
  render: function() {
    return  (
      <div>
        <Link to="About">About</Link>
        <Link to="Favorites">Favorites</Link>
      </div>
    )
  }
})

export default Nav;
