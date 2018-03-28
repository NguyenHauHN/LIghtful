import React, {Component} from 'react';
import Header from "./Header";
import Sidebar from './Sidebar';
import Footer from './Footer';
import PostDetail from './PostDetail';
import '../styles/main.scss';
import Card from './Card';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class Posts extends Component {
    render() {
        return (
            <div>
                <div className="homepage">
                    <Header/>
                    <div className="page-wrapper">
                        <Sidebar/>
                        <div className="page-content-wrapper">
                            <div className="page-content px-4 py-4">
                                <h2 className="mb-4">List Post</h2>
                                <div className="row mx-0">
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 post-item pl-0">
                                        <Card/>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 post-item pl-0">
                                        <Card/>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 post-item pl-0">
                                        <Card/>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 post-item pl-0">
                                        <Card/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <Footer/>
            </div>


        );
    }
}