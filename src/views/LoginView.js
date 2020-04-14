import React, {Component} from "react";
import Topbar from "../Components/Topbar";
import Login from "../Components/Login";

class LoginView extends Component{
    render() {
        return (
            <div>
                <Topbar/>
                <Login/>
            </div>
        )
    }
}

export default LoginView;