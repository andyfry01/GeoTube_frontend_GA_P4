import React from 'react';
import ReactDOM from 'react-dom';

const Main = React.createClass({
  render(){
    return(
      <div className="main-comp">
        <h2>Header in main</h2>
        {this.props.children}
      </div>
    )
  }
})

export default Main;
