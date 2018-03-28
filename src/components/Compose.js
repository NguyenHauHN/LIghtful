import React, {Component} from 'react';
import Header from "./Header";
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../styles/main.scss';
import images from '../configs/images';

export default class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
                <Header/>
                <div className="page-wrapper">
                    <Sidebar/>
                    <div className="page-content-wrapper">
                        <div className="page-content px-4 py-4">
                            <h2 className="mb-4">New Post</h2>
                            <div className="row">
                                <div className="col-lg-5 col-md-12">
                                    <p>Video is here</p>
                                </div>
                                <div className="col-lg-7 col-md-12">
                                    <div className="form-new-post">
                                        <div className="content-new-post-wrapper p-3">
                                            <textarea placeholder="Type your message in here."></textarea>
                                        </div>
                                        <hr className="my-0"/>

                                        <div
                                            className="action-new-post d-flex flex-row justify-content-between px-3 py-3">
                                            <div className="add-media">
                                                <div className="d-flex flex-row">
                                                    <img src={images.add_media} alt="Add media"/>
                                                    <p className="mb-0 ml-2">Add Media</p>
                                                </div>

                                            </div>
                                            <div className="submissions">
                                                <button type="button" className="btn">Post Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}