import React, {Component} from 'react';
import images from "../configs/images";
import '../styles/footer.scss';


export default class Footer extends Component {
    render() {
        return (
            <div className="page-footer">
                <div className="footer-content d-flex flex-row justify-content-between py-5 px-3">
                    <div className="footer-content-left d-flex flex-column justify-content-between align-items-start">
                        <img src={images.footer_logo} alt=""/>
                        <div className="footer-content mt-5">
                            <div className="copyright">Lightful Ⓒ 2018</div>
                        </div>
                    </div>
                    <div className="footer-content-right">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 d-flex flex-column col-footer">
                                <div className="content-right-title text-uppercase mb-4">
                                    Company
                                </div>
                                <a className="mb-2">About</a>
                                <a className="mb-2">Services</a>
                                <a className="mb-2">Labs</a>
                                <a className="mb-2">Working with Us</a>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 d-flex flex-column col-footer">
                                <div className="content-right-title text-uppercase mb-4">
                                    Legal
                                </div>
                                <a className="mb-2">Privacy</a>
                                <a className="mb-2">Terms and Conditions</a>
                                <a className="mb-2">Cookie Policy</a>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 d-flex flex-column col-footer">
                                <div className="content-right-title text-uppercase mb-4">
                                    Using Lightful
                                </div>
                                <a className="mb-2">Features</a>
                                <a className="mb-2">Pricing</a>
                                <a className="mb-2">Blog</a>
                                <a className="mb-2">Community</a>
                            </div>
                        </div>
                        <div className="footer-social-link mt-5">
                            <a>
                                <img src={images.footer_twitter} className="icon-social mr-2" alt=""/>
                            </a>
                            <a>
                                <img src={images.footer_facebook} className="icon-social mr-2" alt=""/>
                            </a>
                            <a>
                                <img src={images.footer_linkedin} className="icon-social" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}