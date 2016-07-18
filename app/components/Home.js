import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import axios from 'axios';
import {Link} from 'react-router';
import ajaxHelpers from "../utils/ajaxHelpers";
import display from '../styles/styles';


const Home = React.createClass({

  render(){
    return(
      <div className="home-comp">
        <SearchContainer
          updateMap={this.updateMap}
          updateCity={this.updateCity}
          updateLive={this.updateLive}
          updateMax={this.updateMax}
          updateQuery={this.updateQuery}
          updateRadius={this.updateRadius}
          showVideo={this.showVideo}
          handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
})

export default Home;
