import React from 'react';
import display from '../styles/styles';
import styles from '../styles/styles.css';
import ajaxHelpers from '../utils/ajaxHelpers'
import Favorites from './Favorites'

const FavoriteVideo = React.createClass({
  render: function(){

    let favorite = this.props.returnedFavorites.data.videos.map((obj) => {
      let url = "https://www.youtube.com/embed/" + obj.videoId;
        return (
          <Favorites
            url = {url}
            videoId={obj.videoId}
            title = {obj.title}
          />
        )
      })

    return (
      <div>{favorite}</div>
    )
  }
})

export default FavoriteVideo;
