import {connect} from 'react-redux';

import LeadListComponent from '../../Components/Leads/LeadList.Component';
import * as action from '../../Actions/index';

const mapStateToProps = (state) => {
    return{
        leads: state.leadReducer.leads,
        userInfo : state.LoginReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        leadFetch: (tipsterId)=>{
            dispatch(action.leadFetch(tipsterId));
        }
    }
}

const LeadListContainer = connect(mapStateToProps, mapDispatchToProps)(LeadListComponent);
export default LeadListContainer;