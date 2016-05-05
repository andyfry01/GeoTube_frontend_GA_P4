import React from "react";
import Search from "../components/Search";
import axios from 'axios';
import ajaxHelpers from "../utils/ajaxHelpers";
import display from '../styles/styles';
import {Input, Row, Button} from 'react-materialize';
import MapComponent from '../components/MapComponent'

const SearchContainer = React.createClass({
  getInitialState: function() {
    return {
      city: '',
      live: false,
      maxResults: 5,
      searchQuery: '',
      searchRadius: '20mi',
      ajaxReturn: '',
      showVideoComp: false,
      coords: {lat: 40.7128, lng: -74.0059},
      lat: 40.7128,
      long: -74.0059,
      radius: 1000
    };
  },
  handleMaxResults: function(e){
    this.setState({
      maxResults: e.target.value
    })
  },
  handleLive: function(e){
    this.setState({
      live: e.target.value
    })
  },
  handleCity: function(e){
    this.setState({
      city: e.target.value
    })
  },
  handleQuery: function(e){
    this.setState({
      searchQuery: e.target.value
    })
  },
  handleRadius: function(e){
    this.setState({
      searchRadius: e.target.value + "mi"
    })
  },
  showVideo: function(){
    this.setState({
      showVideoComp: true
    })
  },
  sendCoords: function(lat, long){
    console.log("sendCoords function firing");
    this.props.updateMap(lat, long)
  },

  handleSubmit: function(){

    const userInput = {
      city: this.state.city,
      searchQuery: this.state.searchQuery,
      live: this.state.live,
      maxResults: this.state.maxResults,
      searchRadius: this.state.searchRadius,
    };
    console.log("user input is", userInput);
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
        that.setState({
          coords: {lat: cityLat, lng: cityLong}
        })
        ajaxHelpers.getVideos(cityLat, cityLong, userInput.searchRadius, userInput.maxResults,userInput.live,userInput.searchQuery)
        .then(function(response){
          console.log("youtube respone: ", response.data.items);
          let videoData = response.data.items.map(function(result){
            return (
              {
                videoId : result.id.videoId,
                title : result.snippet.title
              }
            )
          })
          that.setState({
            ajaxReturn : videoData
          })
          console.log("ajaxReturn here: ", that.state.ajaxReturn);
          that.setState({showVideoComp : true});
        })
      })
    }
  },
  render: function(){
    return(
      <div>
        <div>
          <Search
            onChangeCity={this.handleCity}
            onChangeQuery={this.handleQuery}
            onChangeLive={this.handleLive}
            onChangeMaxResults={this.handleMaxResults}
            onChangeRadius={this.handleRadius}
            onSubmit={this.handleSubmit}
            />
        </div>

        <div style={display.main.parent} id="content-container">

        <MapComponent coords={this.state.coords} radius={this.state.radius} />

        { this.state.showVideoComp ? <VideoComponent ajaxReturn={this.state.ajaxReturn}/> : null}

        </div>
      </div>
    )
  }
})

export default SearchContainer;
