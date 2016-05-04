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
    this.props.updateMax(e.target.value)
  },
  handleLive: function(e){
    this.props.updateLive(e.target.value)
  },
  handleCity: function(e){
    this.props.updateCity(e.target.value)
  },
  handleQuery: function(e){
    this.props.updateQuery(e.target.value)
  },
  handleRadius: function(e){
    this.props.updateRadius(e.target.value)
  },
  showVideo: function(){
    this.props.showVideo()
  },
  sendCoords: function(lat, long){
    console.log("sendCoords function firing");
    this.props.updateMap(lat, long)
  },
  handleSubmit: function(){
    this.props.handleSubmit()
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
      </div>
    )
  }
})

export default SearchContainer;
