import React from "react";
import Search from "../components/Search";
import Videos from "../components/Videos";
import axios from 'axios';
import ajaxHelpers from "../utils/ajaxHelpers";

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
    };
  },
  handleMaxResults: function(e){
    this.setState({
      maxResults: e.target.value,
    })
    // console.log("maxResults is: ", this.state.maxResults);
  },
  handleLive: function(e){
    this.setState({
      live:e.target.value,
    })
    // console.log("live is: ", this.state.live);
  },
  handleCity: function(e){
    // console.log("e is: ", e);
    this.setState({
      city: e.target.value,
    })
    // console.log("city is: ", this.state.city);
  },
  handleQuery: function(e){
    this.setState({
      searchQuery: e.target.value,
    })
    // console.log("query is: ", this.state.searchQuery);
  },
  handleRadius: function(e){
    this.setState({
      searchRadius: e.target.value + 'mi',
    })
    // console.log("radius is ", this.state.searchRadius);
  },
  showVideo: function(){
    this.setState({ showVideoComp : true})
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
      alert("Please enter in a city!");
    } else {
      console.log("userInput: ", userInput);

      var that = this;
      ajaxHelpers.getCoordinates(userInput.city)
      .then(function(response){
        var cityLat = response.data.results[0].geometry.location.lat;
        var cityLong = response.data.results[0].geometry.location.lng;

        // console.log("response:", response);
        // console.log("lat and long are: ", cityLat,cityLong);
        ajaxHelpers.getVideos(cityLat, cityLong, userInput.searchRadius, userInput.maxResults,userInput.live,userInput.searchQuery)
        .then(function(response){
          console.log("youtube respone: ", response.data.items);
          that.setState({
            ajaxReturn : response.data.items
          })
          console.log("ajaxReturn hereee: ", that.state.ajaxReturn);
          that.setState({showVideoComp : true});
        })
      })
    }
  },
  render: function(){
    return(
      <div>
        <Search
          onChangeCity={this.handleCity}
          onChangeQuery={this.handleQuery}
          onChangeLive={this.handleLive}
          onChangeMaxResults={this.handleMaxResults}
          onChangeRadius={this.handleRadius}
          onSubmit={this.handleSubmit}
          />
        { this.state.showVideoComp ? <Videos ajaxReturn={this.state.ajaxReturn}/> : null}
      </div>
    )
  }
})

export default SearchContainer;
