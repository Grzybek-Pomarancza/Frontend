import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import { Redirect } from "react-router-dom";
const mapStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
};
let CONFIG = require("../../services/config.json");
export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
    markers: [
      { id: "Mickiewicza", lat: 50.0614, lng: 19.9383, name: "Salon X" },
      { id: "Dietla", lat: 50.0714, lng: 19.9383, name: "Salon Y" },
    ],
    redirect: false,
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.selectedPlace.id);
    this.props.goToSalon(this.state.selectedPlace.id);
    this.setState({
      redirect: true,
    });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/home/rent-a-car" />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <Map
          google={this.props.google}
          zoom={15}
          stype={mapStyle}
          initialCenter={{
            lat: 50.0614,
            lng: 19.9383,
          }}
        >
          {this.state.markers.map((marker) => {
            return (
              <Marker
                key={marker.id}
                id={marker.id}
                onClick={this.onMarkerClick}
                name={marker.name}
                position={{ lat: marker.lat, lng: marker.lng }}
              />
            );
          })}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
              <button onClick={this.handleSubmit} className="btn btn-success">
                Order From Here!
              </button>
            </div>
          </InfoWindow>
        </Map>
      </form>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: CONFIG.apiKey,
})(MapContainer);
