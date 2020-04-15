import React, { Component } from "react";
import {Link} from "react-router-dom";
import './Login'
export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    };

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state)

    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input
                        name="firstName"
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input
                        name="lastName"
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input
                        name ="email"
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={this.state.value}
                        onChange={this.handleChange}

                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Confirm password</label>
                    <input
                        name ="confirmPassword"
                        type="password"
                        className="form-control"
                        placeholder="Confirm password"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-block btn-primary">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered? <Link to={"/sign-in"}>login </Link>
                </p>
            </form>
        );
    }
}