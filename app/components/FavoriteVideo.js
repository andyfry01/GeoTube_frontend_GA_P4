// React
import React from 'react';

// Utils
import ajaxHelpers from '../utils/ajaxHelpers'

// Components
import Favorites from './Favorites'

// Styling
import DISPLAY from '../styles/styles';


const FavoriteVideo = React.createClass({
  render: function(){

    let favorite = this.props.returnedFavorites.data.videos.map((obj) => {
      let url = "https://www.youtube.com/embed/" + obj.videoId;
        return (
          <Favorites
            id ={obj.id}
            url = {url}
            videoId={obj.videoId}
            title = {obj.title}
          />
        )
      })

    return (
      <div style={DISPLAY.favorites.favoritesContainer}>
        {favorite}
      </div>
    )
  }
})

export default FavoriteVideo;
