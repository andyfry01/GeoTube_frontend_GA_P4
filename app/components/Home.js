import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import MapComponent from './MapComponent'
import {Link} from 'react-router';

const Home = React.createClass({
  getInitialState: function(){
    return {
      lat: '',
      long: ''
    }
  },

  updateCity: function(lat, long){
    this.setState({
      lat: lat,
      long: long
    })
    console.log("state in home component", this.state);
  },

  render(){
    return(
      <div className="home-comp">
        <MapComponent lat={this.state.lat} long={this.state.long} />
        <SearchContainer updateCity={this.updateCity} />
      </div>
    )
  }
})

export default Home;
