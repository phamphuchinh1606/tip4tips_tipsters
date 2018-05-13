import {LOGIN_SUCCESS, LOG_OUT} from '../Actions/ActionType';

const INITIAL_STATE = {
    userName: null,
    userId : null,
    avata: null,
    fullName: null,
    error: null,
    loginState: false
}

var LoginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOG_OUT:
            return INITIAL_STATE;
        case LOGIN_SUCCESS:
            return action.userInfo;
        default:
            return state;
    }
}

export default LoginReducer;