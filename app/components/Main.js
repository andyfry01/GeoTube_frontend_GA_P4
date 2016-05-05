import React from 'react';
import ReactDOM from 'react-dom';
import NavContainer from '../containers/NavContainer';
import Style from  '../styles/styles.css';


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
