import React, {Component} from 'react';
import Header from "./Header";
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../styles/main.scss';
import Card from './Card';
import InfiniteScroll from 'react-infinite-scroll-component';
import {SERVICE} from "../configs/config";

export default class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listPost: [],
            page: 1,
            totalItems: 0,
            limit: 8
        }
        this.remove = this.remove.bind(this)
    }

    fetchData = () => {
        let moreData = this.state.listPost
        let offset = (this.state.page - 1) * this.state.limit
        const user_id = JSON.parse(localStorage.getItem("id"))
        fetch(SERVICE.lightful_service + "/posts/?user_id=" + user_id + "&limit=" + this.state.limit + "&offset=" + offset)
            .then((response) => {
                return response.json()
            })
            .then((responseJson) => {
                this.setState({
                    listPost: [...moreData, ...responseJson.results],
                    count: responseJson.count
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.fetchData()
    }

    loadMore = () => {
        this.setState((prevState, props) => ({
            page: prevState.page + 1
        }))

        if (this.state.listPost.length < this.state.count) {
            this.fetchData()
        }
    }

    remove = (event, id) => {
        const user_id = JSON.parse(localStorage.getItem("id"))
        if (id) {
            fetch(SERVICE.lightful_service + "/posts/" + id + "/?user_id=" + user_id, {
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
        const {count} = this.state
        let listCard = []
        if (listPost.length > 0) {
            listCard = listPost.map((item, index) => {
                return (
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 post-item pl-0 mt-2"
                         key={index}>
                        <Card data={item} callback={(e) => this.remove(e, item.id)}/>
                    </div>
                )
            })
        }
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
                                    listPost.length <= 0 && <p>You have no posts to display!</p>
                                }

                                <div>
                                    <InfiniteScroll className="row mx-0" style={{display: 'flex', flexWrap: 'wrap'}}
                                                    dataLength={count}
                                                    next={this.loadMore}
                                                    hasMore={true}
                                                    endMessage={
                                                        <p style={{textAlign: 'center'}}>
                                                            <b>Yay! You have seen it all</b>
                                                        </p>
                                                    }>
                                        {listCard}
                                    </InfiniteScroll>
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