import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from '../components/Login';
import Posts from '../components/Posts';
import Compose from '../components/Compose';
import Video from '../components/Videos';

export const routes = {
    main: [
        {
            path: "/",
            component: Posts,
            exact: true
        },
        {
            path: "/posts",
            component: Posts,
            exact: false
        },
        {
            path: "/login",
            component: Login,
            exact: false
        },
        {
            path: "/compose",
            component: Compose,
            exact: false
        },
        {
            path: "/videos",
            component: Video,
            exact: false
        }

    ]
};

export const RouteConfig = route => (
    <Route
        path={route.path}
        component={route.component}
        exact={route.exact}
    />
);


