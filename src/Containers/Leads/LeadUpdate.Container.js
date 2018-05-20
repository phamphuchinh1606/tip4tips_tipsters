import { connect } from 'react-redux';

import LeadUpdateComponent from '../../Components/Leads/LeadUpdate.Component';
import * as action from '../../Actions/index';

const mapStateToProps = (state) => {
    console.log(state.LoginReducer);
    return {
        regions: state.leadReducer.regions,
        products: state.leadReducer.products,
        tipsterId: state.LoginReducer.userId,
        leadUpdate: state.leadReducer.leadUpdate,
        leadUpdateStatus: state.leadReducer.leadUpdateStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadUpdate: (tipsterId, leadId) => {
            dispatch(action.leadLoadUpdate(tipsterId, leadId));
        },
        onUpdate: (lead) => {
            dispatch(action.leadUpdate(lead));
        },
        leadUpdateInit: () => {
            dispatch(action.leadUpdateInit());
        },
    }
}

const ListUpdateContainer = connect(mapStateToProps, mapDispatchToProps)(LeadUpdateComponent);
export default ListUpdateContainer;