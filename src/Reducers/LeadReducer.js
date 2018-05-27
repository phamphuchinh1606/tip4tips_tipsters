import * as actionType from '../Actions/ActionType';

const INITIAL_STATE = {
    leads: [],
    regions: [],
    products: [],
    tipsters:[],
    lead: {
        leadName: '',
        phone: '',
        email: '',
        region: '',
        product: '',
        notes: '',
        tipsterReference: '',
        historys: [
            {
                date: '',
                status: ''
            }
        ]
    },
    leadCreate: [],
    leadCreaeStatus: [],
    leadDeleteStatus: [],
    leadUpdateStatus: [],
    recentStatusLeads: [],
    leadUpdate: []
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
        case actionType.TIPSTER_FETCH_SUCCESS:
            stateCopy.tipsters = action.tipsters;
            return stateCopy;
        case actionType.LEAD_DETAIL_FETCH_SUCCESS:
            stateCopy.lead = action.lead;
            return stateCopy;
        case actionType.LEAD_LOAD_CREATE_SUCCESS:
            stateCopy.leadCreate = action.lead;
            return stateCopy;
        case actionType.LEAD_CREATE_INIT:
            stateCopy.leadCreaeStatus = [];
            return stateCopy;
        case actionType.LEAD_CREATE_SUCCESS:
            stateCopy.leadCreaeStatus = action.leadCreaeStatus;
            return stateCopy;
        case actionType.LEAD_CREATE_FAILED:
            stateCopy.leadCreaeStatus = action.leadCreaeStatus;
            return stateCopy;
        case actionType.LEAD_DELETE_INIT:
            stateCopy.leadDeleteStatus = [];
            return stateCopy;
        case actionType.LEAD_DELETE_SUCCESS:
            stateCopy.leadDeleteStatus = action.leadDeleteStatus;
            return stateCopy;
        case actionType.LEAD_DELETE_FAILED:
            stateCopy.leadDeleteStatus = action.leadDeleteStatus;
            return stateCopy;
        case actionType.LEAD_LOAD_UPDATE_SUCCESS:
            stateCopy.leadUpdate = action.leadUpdate;
            return stateCopy;
        case actionType.LEAD_UPDATE_INIT:
            stateCopy.leadUpdateStatus = [];
            return stateCopy;
        case actionType.LEAD_UPDATE_SUCCESS:
            stateCopy.leadUpdateStatus = action.leadUpdateStatus;
            return stateCopy;
        case actionType.LEAD_UPDATE_FAILED:
            stateCopy.leadUpdateStatus = action.leadUpdateStatus;
            return stateCopy;
        case actionType.RECENT_STATUS_LEADS_FETCH_SUCCESS:
            stateCopy.recentStatusLeads = action.recentStatusLeads;
            return stateCopy;
        default:
            return state;
    }
}

export default leadReducer;