import React, {Component} from 'react';
import images from "../configs/images";
import Header from "./Header";
import Sidebar from './Sidebar';
import Footer from './Footer';
import {SERVICE} from "../configs/config";

export default class PostDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            infoPost: {}
        }
    }

    getInfoPost = () => {
        let idPost = this.props.match.params.pid
        fetch(SERVICE.lightful_service + "/posts/" + idPost + "/")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    infoPost: responseJson
                })
            })
            .catch((error) => {
                console.error(error);
            });

    }

    save = () => {
        let idPost = this.props.match.params.pid
        const user_id = JSON.parse(localStorage.getItem("id"))
        fetch(SERVICE.lightful_service + "/posts/" + idPost + "/?user_id=" + user_id, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.infoPost)
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    infoPost: responseJson
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentWillMount() {
        this.getInfoPost()
    }

    handleChange = (e) => {
        let info = this.state.infoPost;
        info.content = e.target.value;
        this.setState({
            infoPost: info
        })
    }

    render() {
        let {infoPost} = this.state
        return (
            <div className="homepage">
                <Header/>
                <div className="page-wrapper">
                    <Sidebar/>
                    <div className="page-content-wrapper">
                        <div className="page-content px-4 py-4">
                            <h2 className="mb-4">Post:&nbsp;
                                <span className="name-post">
                                    {infoPost.title}
                                </span>
                            </h2>
                            <div className="row">
                                <div className="col-lg-5 col-md-12">
                                    <p>Video is here</p>
                                </div>
                                <div className="col-lg-7 col-md-12">
                                    <div className="form-new-post content-post">
                                        <div className="content-new-post-wrapper p-3">
                                            <textarea placeholder="Type your message in here."
                                                      onChange={this.handleChange} value={infoPost.content}></textarea>
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
                                                <button type="button" className="btn" onClick={this.save}>Save</button>
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