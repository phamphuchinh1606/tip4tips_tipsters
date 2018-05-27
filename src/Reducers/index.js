import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import leadReducer from './LeadReducer';
import loaddingReducer from './LoaddingReducer';
import messageReducer from './MessageReducer';
import networkReducer from './NetWorkReducer';

const allReducers = combineReducers({
    LoginReducer,
    leadReducer,
    loaddingReducer,
    messageReducer,
    networkReducer
});
export default allReducers;