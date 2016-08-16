import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import DISPLAY from '../styles/styles';


const Home = React.createClass({

  render(){
    return(
      <div style={DISPLAY.main.searchContainer}>
        <SearchContainer
          updateMap={this.updateMap}
          updateCity={this.updateCity}
          updateLive={this.updateLive}
          updateMax={this.updateMax}
          updateQuery={this.updateQuery}
          updateRadius={this.updateRadius}
          showVideo={this.showVideo}
          handleSubmit={this.handleSubmit} />
      </div>
    )
  }
})

export default Home;
