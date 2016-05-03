import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import MapComponent from './MapComponent'
import {Link} from 'react-router';

const Home = React.createClass({
  render(){
    return(
      <div className="home-comp">
        <MapComponent />
        <SearchContainer />
      </div>
    )
  }
})

export default Home;
