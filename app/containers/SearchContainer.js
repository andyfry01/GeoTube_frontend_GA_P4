// React + AJAX
import React from "react";
import axios from 'axios';
import ajaxHelpers from "../utils/ajaxHelpers";

// Styling, styling components, and media query components
import display from '../styles/styles';
// import { Something } from 'react-bootstrap';
import { Row, Col, Tabs, Tab } from 'react-bootstrap'

// Components
import Search from "../components/Search";
import MapComponent from '../components/MapComponent';
import VideoComponent from '../components/VideoComponent';
import Error from '../components/Error';

const SearchContainer = React.createClass({

  // Sets initial state for search info to NYC, sets map defaults, and also sets showVideoComp to false until there are videos to display
  getInitialState: function() {
    return {
      city: 'New York',
      live: false,
      maxResults: 5,
      searchQuery: '',
      searchRadius: '5mi',
      ajaxReturn: '',

      coords: {lat: 40.7128, lng: -74.0059},
      radius: 8000,
      zoom: 11,

      locationError: "",
      videoError: "",
      showError: false,
      showVideoComp: false
    };
  },

  // Sets zoom level for map depending on search radius size (case statements are in meters, get passed into google maps)
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

  // Runs initial search to return results for NYC when page loads
  componentDidMount: function(){
    this.handleSubmit()
  },

  // Event handlers for search inputs
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

  // Shows the video component containing the video results if there are results to show, otherwise null is returned (see render fxn)
  showVideo: function(){
    this.setState({
      showVideoComp: true
    })
  },

  // Passes search info to YouTube API to generate list of results
  handleSubmit: function(){

    const userInput = {
      city: this.state.city,
      searchQuery: this.state.searchQuery,
      live: this.state.live,
      maxResults: this.state.maxResults,
      searchRadius: this.state.searchRadius,
    };
    // What was this for I wonder....
    if(!userInput.city) {
    } else {

      var that = this;

      ajaxHelpers.getCoordinates(userInput.city)
      .then(function(response){
        if(response.data.status === "ZERO_RESULTS"){
          console.log("no results");
          that.setState({
            locationError : 'Sorry, not a valid location.  Please try a new search!',
          })
          that.setState({ showError : true })
        }
        if (response.data.status == "OK") {
          that.setState({ locationError: "" })
          that.setState({ showError : false })
          console.log(response.data.results);
          var cityLat = response.data.results[0].geometry.location.lat;
          var cityLong = response.data.results[0].geometry.location.lng;
          that.setState({
            coords: {lat: cityLat, lng: cityLong}
          })
          ajaxHelpers.getVideos(cityLat, cityLong, userInput.searchRadius, userInput.maxResults,userInput.live,userInput.searchQuery)
          .then(function(response){
            if (response.data.items.length < 1) {
              that.setState({ videoError : 'Sorry, no results were returned for your search query.' })
              that.setState({ showError : true })
            }
            if (response.data.items.length > 1) {
              that.setState({ videoError: "" })
              that.setState({ showError: false })
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
              that.setState({ showVideoComp : true });
            }
          })
        }
      })
    }
  },

  // Renders components depending on media queries.
  render: function(){
    return (
      <div>
        { this.state.showError ? <Error locationError={this.state.locationError} videoError={this.state.videoError} /> : null }

        <Tabs id="page-options">
          <Tab eventKey={1} title="Search">
            <Search
              onChangeCity={this.handleCity}
              onChangeQuery={this.handleQuery}
              onChangeLive={this.handleLive}
              onChangeMaxResults={this.handleMaxResults}
              onChangeRadius={this.handleRadius}
              onSubmit={this.handleSubmit}
              />
          </Tab>
          <Tab eventKey={2} title="View Map">

            <MapComponent coords={this.state.coords} radius={this.state.radius} zoom={this.state.zoom} />

          </Tab>
          <Tab eventKey={3} title="Browse Videos">

            { this.state.showVideoComp ? <VideoComponent ajaxReturn={this.state.ajaxReturn} /> : null }

          </Tab>
        </Tabs>

      </div>


      // Case two: desktop screen
      // Fill in code here.
    )
  }
})

export default SearchContainer;
