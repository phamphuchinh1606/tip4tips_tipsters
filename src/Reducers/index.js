import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import leadReducer from './LeadReducer';
import loaddingReducer from './LoaddingReducer';

const allReducers = combineReducers({
    LoginReducer,
    leadReducer,
    loaddingReducer
});
export default allReducers;