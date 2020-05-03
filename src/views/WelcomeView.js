import React, { Component } from "react";
import Topbar from "../Components/Topbar";
import Welcome from "../Components/Welcome";

class WelcomeView extends Component {
    render() {
        return (
            <div className="welcome-wrapper">
                <Topbar />
                <Welcome/>
            </div>
        );
    }
}

export default WelcomeView;
