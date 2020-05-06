import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
const mapStyle = {
  position: "absolute",
  width: "80%",
  height: "80%",
};
export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        stype={mapStyle}
        initialCenter={{
          lat: 50.0614,
          lng: 19.9383,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyALdt5oZq-BH6htxo9Uv7GsMhc5Sq9gfpI",
})(MapContainer);
