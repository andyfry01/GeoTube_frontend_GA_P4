import React from 'react';
import display from '../styles/styles';
import styles from '../styles/styles.css';
import ajaxHelpers from '../utils/ajaxHelpers';
// import Favorites from './Favorites';

const Favorites = React.createClass({
  getInitialState: function() {
    return{
      returnedFavorites: '',
      showFavoriteComp: false
    }
  },
  componentDidMount: function(){
    var that = this;
    return ajaxHelpers.getFavorites()
    .then(function(response){
      console.log("response is:", response);
      console.log("that is: ", that);
      that.setState({
        returnedFavorites : response,
        showFavoriteComp : true
      })
      let favorite = returnedFavorites.data.videos.map((obj) => {
        console.log("in favorite map fxn");
        let url = "https://www.youtube.com/embed/" + obj.videoId;
        return (
          <Favorite
            url = {url}
            videoId ={obj.videoId}
            title = {obj.title}
            />
        )
      })
    })
  },
  render: function(){
    return (
      <div>{this.state.showFavoriteComp ? {favorite} : null}</div>
    )
  }
})
export default Favorites;

// let test = returnedFavorites.data.videos.map((obj) => {
//   return(
//     <p>{obj.videoId}</p>
//   )
// })

// that.setState({
//   returnedFavorites: response
// })
