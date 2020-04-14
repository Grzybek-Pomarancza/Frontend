import React from "react";
import {Switch, Route} from "react-router-dom";
import LoginView from "./views/LoginView";
import SignupView from "./views/SignupView";


const Routes = () =>{
    return(
        <div className="auth-wrapper">
            <div className="auth-inner">
                <Switch>
                    <Route exact path='/' component={LoginView} />
                    <Route path="/sign-in" component={LoginView} />
                    <Route path="/sign-up" component={SignupView} />
                </Switch>
            </div>
        </div>
    )
}
export default Routes;