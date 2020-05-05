import React, {Component} from "react";
import {Link} from "react-router-dom";


export default class Welcome extends Component{
    render() {
        return (
            <div className="welcome">
                <h3 >Welcome to Car Rental</h3>
                <Link to={"/sign-in"}>
                    Login
                </Link>

                 <Link to={"/sign-up"}>
                    Sign up
                </Link>
            </div>
        );
    }

}