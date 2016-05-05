import React from 'react'
import { GoogleMapLoader, GoogleMap } from 'react-google-maps'
import Circle from "../../node_modules/react-google-maps/lib/Circle"

const MapComponent = React.createClass({

  // componentWillReceiveProps: function(){
  //   console.log("props for map component", this);
  //   this.setState({
  //     coords: {lat: this.props.lat, lng: this.props.long},
  //     radius: this.state.radius
  //   })
  // },
  render() {
    return (
      <GoogleMapLoader
        containerElement={
          <div
            style={{
              height: '50vh',
              width: '50vw'
            }}
          />
        }

        googleMapElement={

          <GoogleMap
            defaultZoom={12}
            center={this.props.coords}
          >

          <Circle
            strokeColor={'#000000'}
            strokeOpacity={1}
            strokeWeight={2}
            fillColor={'#000000'}
            fillOpacity={1}
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
