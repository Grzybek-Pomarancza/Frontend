import React, { Component } from "react";
import Welcome from "../Components/Welcome";
import '../Styles/welcomeStyle.css'

class WelcomeView extends Component {
    render() {
        return (
            <div className="welcome-wrapper">
                <Welcome/>
            </div>
        );
    }
}

export default WelcomeView;
