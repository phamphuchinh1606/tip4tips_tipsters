import {connect} from 'react-redux';

import LeadNewComponent from '../../Components/Leads/LeadNew.Component';
import * as action from '../../Actions/index';

const mapStateToProps = (state) => {
    console.log(state.LoginReducer);
    return{
        regions: state.leadReducer.regions,
        products : state.leadReducer.products,
        tipsterId : state.LoginReducer.userId
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        regionFetch: ()=>{
            dispatch(action.regionFetch());
        },
        productFetch: ()=>{
            dispatch(action.productFetch());
        }
    }
}

const ListNewContainer = connect(mapStateToProps, mapDispatchToProps)(LeadNewComponent);
export default ListNewContainer;