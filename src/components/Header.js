import React, {Component} from 'react';
import '../styles/header.scss';
import images from '../configs/images';
import 'bootstrap/dist/js/bootstrap';
import 'jquery/dist/jquery.slim';

export default class Header extends Component {
    constructor(props) {
        super(props)
    }

    signout = () => {
        localStorage.clear()
        document.location.href = '/login'
    }

    render() {
        const username = localStorage.getItem("username")
        return (
            <div className="header-main">
                <div className="header-wrapper d-flex flex-row align-items-center justify-content-between px-4">
                    <div className="logo-header-wrapper">
                        <div className="logo-header">
                            <img src={images.brand_logo} alt="Logo Header"/>
                        </div>
                    </div>
                    <div className="info-user-wrapper d-flex flex-row align-items-center">
                        <p className="username mb-0 mr-3">
                            You are logged in as <b>{username}</b>
                        </p>
                        <div className="avatar">
                            <a className=" dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                               aria-expanded="false">
                                <img className="img-avatar img-rounded" src={images.avatar} alt="Avatar user"/>
                                <img className="img-context img-rounded" src={images.context_icon} alt="Context icon"/>
                            </a>
                            <ul className="px-4 context-menu dropdown-menu">
                                <li className="py-2">
                                    <span>Add organisation</span>
                                </li>
                                <li className="py-2" style={{cursor: 'pointer'}} onClick={this.signout}>

                                    <img src={images.sign_out_icon} className="mr-2" alt="Sign Out Icon"/>
                                    <span>Signout</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}