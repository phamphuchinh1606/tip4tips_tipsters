import {connect} from 'react-redux';

import LeadUpdateComponent from '../../Components/Leads/LeadUpdate.Component';
import * as action from '../../Actions/index';

const mapStateToProps = (state) => {
    console.log(state.LoginReducer);
    return{
        regions: state.leadReducer.regions,
        products : state.leadReducer.products,
        tipsterId : state.LoginReducer.userId,
        lead: state.leadReducer.lead,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        regionFetch: ()=>{
            dispatch(action.regionFetch());
        },
        productFetch: ()=>{
            dispatch(action.productFetch());
        },
        fetchLeadDetail: (leadId)=>{
            dispatch(action.leadDetailFetch(leadId));
        }
    }
}

const ListUpdateContainer = connect(mapStateToProps, mapDispatchToProps)(LeadUpdateComponent);
export default ListUpdateContainer;