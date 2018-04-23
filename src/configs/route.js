import React from 'react';
import {BrowserRouter as Route} from 'react-router-dom';
import Login from '../components/Login';
import Posts from '../components/Posts';
import Compose from '../components/Compose';
import Videos from '../components/Videos';
import PostDetail from '../components/PostDetail';
import Register from '../components/Register';

export const routes = [
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
        exact: true
    },
    {
        path: "/compose",
        component: Compose,
        exact: true
    },
    {
        path: "/videos",
        component: Videos,
        exact: true
    },
    {
        path: "/posts/:id",
        component: PostDetail,
        exact: true
    },
    {
        path: "/register",
        component: Register,
        exact: true
    }
]
]

export const RouteConfig = route => (
    <Route
        path={route.path}
        component={route.component}
        exact={route.exact}
    />
);


