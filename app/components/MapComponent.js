// The basics
import React from 'react'

// Components
import { GoogleMapLoader, GoogleMap } from 'react-google-maps'
import Circle from "../../node_modules/react-google-maps/lib/Circle"

// Styling
import display from '../styles/styles.js'

const MapComponent = React.createClass({

  render() {
    return (

      <GoogleMapLoader
        containerElement={
          <div
            style={this.props.style}
          />
        }

        googleMapElement={

          <GoogleMap
            zoom={this.props.zoom}
            center={this.props.coords}
          >

          <Circle
            strokeColor={'#FF0000'}
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor={'#FF0000'}
            fillOpacity={0.35}
            center={this.props.coords}
            radius={this.props.radius}
          ></Circle>

          </GoogleMap>
        }
      />
    )
  }
})

export default MapComponent
