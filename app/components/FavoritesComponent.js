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
    })
  },
  render: function(){

    return (
      <div>{this.state.showFavoriteComp ? this.state.returnedFavorites.data.videos[0].title : null}</div>
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
