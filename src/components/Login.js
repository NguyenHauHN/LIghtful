import React, {Component} from 'react';
import '../styles/main.scss';
import '../styles/login.scss';
import images from '../configs/images';



class Input extends Component{
    render(){
        const {type} = this.props;
        const {placeholder} = this.props;
        const {classes} = this.props;
        return(
            <input type={type} className={classes} placeholder={placeholder} required/>
        );
    }
}


class ButtonLogin extends Component{
    render(){
        const {type} = this.props;
        const {text} = this.props;
        return(
          <button type={type} className={"btn btn-login color-white mt-4"}>{text}</button>
        );
    }
}

class SignUp extends Component{
    render(){
        return(
            <div className="sign-up d-flex align-items-center">
                <p className="color-white mb-0 mr-3">Don’t have an account?</p>
                <a className="btn btn-sign-up color-white">Sign Up Now</a>
            </div>
        );
    }
}

class FormLogin extends Component {
    render() {
        return (
            <div className="form-login d-flex flex-column mx-auto pt-5">
                <div className="form-header color-white">
                    <img src={images.logo_white}/>
                    <h2 className="mt-4">
                        Login To <b>Your Account</b>
                    </h2>
                </div>
                <form className="form-body">
                    <Input type={"email"} placeholder={"Email"} classes={"form-control input-email mt-4"}/>
                    <Input type={"password"} placeholder={"Password"} classes={"form-control input-password mt-2"}/>
                    <ButtonLogin text={"Login Now"} type={"submit"}/>
                </form>
                <div className="form-footer mt-2">
                    <a className="forget-password color-white mt-5">Don't remember your password?</a>
                </div>
            </div>
        );
    }
}

export default class Login extends Component {
    render() {
        return (
            <div className="bg-login">
                <div className="content-login container pt-5">
                    <SignUp/>
                    <FormLogin/>
                </div>
            </div>
        )
    }
}

