import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap'
import DISPLAY from '../styles/styles';

const Nav = React.createClass({
  render: function() {
    return  (
      <div style={DISPLAY.nav}>
        <Link to="About"> <Button bsStyle={DISPLAY.nav.button.bsStyle}> About </Button> </Link>
        <Link to="Favorites"> <Button bsStyle={DISPLAY.nav.button.bsStyle}> Favorites </Button> </Link>
      </div>

    )
  }
})

export default Nav;
