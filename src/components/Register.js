import React, {Component} from 'react';
import '../styles/main.scss';
import '../styles/login.scss';
import images from '../configs/images';
import {FormLogin, SignUp} from "./Login";
import {browserHistory, withRouter} from "react-router-dom"
import {SERVICE} from "../configs/config";

export class FormRegister extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email: '',
            rePassword: ''
        }
    }

    handleRegister = (e) => {
        e.preventDefault()
        if (this.state.password !== this.state.rePassword) {
            alert("Password incorrect!")
            return
        }
        fetch(SERVICE.lightful_service + "/users/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": this.state.username,
                "password": this.state.password,
                "email": this.state.email
            })
        })
            .then((response) => {
                const statusCode = response.status;
                const data = response.json();
                return Promise.all([statusCode, data]);
            })
            .then((responseJson) => {
                if (responseJson[0] !== 200 && responseJson[0] !== 201) {
                    if (responseJson[1].hasOwnProperty("username")) {
                        alert("Username existed!")
                    }
                    else if (responseJson[1].hasOwnProperty("email")) {
                        alert("Username existed!")
                    }
                }
                else {
                    alert("Register account successfully!")
                    this.props.success()
                }
            })
            .catch((err) => {
                console.log('error register', err)
            })
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        const {username} = this.state
        const {password} = this.state
        const {rePassword} = this.state
        const {email} = this.state
        return (
            <div className="form-login d-flex flex-column mx-auto pt-5">
                <div className="form-header color-white">
                    <img src={images.logo_white} alt="Logo white"/>
                    <h2 className="mt-4">
                        Login To <b>Your Account</b>
                    </h2>
                </div>
                <form className="form-body" onSubmit={this.handleRegister}>
                    <input type={"text"} value={username} onChange={this.handleChange}
                           className="form-control input-email mt-4" placeholder={"Username"} name="username" required/>
                    <input type={"email"} value={email} onChange={this.handleChange}
                           className="form-control input-email mt-2" placeholder={"Email"} name="email" required/>
                    <input type={"password"} value={password} onChange={this.handleChange}
                           className="form-control input-email mt-2" placeholder={"Password"} name="password" required/>
                    <input type={"password"} value={rePassword} onChange={this.handleChange}
                           className="form-control input-email mt-2" placeholder={"Retype password"} name="rePassword"
                           required/>
                    <button type="submit" className="btn btn-login color-white mt-4">Register
                    </button>
                </form>
                <div className="form-footer mt-2">
                    <a className="forget-password color-white mt-5">Don't remember your password?</a>
                </div>
            </div>
        );
    }
}

export default class Register extends Component {
    constructor(props) {
        super(props)
    }

    redirectToHome = () => {
        this.props.history.push("/login");
    }

    render() {
        return (
            <div className="bg-login">
                <div className="content-login container pt-5">
                    <SignUp linkTo={"/login"} text={"Signin Now"} title={"Do have an account?"}/>
                    <FormRegister success={this.redirectToHome}/>
                </div>
            </div>
        )
    }
}