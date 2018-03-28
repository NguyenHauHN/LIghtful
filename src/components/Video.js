import React, {Component} from 'react';
import '../styles/video.scss';


export default class Video extends Component {
    render() {
        return (
            <div className="video">
                <div className="video-img">
                    <div className="overlay-video"></div>
                </div>
            </div>
        );
    }
}