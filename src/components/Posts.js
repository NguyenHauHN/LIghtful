import React, {Component} from 'react';
import Header from "./Header";
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../styles/main.scss';
import Card from './Card';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listPost: {
                results: []
            }
        }
        this.remove = this.remove.bind(this)
    }

    componentDidMount() {
        const user_id = JSON.parse(localStorage.getItem("id"))
        fetch("http://127.0.0.1:8000/posts/?user_id=" + user_id + "&page=1")
            .then((response) => {
                return response.json()
            })
            .then((responseJson) => {
                this.setState({
                    listPost: responseJson
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    remove = (event, id) => {
        if (id) {
            fetch("http://127.0.0.1:8000/posts/" + id + "/", {
                method: 'DELETE'
            })
                .then((response) => {
                    return response
                })
                .then((responseJson) => {
                    this.setState((prevState, props) => {
                        return {
                            listPost: prevState.listPost.filter((item, index) => item.id !== id)
                        }
                    })
                })
        }

    }

    render() {
        const {listPost} = this.state
        return (
            <div>
                <div className="homepage">
                    <Header/>
                    <div className="page-wrapper">
                        <Sidebar/>
                        <div className="page-content-wrapper">
                            <div className="page-content px-4 py-4">
                                <h2 className="mb-4">List Post</h2>
                                {
                                    listPost.count <= 0 && <p>You have no posts to display!</p>
                                }

                                <div className="row mx-0">
                                    {listPost.results.map((item, index) => {
                                        return (
                                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 post-item pl-0 mt-2"
                                                 key={index}>
                                                <Card data={item} callback={(e) => this.remove(e, item.id)}/>
                                            </div>
                                        )

                                    })}
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