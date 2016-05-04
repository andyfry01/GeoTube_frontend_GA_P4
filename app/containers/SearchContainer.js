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
    // this.setState({
    //   maxResults: e.target.value,
    // })
    // console.log("maxResults is: ", this.state.maxResults);
  },
  handleLive: function(e){
    this.props.updateLive(e.target.value)
    // this.setState({
    //   live:e.target.value,
    // })
    // console.log("live is: ", this.state.live);
  },
  handleCity: function(e){
    // console.log("e is: ", e);
    this.props.updateCity(e.target.value)
    // this.setState({
    //   city: e.target.value,
    // })
    // console.log("city is: ", this.state.city);
  },
  handleQuery: function(e){
    this.props.updateQuery(e.target.value)
    // this.setState({
    //   searchQuery: e.target.value,
    // })
    // console.log("query is: ", this.state.searchQuery);
  },
  handleRadius: function(e){
    this.props.updateRadius(e.target.value)
    // this.setState({
    //   searchRadius: e.target.value + 'mi',
    // })
    // console.log("radius is ", this.state.searchRadius);
  },
  showVideo: function(){
    this.props.showVideo()
    // this.setState({ showVideoComp : true})
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
