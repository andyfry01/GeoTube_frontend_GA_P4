import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import {Link} from 'react-router';

const Home = React.createClass({
  render(){
    return(
      <div className="home-comp">
        <SearchContainer />
      </div>
    )
  }
})

export default Home;
