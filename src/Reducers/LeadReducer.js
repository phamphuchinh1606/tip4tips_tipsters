import * as actionType from '../Actions/ActionType';

const INITIAL_STATE = {
    leads: [],
    regions: [],
    products: []
};

var leadReducer = (state = INITIAL_STATE, action) => {
    let stateCopy = { ...state };
    switch (action.type) {
        case actionType.LEAD_FETCH_SUCCESS:
            stateCopy.leads = action.leads;
            return stateCopy;
        case actionType.REGION_FETCH_SUCCESS:
            stateCopy.regions = action.regions;
            return stateCopy;
        case actionType.PRODUCT_FETCH_SUCCESS:
            stateCopy.products = action.products;
            return stateCopy;
        default:
            return state;
    }
}

export default leadReducer;