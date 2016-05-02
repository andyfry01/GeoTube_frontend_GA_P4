import React from 'react';
import Search from './Search';
import {Link} from 'react-router';

const Home = React.createClass({
  render(){
    return(
      <div className="home-comp">
        <Search />
      </div>
    )
  }
})

export default Home;
