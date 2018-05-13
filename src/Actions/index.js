import {LOGIN_ACTION, LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_CHECK, LOG_OUT} from './ActionType';

export const loginAction = (value) => {
    return{
        type: LOGIN_ACTION,
        value : value
    }
}

export const loginCheck = () => {
    return{
        type: LOGIN_CHECK
    }
}

export const logOutAction = () => {
    return{
        type: LOG_OUT
    }
}

export const loginSuccess = (userInfo) =>{
    return {
        type: LOGIN_SUCCESS,
        userInfo : userInfo
    }
}

export const loginFailed = (error) => {
    return {
        type : LOGIN_FAILED,
        error: error
    }
}