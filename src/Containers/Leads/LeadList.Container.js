import {connect} from 'react-redux';

import LeadListComponent from '../../Components/Leads/LeadList.Component';
import * as action from '../../Actions/index';

const mapStateToProps = (state) => {
    console.log(state.LoginReducer);
    return{
        leads: state.leadReducer.leads,
        tipsterId : state.LoginReducer.userId
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