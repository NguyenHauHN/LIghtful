import React, {Component} from 'react';
import '../styles/main.scss';
import '../styles/login.scss';
import images from '../configs/images';
import Link from "react-router-dom/es/Link";
import {SERVICE} from "../configs/config";


export class Input extends Component {
    render() {
        const {type} = this.props;
        const {placeholder} = this.props;
        const {classes} = this.props;
        return (
            <input type={type} className={classes} placeholder={placeholder} required/>
        );
    }
}

export class SignUp extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {linkTo} = this.props
        const {text} = this.props
        const {title} = this.props
        return (
            <div className="sign-up d-flex align-items-center">
                <p className="color-white mb-0 mr-3">{title}</p>
                <Link to={linkTo} className="btn btn-sign-up color-white">{text}</Link>
            </div>
        );
    }
}

export class FormLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleLogin = (e) => {
        e.preventDefault()
        fetch(SERVICE.lightful_service + "/login/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": this.state.username,
                "password": this.state.password
            })
        })
            .then((response) => {
                return response.json()
            })
            .then((responseJson) => {
                localStorage.setItem("token", responseJson.token)
                localStorage.setItem("id", responseJson.id)
                localStorage.setItem("username", responseJson.username)
                this.props.success()

            })
            .catch((err) => {
                console.log('error login', err)
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
        return (
            <div className="form-login d-flex flex-column mx-auto pt-5">
                <div className="form-header color-white">
                    <img src={images.logo_white} alt="Logo white"/>
                    <h2 className="mt-4">
                        Login To <b>Your Account</b>
                    </h2>
                </div>
                <form className="form-body">
                    <input type={"text"} value={username} onChange={this.handleChange}
                           className="form-control input-email mt-4" placeholder={"Username"} name="username" required/>
                    <input type={"password"} value={password} onChange={this.handleChange}
                           className="form-control input-email mt-2" placeholder={"Password"} name="password" required/>
                    <button type="submit" onClick={this.handleLogin} className="btn btn-login color-white mt-4">Login
                        Now
                    </button>
                </form>
                <div className="form-footer mt-2">
                    <a className="forget-password color-white mt-5">Don't remember your password?</a>
                </div>
            </div>
        );
    }
}

export default class Login extends Component {
    constructor(props) {
        super(props)
    }

    redirectToHome = () => {
        this.props.history.push("/posts");
    }

    render() {
        return (
            <div className="bg-login">
                <div className="content-login container pt-5">
                    <SignUp linkTo={"/register"} text={"Signup Now"}/>
                    <FormLogin success={this.redirectToHome}/>
                </div>
            </div>
        )
    }
}

