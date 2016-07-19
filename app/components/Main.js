import React from 'react';
import ReactDOM from 'react-dom';
import NavContainer from '../containers/NavContainer';

const Main = React.createClass({
  render(){
    return(
      <div className="main-comp">
        <NavContainer/>
        {this.props.children}
      </div>
    )
  }
})

export default Main;
