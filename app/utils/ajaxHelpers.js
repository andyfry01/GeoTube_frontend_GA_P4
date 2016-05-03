import axios from 'axios';
import API_KEY from './API_KEY';

const helpers = {
  getCoordinates: function(city){
    return axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + city + '&key=' + API_KEY);
  },
  getVideos: function(latParam,longParam,radiusParam,maxResultsParam,liveBooleanParam, queryParam){
    var radius = '&locationRadius=' + radiusParam;
    var maxResults = '&maxResults=' + maxResultsParam;

    if(latParam){
      var coords = '&location=' + latParam + ',+' + longParam;
    } else {
      var coords = '';
    }

    if(liveBooleanParam === "true"){
      var live = '&eventType=live';
      console.log("live is: ",live);
    } else {
      var live = '';
    }

    if(queryParam){
      var query = "&q=" + queryParam;
    } else {
      var query = '';
    }
    var searchQuery = "https://www.googleapis.com/youtube/v3/search?part=snippet" + coords + radius + live + query + maxResults + '&order=viewCount&type=video&key=' + API_KEY;
      // console.log("searchQuery is:", searchQuery);
    return axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet' + coords + radius + live + query + maxResults + '&order=viewCount&type=video&key=' + API_KEY)
  }

}

export default helpers;
