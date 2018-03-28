import React, {Component} from 'react';
import images from '../configs/images';
import '../styles/card.scss';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PostDetail from "./PostDetail";

export default class Card extends Component {
    render() {
        return (
            <div className="post-card">
                <div className="post-card-header d-flex flex-row align-items-center p-3">
                    <div className="card-icon">
                        <img src={images.footer_logo} className="img-rounded" alt=""/>
                    </div>
                    <div className="post-card-title ml-2">
                        <p className="mb-0">Lightul Blog</p>
                    </div>
                </div>
                <div className="post-card-body p-3">
                    <h4>
                        <Link to="/posts/1">How And Why To Create Personas For Your Charity</Link>
                    </h4>
                    <p className="my-3">Do you know how some adverts totally resonate with you and some don’t? The reason why the ones
                        that resonate are so effective is because they have been specifically targeted...</p>
                </div>
                <div className="post-card-footer p-3">
                    <p className="post-date mb-0">22nd Mar 2018</p>
                    <p className="post-author mb-0">Kirsty Marrins</p>
                </div>

            </div>
        )
    }
}