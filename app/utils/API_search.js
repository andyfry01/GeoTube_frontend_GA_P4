import ajaxHelpers from './ajaxHelpers'


/*  REFACTORING PROBLEMS: this function changes the state of SearchContainer in a lot of places
    Beforehand we had tried to save the return of the search function in a variable, and in turn
    updated the state of SearchContainer with said variable, but there are a lot of instances where
    state is changed, so saving that in a single variable and updating multiple pieces of state seems
    problematic.

    Seems like this would be a good case for Redux maybe? Who knows
 */
const API_SEARCH = {
  search: function(searchData){

    const userInput = {
      city: searchData.city,
      searchQuery: searchData.searchQuery,
      live: searchData.live,
      maxResults: searchData.maxResults,
      searchRadius: searchData.searchRadius,
    };

    if (!userInput.city){

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
      }).bind(this)
    }
  }
}

export default API_SEARCH;
