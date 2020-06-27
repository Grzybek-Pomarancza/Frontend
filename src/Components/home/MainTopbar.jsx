import { Link, Redirect } from "react-router-dom";
import React, { Component } from "react";
import "../../Styles/homeStyle.css";

export default class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logout: false,
    };
    this.logout = this.logout.bind(this);
  }
  logout() {
    this.props.logout();
    this.setState({
      logout: true,
    });
  }
  render() {
    if (this.state.logout) {
      return <Redirect to="/sign-in" />;
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <Link class="navbar-brand" to={"/home"} >
            Car Rental
          </Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={this.props.reset}
                to={"/home/car-map"}
              >
                <img src="https://image.flaticon.com/icons/svg/484/484167.svg"/>
                Car Salons
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={this.props.reset}
                to={"/home/rent-a-car"}
              >
                <img src="https://image.flaticon.com/icons/svg/2087/2087658.svg"/>
                Rent Car
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={this.logout}>
                <img src="https://image.flaticon.com/icons/svg/660/660350.svg"/>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
