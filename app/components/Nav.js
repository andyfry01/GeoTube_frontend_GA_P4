import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap'
import DISPLAY from '../styles/styles';

const Nav = React.createClass({
  render: function() {
    return  (
      <div style={DISPLAY.nav}>
        <Link to="/"> <Button bsStyle={DISPLAY.main.button.bsStyle} style={DISPLAY.main.button}> Home </Button> </Link>
        <Link to="About"> <Button bsStyle={DISPLAY.main.button.bsStyle} style={DISPLAY.main.button}> About </Button> </Link>
        <Link to="Favorites"> <Button bsStyle={DISPLAY.main.button.bsStyle} style={DISPLAY.main.button}> Favorites </Button> </Link>
      </div>

    )
  }
})

export default Nav;
