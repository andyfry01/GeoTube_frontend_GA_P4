import React from 'react'
import { GoogleMapLoader, GoogleMap } from 'react-google-maps'
import Circle from "../../node_modules/react-google-maps/lib/Circle"

const MapComponent = React.createClass({

  componentWillReceiveProps: function(){
    console.log("props for map component", this);
    this.setState({
      coords: {lat: this.props.lat, lng: this.props.long},
      radius: this.state.radius
    })
    this.displayMap()
  },

  getInitialState: function(){

    return {
      coords: { lat: this.props.lat, lng: this.props.long },
      radius: this.props.radius
    }
  },

  displayMap: function(){
    return(
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
            center={this.state.coords}
          >

          <Circle
            strokeColor={'#000000'}
            strokeOpacity={1}
            strokeWeight={2}
            fillColor={'#000000'}
            fillOpacity={1}
            center={this.state.coords}
            radius={this.state.radius}
          ></Circle>

          </GoogleMap>
        }
      />
    )
  },

  render() {
    return (
      <div>
        { this.displayMap() }
      </div>
    )
  }
})

export default MapComponent
