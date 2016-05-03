import React from 'react'
import { GoogleMapLoader, GoogleMap } from 'react-google-maps'
import Circle from "../../node_modules/react-google-maps/lib/Circle"

const MapComponent = React.createClass({

  getInitialState: function(){

    return {
      centerCoords: {lat: 40.7128, lng: -74.0059},
    }
  },

  render() {

    return (

      <GoogleMapLoader
        containerElement={
          <div
            style={{
              height: '50vh',
              width: '100vw'
            }}
          />
        }

        googleMapElement={

          <GoogleMap
            ref={ (map) => console.log(map) }
            defaultZoom={12}
            center={this.state.centerCoords}
          >
          <Circle
            strokeColor={'#000000'}
            strokeOpacity={1}
            strokeWeight={2}
            fillColor={'#000000'}
            fillOpacity={1}
            center={{lat: 40.7128, lng: -74.0059}}
            radius={5000}
          ></Circle>
          </GoogleMap>
        }
      />
    )
  }
})

export default MapComponent
