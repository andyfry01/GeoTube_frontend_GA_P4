import React from "react";
import Search from "../components/Search";

const SearchContainer = React.createClass({
  getInitialState: function() {
    return {
      city:"",
      live: false,
      maxResults: 10,
      searchQuery:""
    }
  }
})
