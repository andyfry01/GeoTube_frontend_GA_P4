// React
import React from 'react';

// Utils
import ajaxHelpers from '../utils/ajaxHelpers';

// Styling
import DISPLAY from '../styles/styles';

// Components
import FavoriteVideo from '../components/FavoriteVideo'


const FavoritesComponent = React.createClass({
  getInitialState: function() {
    return {
      returnedFavorites: '',
      showFavoriteComp: false
    }
  },
  componentDidMount: function(){
    var that = this;
    return ajaxHelpers.getFavorites()
    .then(function(response){
      that.setState({
        returnedFavorites : response,
        showFavoriteComp : true
      })
    })
  },
  render: function(){
    return (
      <div>
        {this.state.showFavoriteComp ? <FavoriteVideo returnedFavorites={this.state.returnedFavorites} /> : null}
      </div>
    )
  }
})
export default FavoritesComponent;
