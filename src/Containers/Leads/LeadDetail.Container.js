import {connect} from 'react-redux';

import LeadDetailComponent from '../../Components/Leads/LeadDetail.Component';
import * as action from '../../Actions/index';

const mapStateToProps = (state) => {
    return{
        lead: state.leadReducer.lead,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchLeadDetail: (leadId)=>{
            dispatch(action.leadDetailFetch(leadId));
        }
    }
}

const LeadDetailContainer = connect(mapStateToProps, mapDispatchToProps)(LeadDetailComponent);
export default LeadDetailContainer;