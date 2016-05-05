import React from 'react';
import display from '../styles/styles';
import styles from '../styles/styles.css';
import ajaxHelpers from '../utils/ajaxHelpers';
import FavoriteVideo from './FavoriteVideo'

const FavoritesComponent = React.createClass({
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
      <div>{this.state.showFavoriteComp ? <FavoriteVideo returnedFavorites={this.state.returnedFavorites} /> : null}</div>
    )
  }
})
export default FavoritesComponent;
