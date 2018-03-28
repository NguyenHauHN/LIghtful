import React, {Component} from 'react';
import '../styles/sidebar.scss';
import images from "../configs/images";
import {NavLink} from 'react-router-dom';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <NavLink to="/posts" activeClassName="selected">
                    <div className="sidebar-item-wrapper my-3">
                        <div className="sidebar-item mx-auto">
                            <img src={images.posts_icon} alt=""/>
                        </div>
                    </div>
                </NavLink>
                <NavLink to="/compose" activeClassName="selected">
                    <div className="sidebar-item-wrapper my-3">
                        <div className="sidebar-item mx-auto">
                            <img src={images.compose_icon} alt=""/>
                        </div>
                    </div>
                </NavLink>
                <NavLink to="/videos" activeClassName="selected">
                    <div className="sidebar-item-wrapper my-3">
                        <div className="sidebar-item mx-auto">
                            <img src={images.multimedia_icon} alt=""/>
                        </div>
                    </div>
                </NavLink>
            </div>

        );
    }
}