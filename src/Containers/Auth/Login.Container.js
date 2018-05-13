import {connect} from 'react-redux';

import LoginComponent from '../../Components/Auth/Login.Component';
import {loginAction} from '../../Actions/index';

const mapStateToProps = (state) => {
    return{
        userInfo: state.LoginReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onLogin: (value)=>{
            dispatch(loginAction(value));
        }
    }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
export default LoginContainer;