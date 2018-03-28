import React, {Component} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {routes, RouteConfig} from "./configs/route";

class App extends Component {
    render() {
        const {main} = routes;
        return (
            <Router>
                <Switch>
                    {main.map((route, i) => <RouteConfig key={i} {...route} />)}
                </Switch>
            </Router>
        );
    }
}

export default App;
