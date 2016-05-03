import axios from 'axios';
const helpers = {
  getCoordinates: function(city){
    return axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + city + '&key=' + API_KEY);
  }
}

export default helpers;
// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
