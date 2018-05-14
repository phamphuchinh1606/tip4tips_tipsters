import React from 'react';
import {LOGIN_ACTION, LOG_OUT} from '../Actions/ActionType';
import {loginSuccess, loginFailed} from '../Actions/index';
import {put, takeLatest} from 'redux-saga/effects';
import * as API from '../API/apiCaller';

const userInfoSuccess = {
    userName: 'phamphuchinh',
    userId : '1',
    avata: 'avata.jpg',
    fullName: 'phạm phú chinh',
    error: null,
    loginState: true
}

const USER_DEFAULT = {
    userName: '',
    userId : '',
    avata: '',
    fullName: '',
    error: null,
    loginState: false
}

function* login(action){
    try{
        const userInfo = yield userInfoSuccess;
        yield localStorage.setItem("userInfo",JSON.stringify(userInfoSuccess));
        yield put(loginSuccess(userInfo));
    }catch(error){
        console.log(error);
        yield put(loginFailed(error));
    }
}

function* logout(){
    try{
        yield localStorage.setItem("userInfo",JSON.stringify(USER_DEFAULT));
    }catch(error){
        console.log(error);
        yield put(loginFailed(error));
    }
}

export function* watchLogin(){
    yield takeLatest(LOGIN_ACTION,login);
}

export function* watchLogout(){
    yield takeLatest(LOG_OUT,logout);
}