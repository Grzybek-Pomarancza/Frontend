import { Link, Redirect } from "react-router-dom";
import React, { Component } from "react";

export default class Topbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <Link class="navbar-brand" to={"/welcome"}>
            <img src="http://placehold.it/150x50?text=Logo" alt="" />
          </Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-in"}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-up"}>
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
