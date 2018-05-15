import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import leadReducer from './LeadReducer';

const allReducers = combineReducers({
    LoginReducer,
    leadReducer
});
export default allReducers;