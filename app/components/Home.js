import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import MapComponent from './MapComponent'
import {Link} from 'react-router';

const Home = React.createClass({
  getInitialState: function(){
    return {
      lat: 40.7128,
      long: -74.0059,
      radius: 1000
    }
  },

  updateCity: function(lat, long){
    this.setState({
      lat: lat,
      long: long,
      radius: 1000
    })
    console.log("state in home component", this.state);
  },

  render(){
    return(
      <div className="home-comp">
        <MapComponent lat={this.state.lat} long={this.state.long} radius={this.state.radius} />
        <SearchContainer updateCity={this.updateCity} />
      </div>
    )
  }
})

export default Home;
