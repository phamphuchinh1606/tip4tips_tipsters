import {connect} from 'react-redux';

import DashboardComponent from '../../Components/Home/Dashboard.Component';
import * as action from '../../Actions/index';

const mapStateToProps = (state) => {
    return{
        recentStatusLeads : state.leadReducer.recentStatusLeads,
        userInfo: state.LoginReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onLoginSuccess: (userInfo)=>{
            dispatch(action.loginSuccess(userInfo));
        },
        fetchRecentStatus: (tipsterId) => {
            dispatch(action.recentStatusLeadsFetch(tipsterId));
        }
    }
}

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
export default DashboardContainer;