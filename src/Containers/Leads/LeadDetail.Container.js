import {connect} from 'react-redux';

import LeadDetailComponent from '../../Components/Leads/LeadDetail.Component';
import {loginAction} from '../../Actions/index';

const mapStateToProps = (state) => {
    return{
        userInfo: state.userInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onLogin: (value)=>{
            dispatch(loginAction(value));
        }
    }
}

const LeadDetailContainer = connect(mapStateToProps, mapDispatchToProps)(LeadDetailComponent);
export default LeadDetailContainer;