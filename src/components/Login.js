import React, {Component} from 'react';
import '../styles/main.scss';
import '../styles/login.scss';
import images from '../configs/images';


class Input extends Component {
    render() {
        const {type} = this.props;
        const {placeholder} = this.props;
        const {classes} = this.props;
        return (
            <input type={type} className={classes} placeholder={placeholder} required/>
        );
    }
}

class SignUp extends Component {
    render() {
        return (
            <div className="sign-up d-flex align-items-center">
                <p className="color-white mb-0 mr-3">Don’t have an account?</p>
                <a className="btn btn-sign-up color-white">Sign Up Now</a>
            </div>
        );
    }
}

class FormLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleLogin = (e) => {
        e.preventDefault()
        fetch("http://127.0.0.1:8000/login/", {
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
                console.log(responseJson)
                localStorage.setItem("token", responseJson.token)
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
                           className="form-control input-email mt-4" placeholder={"Email"} name="username" required/>
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
                    <SignUp/>
                    <FormLogin success={this.redirectToHome}/>
                </div>
            </div>
        )
    }
}

