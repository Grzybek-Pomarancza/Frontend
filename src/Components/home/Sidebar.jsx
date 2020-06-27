import React, {Component} from "react";
import "../../Styles/homeStyle.css";
import Label from "reactstrap/es/Label";

export default class Sidebar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            values: {
                firstName: "",
                lastName: "",
                email: "",
            },
            value: "",
        };
    }
    componentDidMount() {
        this.setState({
            values: {
                firstName: sessionStorage.getItem("name"),
                lastName: sessionStorage.getItem("surname"),
                email: sessionStorage.getItem("email"),
            },
        });
    }

    render() {
        return(
            <div className="sidebar">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLJOEt2IiXA3dGm32r7FHePYgX8N6UWxwUzfamdvT4GnKUvxKR&usqp=CAU"/>
                <Label>
                    {this.state.values.firstName} {this.state.values.lastName}
                </Label>
                <Label className="email">
                    {this.state.values.email}
                </Label>
                <div className="reservations">
                    <Label>
                        Your reservations:
                    </Label>
                    <div className="res">
                        <h4>Salon Mickiewicza</h4>
                        <p>Toyota Yaris</p>
                        <p>12.04-15.04</p>
                    </div>
                </div>
            </div>
    )
    }
}