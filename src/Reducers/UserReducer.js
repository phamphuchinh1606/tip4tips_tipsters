import * as actionType from '../Actions/ActionType';

const INITIAL_STATE = {
    userInfo: {}
}

var UserReducer = (state = INITIAL_STATE, action) => {
    let stateCopy = { ...state };
    switch (action.type) {
        case actionType.USERS_SHOW_FETCH_SUCCESS:
            stateCopy.userInfo = action.userInfo;
            return stateCopy;
        default:
            return state;
    }
}

export default UserReducer;