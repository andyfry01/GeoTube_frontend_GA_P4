import React from "react";
import Search from "../components/Search";

const SearchContainer = React.createClass({
  getInitialState: function() {
    return {
      city: '',
      live: false,
      maxResults: 10,
      searchQuery: ''
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
  render: function(){
    return(
      <Search
        onChangeCity={this.handleCity}
        onChangeQuery={this.handleQuery}
        onChangeLive={this.handleLive}
        onChangeMaxResults={this.handleMaxResults}
      />
    )
  }
})

export default SearchContainer;
