import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, BrowserRouter, Route} from 'react-router-dom';
import {Login, Posts, Compose, Videos, PostDetail} from './components/';
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Posts} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/posts" component={Posts} />
                    <Route exact path="/compose" component={Compose} />
                    <Route exact path="/videos" component={Videos} />
                    <Route exact path="/posts/:pid" component={PostDetail} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
