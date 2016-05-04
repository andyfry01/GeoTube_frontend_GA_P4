import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import MapComponent from './MapComponent';
import axios from 'axios';
import {Link} from 'react-router';
import ajaxHelpers from "../utils/ajaxHelpers";
import Videos from './Videos'


const Home = React.createClass({

  getInitialState: function(){
    return {
      city: '',
      live: false,
      maxResults: 5,
      searchQuery: '',
      searchRadius: '20mi',
      ajaxReturn: '',
      showVideoComp: false,

      lat: 40.7128,
      long: -74.0059,
      radius: 1000
    }
  },

  // updateMap: function(lat, long){
  //   this.setState({
  //     lat: lat,
  //     long: long,
  //     radius: 1000
  //   })
  //   console.log("state in home component", this.state);
  // },
  updateCity: function(cityName){
    this.setState({
      city: cityName
    })
    console.log("updating city in home component?", this.state.city);
  },
  updateLive: function(live) {
    this.setState({
      live: live
    })
  },
  updateMax: function(max) {
    this.setState({
      maxResults: max
    })
  },
  updateQuery: function(query) {
    this.setState({
      searchQuery: query
    })
  },
  updateRadius: function(radius) {
    this.setState({
      searchRadius: radius
    })
  },
  showVideo: function(){
    this.setState({
      showVideoComp: true
    })
  },
  handleSubmit: function(e){
    const userInput = {
      city: this.state.city,
      searchQuery: this.state.searchQuery,
      live: this.state.live,
      maxResults: this.state.maxResults,
      searchRadius: this.state.searchRadius,
    };
    if(!userInput.city){
      alert("userInput", userInput)
      // alert("Please enter in a city!");
    } else {
      console.log("userInput: ", userInput);

      var that = this;

      ajaxHelpers.getCoordinates(userInput.city)
      .then(function(response){
        var cityLat = response.data.results[0].geometry.location.lat;
        var cityLong = response.data.results[0].geometry.location.lng;

        ajaxHelpers.getVideos(cityLat, cityLong, userInput.searchRadius, userInput.maxResults,userInput.live,userInput.searchQuery)
        .then(function(response){
          console.log("youtube respone: ", response.data.items);
          that.setState({
            ajaxReturn : response.data.items
          })
          console.log("ajaxReturn hereee: ", that.state.ajaxReturn);
          that.setState({showVideoComp : true});
          that.setState({
            lat: cityLat,
            long: cityLong
          })
        })
      })
    }
  },
  //Video should go in the return for home
  render(){
    return(
      <div className="home-comp">
        <MapComponent lat={this.state.lat} long={this.state.long} radius={this.state.radius} />
        <SearchContainer updateMap={this.updateMap} updateCity={this.updateCity} updateLive={this.updateLive} updateMax={this.updateMax} updateQuery={this.updateQuery} updateRadius={this.updateRadius} showVideo={this.showVideo} handleSubmit={this.handleSubmit}/>
        { this.state.showVideoComp ? <Videos ajaxReturn={this.state.ajaxReturn}/> : null}

      </div>
    )
  }
})

export default Home;
