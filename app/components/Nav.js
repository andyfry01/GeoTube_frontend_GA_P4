import React from 'react';
import {Link} from 'react-router';
import DISPLAY from '../styles/styles';

const Nav = React.createClass({
  render: function() {
    return  (
      <div style={DISPLAY.main.nav}>
        <Link to="About">About</Link>
        <Link to="Favorites">Favorites</Link>
      </div>
    )
  }
})

export default Nav;
