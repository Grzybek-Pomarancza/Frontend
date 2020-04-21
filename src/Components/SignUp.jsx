import React, { Component } from "react";
import {Link} from "react-router-dom";
import './Login'
import validate from 'validate.js'


const schema = {
    firstName: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum: 32
        }
    },
    lastName: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum: 32
        }
    },
    email: {
        presence: { allowEmpty: false, message: 'is required' },
        email: true,
        length: {
            maximum: 64
        }
    },
    password: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            minimum: 6,
            maximum: 128
        }
    },
    confirmPassword: {
        presence: { allowEmpty: false, message: 'must match' }
    }
};

export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            values: {},
            errors: {},
            isValid: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        event.persist();
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            values:{
                ...this.state.values,
                [name]: value
            }
        })
    };

    isEmpty(obj){
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) return false;
        }
        return true;
    }


    handleValidation(){
        const errors = validate(this.state.values, schema) || {};

        if (this.state.values.password !== this.state.values.confirmPassword) {
            errors.confirmPassword = ['Confirm password must match'];
        }

        this.setState({
            ...this.state,
            isValid: this.isEmpty(errors),
            errors: errors || {}
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.handleValidation();
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