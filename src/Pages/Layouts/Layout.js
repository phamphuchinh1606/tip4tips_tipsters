import React, { Component } from 'react';

import routers from '../routers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from '../Home/Dashboard.Page';
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';
import Menu from '../Partials/Menu';

export default class Layout extends Component {
    showContentRoute = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return result;
    }

    render() {
        return (
            <div className="main-content">
                {/* header-starts */}
                <Header />
                {/* //header-ends */}
                {/*left-fixed -navigation*/}
                <Menu />
                {/*left-fixed -navigation*/}

                {/* main content start*/}
                <div className="content-wrapper" style={{ minHeight: 660 }}>
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="http://tip4tips-v2.amagumolabs.io/home">
                                    <i className="fa fa-home"></i>Home
                                </a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="http://tip4tips-v2.amagumolabs.io/admin/products">List of Products</a>
                            </li>
                            <li className="breadcrumb-item active">Edit Product</li>
                        </ol>
                    </section>
                    <section className="content">
                        <Switch>
                            {this.showContentRoute(routers)}
                        </Switch>
                        <div className="clearfix"> </div>
                    </section>
                </div>
                {/*footer*/}
                <Footer />
                {/*//footer*/}
            </div>
        );
    }
}