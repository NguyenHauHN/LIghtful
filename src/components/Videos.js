import React, {Component} from 'react';
import Header from "./Header";
import Sidebar from './Sidebar';
import Footer from './Footer';
import Video from './Video';
import '../styles/main.scss';


export default class Videos extends Component {
    render() {
        return (
            <div className="homepage">
                <Header/>
                <div className="page-wrapper">
                    <Sidebar/>
                    <div className="page-content-wrapper">
                        <div className="page-content px-4 py-4">
                            <h2 className="mb-4">Video Library</h2>
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-4 col-12 mb-3 pl-0">
                                    <Video/>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-4 col-12 mb-3 pl-0">
                                    <Video/>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-4 col-12 mb-3 pl-0">
                                    <Video/>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-4 col-12 mb-3 pl-0">
                                    <Video/>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-4 col-12 mb-3 pl-0">
                                    <Video/>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-4 col-12 mb-3 pl-0">
                                    <Video/>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-4 col-12 mb-3 pl-0">
                                    <Video/>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-4 col-12 mb-3 pl-0">
                                    <Video/>
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