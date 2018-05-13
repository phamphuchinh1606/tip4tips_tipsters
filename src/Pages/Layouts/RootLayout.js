import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';


import routers from '../routers';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {checkLogin} from '../../Commons/Utils';

import LogigPage from '../Auth/Login.Page';
import Layout from './Layout';

const userInfoSuccess = {
    userName: 'phamphuchinh',
    userId : '1',
    avata: 'avata.jpg',
    fullName: 'phạm phú chinh',
    error: null,
    loginState: true
}

class RootLayout extends Component {

    showLayoutLogin() {
        return <LogigPage/>
    }

    render() {
        let isLogin = checkLogin();
        if(!isLogin){
            return this.showLayoutLogin();
        }else{
            return ( <Layout/> );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.LoginReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default RootLayout;