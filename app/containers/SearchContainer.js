import React from "react";
import Search from "../components/Search";
import axios from 'axios';
import ajaxHelpers from "../utils/ajaxHelpers";
import display from '../styles/styles';
import {Input, Row, Button} from 'react-materialize';
import MapComponent from '../components/MapComponent';
import VideoComponent from '../components/VideoComponent';

const SearchContainer = React.createClass({
  getInitialState: function() {
    return {
      city: '',
      live: false,
      maxResults: 5,
      searchQuery: '',
      searchRadius: '5mi',
      ajaxReturn: '',
      showVideoComp: false,
      coords: {lat: 40.7128, lng: -74.0059},
      radius: 8000,
      zoom: 11
    };
  },
  componentDidMount: function() {
    console.log("process.env", process.env.GEOTUBE_API_KEY);
  },
  setZoomLevel: function(radius){
    switch (radius){
      case 8000:
        this.setState({ zoom: 11 })
        break;
      case 16000:
        this.setState({ zoom: 10 })
        break;
      case 40000:
        this.setState({ zoom: 9 })
        break;
      case 80000:
        this.setState({ zoom: 8 })
        break;
      default:
      this.setState({ zoom: 10 })
    }
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
      searchRadius: e.target.value + "mi",
      radius: e.target.value * 1600
    })
    this.setZoomLevel(this.state.radius)
  },
  showVideo: function(){
    this.setState({
      showVideoComp: true
    })
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
    return (
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
          <MapComponent coords={this.state.coords} radius={this.state.radius} zoom={this.state.zoom} />
          { this.state.showVideoComp ? <VideoComponent ajaxReturn={this.state.ajaxReturn} /> : null}
        </div>
      </div>
    )
  }
})

export default SearchContainer;
