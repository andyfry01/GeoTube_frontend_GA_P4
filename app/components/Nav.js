import React from 'react';
import {Link} from 'react-router';
import display from '../styles/styles';

const Nav = React.createClass({
  render: function() {
    return(
      <div style={display.header} className="headerBar">
        <ul style={display.logo} style={display.nav}>
          <Link to='/'>
            <li className="navBarEl">GeoTube</li>
          </Link>
          <li className="navBarEl">About</li>
          <li className="navBarEl">Hearted Vids</li>
        </ul>
      </div>
    )
  }
})

export default Nav;
