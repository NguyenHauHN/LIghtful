import React, {Component} from 'react';
import images from '../configs/images';
import '../styles/card.scss';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import moment from "moment";

export default class Card extends Component {
    constructor(props) {
        super(props)
        this.removePost = this.removePost.bind(this)
    }

    formatDate(date) {
        return moment(date).format('HH:mm Do MMM YYYY')
    }

    renderLinkTo(id) {
        return "/posts/" + id
    }

    removePost = () => {
        let r = window.confirm("Do you want to delete this post?");
        if (r === true) {
            this.props.callback()
        }

    }

    render() {
        const {data} = this.props
        return (
            <div className="post-card">
                <div className="post-card-header d-flex flex-row align-items-center justify-content-between p-3">
                    <div className="d-flex flex-row align-items-center">
                        <div className="card-icon">
                            <img src={images.footer_logo} className="img-rounded" alt=""/>
                        </div>
                        <div className="post-card-title ml-2">
                            <p className="mb-0">Lightul Blog</p>
                        </div>
                    </div>
                    <div style={{marginTop: "-20px", cursor: 'pointer'}}>
                        <img src={images.close} width="10" height="10" alt="Remove Post"
                             onClick={this.removePost}/>
                    </div>
                </div>
                <div className="post-card-body p-3">
                    <h4>
                        <Link to={this.renderLinkTo(data.id)}>{data.title}</Link>
                    </h4>
                    <p className="my-3">{data.content}</p>
                </div>
                <div className="post-card-footer p-3">
                    <p className="post-date mb-0">{this.formatDate(data.created_at)}</p>
                    <p className="post-author mb-0">{data.author}</p>
                </div>
            </div>
        )
    }
}