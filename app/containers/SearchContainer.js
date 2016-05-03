import React from "react";
import Search from "../components/Search";
import axios from 'axios';
import ajaxHelpers from "../utils/ajaxHelpers";

const SearchContainer = React.createClass({
  getInitialState: function() {
    return {
      city: '',
      live: false,
      maxResults: 10,
      searchQuery: '',
      searchRadius: '',
    };
  },
  handleMaxResults: function(e){
    this.setState({
      maxResults: e.target.value,
    })
    console.log("maxResults is: ", this.state.maxResults);
  },
  handleLive: function(e){
    this.setState({
      live:e.target.value,
    })
    console.log("live is: ", this.state.live);
  },
  handleCity: function(e){
    console.log("e is: ", e);
    this.setState({
      city: e.target.value,
    })
    console.log("city is: ", this.state.city);
  },
  handleQuery: function(e){
    this.setState({
      searchQuery: e.target.value,
    })
    console.log("query is: ", this.state.searchQuery);
  },
  handleRadius: function(e){
    this.setState({
      searchRadius: e.target.value + 'm',
    })
    console.log("radius is ", this.state.searchRadius);
  },
  handleSubmit: function(e){
    const userInput = {
      city: this.state.city,
      searchQuery: this.state.searchQuery,
      live: this.state.live,
      maxResults: this.state.maxResults,
      searchRadius: this.state.searchRadius,
    };
    console.log("userInput: ", userInput);
    ajaxHelpers.getCoordinates(userInput.city)
    .then(function(response){
      var cityLat = response.data.results[0].geometry.location.lat;
      var cityLong = response.data.results[0].geometry.location.lng;

      // response.data.results[0].geometry.location.lat or .lng
      console.log("response:", response);
      console.log("lat and long are: ", cityLat,cityLong);
    })
  },
  render: function(){
    return(
      <Search
        onChangeCity={this.handleCity}
        onChangeQuery={this.handleQuery}
        onChangeLive={this.handleLive}
        onChangeMaxResults={this.handleMaxResults}
        onChangeRadius={this.handleRadius}
        onSubmit={this.handleSubmit}
      />
    )
  }
})

export default SearchContainer;
