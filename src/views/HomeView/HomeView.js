import React, {Component} from "react";
import Carousel from "../../Components/home/Carousel"
import Sidebar from "../../Components/home/Sidebar";
import "../../Styles/homeStyle.css";




export default class RenrCarView extends Component{
    render() {
        return (
            <div className="auth-wrapper">
                <Carousel/>
                <Sidebar/>
            </div>

        );
    }

}