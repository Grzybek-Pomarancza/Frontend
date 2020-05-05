import { Link, Redirect } from "react-router-dom";
import React, { Component } from "react";

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
                    <Link class="navbar-brand" to={"/home"}>
                        <img src="http://placehold.it/150x50?text=Logo" alt="" />
                    </Link>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" onClick={this.logout}>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
