import {connect} from 'react-redux';

import DashboardComponent from '../../Components/Home/Dashboard.Component';
import {loginSuccess} from '../../Actions/index';

const mapStateToProps = (state) => {
    return{}
}

const mapDispatchToProps = (dispatch) => {
    return{
        onLoginSuccess: (userInfo)=>{
            dispatch(loginSuccess(userInfo));
        }
    }
}

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
export default DashboardContainer;