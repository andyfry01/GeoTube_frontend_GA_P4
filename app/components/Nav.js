import React from 'react';
import {Link} from 'react-router';
import display from '../styles/styles';
import {Navbar, NavItem} from 'react-materialize';

const Nav = React.createClass({
  render: function() {
    return(
      <Navbar brand='GeoTube' right>
        <NavItem href='about'>About</NavItem>
        <NavItem href='favorites'>Favorites</NavItem>
      </Navbar>

    )
  }
})

export default Nav;
