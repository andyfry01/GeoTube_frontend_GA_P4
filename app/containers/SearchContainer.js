// The basics
import React from "react";
import ajaxHelpers from "../utils/ajaxHelpers";

// Components
import Search from "../components/Search";
import MapComponent from '../components/MapComponent';
import VideoComponent from '../components/VideoComponent';
import Error from '../components/Error';

// Styling
import { Row, Col, Button } from 'react-bootstrap';
import DISPLAY from '../styles/styles';

// Responsive elements
import MediaQuery from 'react-responsive'
import { Link, Element } from 'react-scroll'

const SearchContainer = React.createClass({

  getInitialState: function() {
    return {
      city: 'New York',
      live: false,
      maxResults: 5,
      searchQuery: '',
      searchRadius: '5mi',
      ajaxReturn: '',
      showVideoComp: false,
      coords: {lat: 40.7128, lng: -74.0059},
      radius: 8000,
      zoom: 11,
      locationError: "",
      videoError: "",
      showError: false
    };
  },

  // Sets zoom level for map depending on search radius size
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

  // Event handlers for searchbars
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

    if(!userInput.city){
    } else {


      ajaxHelpers.getCoordinates(userInput.city)
      .then(function(response){
        if(response.data.status === "ZERO_RESULTS"){
          console.log("no results");
          // Displays error message if geoencoding API search doesn't return any results
          this.setState({
            locationError : 'Sorry, not a valid location.  Please try a new search!',
          })
          this.setState({ showError : true })
        }

        // If geoencoding API returns results, reset error message, proceed with
        if (response.data.status == "OK") {
          this.setState({ locationError: "" })
          this.setState({ showError : false })
          console.log(response.data.results);

          // Sets state for search location lat and long for YouTube API search based off of data from geoencoding API
          let cityLat = response.data.results[0].geometry.location.lat;
          let cityLong = response.data.results[0].geometry.location.lng;
          this.setState({
            coords: {lat: cityLat, lng: cityLong}
          })

          // Searches Youtube API for videos based on city coordinates and user-designated search filters
          ajaxHelpers.getVideos(cityLat, cityLong, userInput.searchRadius, userInput.maxResults, userInput.live, userInput.searchQuery)
          .then(function(response){

            // If no items returned for search, display error message
            if (response.data.items.length < 1) {
              this.setState({ videoError : 'Sorry, no results were returned for your search query.' })
              this.setState({ showError : true })
            }

            // If items returned, reset error message, display videos
            if (response.data.items.length > 1) {
              this.setState({ videoError: "" })
              this.setState({ showError: false })
              let videoData = response.data.items.map(function(result){
                return (
                  {
                    videoId : result.id.videoId,
                    title : result.snippet.title
                  }
                )
              })

              // Update video information to be rendered by video component, set videocomponent to display
              // if it isn't displayed already
              this.setState({
                ajaxReturn : videoData
              })
              this.setState({ showVideoComp : true });
            }
          }.bind(this))
        }
      }.bind(this))
    }
  },

  render: function(){
    return (

      <div style={{height: '100%'}}>

          <Row>
            <Element name='search' />
            <Col xs={DISPLAY.main.searchBar.xs} md={DISPLAY.main.searchBar.md}>
              <Search
              onChangeCity={this.handleCity}
              onChangeQuery={this.handleQuery}
              onChangeLive={this.handleLive}
              onChangeMaxResults={this.handleMaxResults}
              onChangeRadius={this.handleRadius}
              onSubmit={this.handleSubmit} />
            </Col>

            <Col className="text-center" style={DISPLAY.main.scrollButton}>
              <MediaQuery query='(max-width: 991px)'>
                <Link to="map" smooth={true} duration={250}>
                  <Button bsStyle={DISPLAY.main.button.bsStyle} style={DISPLAY.main.button}>Scroll to map</Button>
                </Link>
                <Link to='videos' smooth={true} duration={250}>
                  <Button bsStyle={DISPLAY.main.button.bsStyle} style={DISPLAY.main.button}>Scroll to videos</Button>
                </Link>
              </MediaQuery>
            </Col>
          </Row>

          <Row>
            <Col xs={DISPLAY.main.error.xs} md={DISPLAY.main.error.md}>
              { this.state.showError ? <Error locationError={this.state.locationError} videoError={this.state.videoError} /> : null }
            </Col>
          </Row>



          <Row style={{height: '75%'}}>
              <Col xs={DISPLAY.main.contentArea.colStyles.xs} md={DISPLAY.main.contentArea.colStyles.md} style={DISPLAY.main.contentArea}>
                <Element name='map' />
                <MapComponent coords={this.state.coords} radius={this.state.radius} zoom={this.state.zoom} style={DISPLAY.main.map}/>
              </Col>

            <MediaQuery query='(max-width: 991px)'>
              <Col className='text-center' style={DISPLAY.main.scrollButton}>
                <Link to='videos' smooth={true} duration={250}>
                  <Button bsStyle={DISPLAY.main.button.bsStyle} style={DISPLAY.main.button}>Scroll to videos</Button>
                </Link>
                <Link to='search' smooth={true} duration={250}>
                  <Button bsStyle={DISPLAY.main.button.bsStyle} style={DISPLAY.main.button}>Scroll to search</Button>
                </Link>
              </Col>
            </MediaQuery>

            <Col xs={DISPLAY.main.contentArea.colStyles.xs} md={DISPLAY.main.contentArea.colStyles.md} style={DISPLAY.main.contentArea}>
              <Element name='videos' />
              { this.state.showVideoComp ? <VideoComponent ajaxReturn={this.state.ajaxReturn} /> : null }
            </Col>

            <MediaQuery query='(max-width: 991px)'>
              <Col className='text-center' style={DISPLAY.main.scrollButton}>
                <Link to='map' smooth={true} duration={250}>
                  <Button bsStyle={DISPLAY.main.button.bsStyle} style={DISPLAY.main.button}>Scroll to map</Button>
                </Link>
                <Link to='search' smooth={true} duration={250}>
                  <Button bsStyle={DISPLAY.main.button.bsStyle} style={DISPLAY.main.button}>Scroll to search</Button>
                </Link>
              </Col>
            </MediaQuery>
          </Row>



      </div>
    )
  }
})

export default SearchContainer;
