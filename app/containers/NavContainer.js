import React from 'react';
import Nav from '../components/Nav';
import { Link } from 'react-router';
import display from '../styles/styles'

const NavContainer = React.createClass({
  render(){
    return(
      <Nav style={display.nav}/>
    )
  }
})

export default NavContainer;
