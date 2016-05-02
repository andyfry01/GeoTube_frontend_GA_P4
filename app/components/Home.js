import React from 'react';
import App from './App';
import {Link} from 'react-router';

const Home = React.createClass({
  render(){
    return(
      <div className="home-comp">
        <App />
      </div>
    )
  }
})

export default Home;
