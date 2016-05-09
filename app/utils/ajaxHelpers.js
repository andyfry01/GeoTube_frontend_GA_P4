import axios from 'axios';

const helpers = {
  getFavorites: function(){
    return axios.get('http://localhost:3000/videos.json');
  },
  getCoordinates: function(city){
    return axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + city + '&key=' + process.env.GEOTUBE_API_KEY);
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
    var searchQuery = "https://www.googleapis.com/youtube/v3/search?part=snippet" + coords + radius + live + query + maxResults + '&order=viewCount&type=video&key=' + process.env.GEOTUBE_API_KEY;
    return axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet' + coords + radius + live + query + maxResults + '&order=viewCount&type=video&key=' + process.env.GEOTUBE_API_KEY);
  },
  addVideo: function(videoId, title) {
    return axios.post('http://floating-reef-82228.herokuapp.com/videos?videoId=' + videoId + '&title=' + title)
    .then(function(response){
      console.log('response from DB when posting video:', response);
    })
  },
  deleteVideo: function(id) {
    return axios.delete('http://floating-reef-82228.herokuapp.com/videos/:' + id)
    .then(function(response){
      console.log("deleting video: ", response);
    })
  }

}

export default helpers;
