import * as actionType from './ActionType';

export const loginAction = (value) => {
    return{
        type: actionType.LOGIN_ACTION,
        value : value
    }
}

export const loginCheck = () => {
    return{
        type: actionType.LOGIN_CHECK
    }
}

export const logOutAction = () => {
    return{
        type: actionType.LOG_OUT
    }
}

export const loginSuccess = (userInfo) =>{
    return {
        type: actionType.LOGIN_SUCCESS,
        userInfo : userInfo
    }
}

export const loginFailed = (error) => {
    return {
        type : actionType.LOGIN_FAILED,
        error: error
    }
}

//Lead
export const leadFetch = (tipsterId) => {
    return{
        type: actionType.LEAD_FETCH,
        tipsterId: tipsterId
    }
}

export const leadFetchSuccess = (leads) => {
    return{
        type : actionType.LEAD_FETCH_SUCCESS,
        leads: leads
    }
}

export const leadFetchFailead = (error) => {
    return{
        type : actionType.LEAD_FETCH_SUCCESS,
        error: error
    }
}

//load lead create
export const leadLoadCreate = (tipsterId) => {
    return{
        type: actionType.LEAD_LOAD_CREATE,
        tipsterId: tipsterId
    }
}

export const leadLoadCreateSuccess = (lead) => {
    return{
        type : actionType.LEAD_LOAD_CREATE_SUCCESS,
        lead: lead
    }
}

export const leadLoadCreateFailed = (error) => {
    return{
        type : actionType.LEAD_LOAD_CREATE_FAILED,
        error: error
    }
}

export const leadCreaeInit = () => {
    return{
        type: actionType.LEAD_CREATE_INIT
    }
}

export const leadCreate = (lead) => {
    return{
        type: actionType.LEAD_CREATE,
        lead: lead
    }
}

export const leadCreateSuccess = (success) => {
    return{
        type : actionType.LEAD_CREATE_SUCCESS,
        leadCreaeStatus: success
    }
}

export const leadCreateFailed = (error) => {
    return{
        type : actionType.LEAD_CREATE_FAILED,
        leadCreaeStatus: error
    }
}

//lead lead update
export const leadLoadUpdate = (tipsterId, leadId) => {
    return{
        type: actionType.LEAD_LOAD_UPDATE,
        tipsterId: tipsterId,
        leadId: leadId
    }
}

export const leadLoadUpdateSuccess = (leadUpdate) => {
    return{
        type : actionType.LEAD_LOAD_UPDATE_SUCCESS,
        leadUpdate: leadUpdate
    }
}

export const leadLoadUpdateFailed = (error) => {
    return{
        type : actionType.LEAD_LOAD_UPDATE_FAILED,
        error: error
    }
}

export const leadUpdateInit = () => {
    return{
        type: actionType.LEAD_UPDATE_INIT
    }
}

export const leadUpdate = (lead) => {
    return{
        type: actionType.LEAD_UPDATE,
        lead: lead
    }
}

export const leadUpdateSuccess = (success) => {
    return{
        type : actionType.LEAD_UPDATE_SUCCESS,
        leadUpdateStatus: success
    }
}

export const leadUpdateFailed = (error) => {
    return{
        type : actionType.LEAD_UPDATE_FAILED,
        leadUpdateStatus: error
    }
}

//lead delete
export const leadDeleteInit = () => {
    return{
        type: actionType.LEAD_DELETE_INIT
    }
}

export const leadDelete = (leadId) => {
    return{
        type: actionType.LEAD_DELETE,
        leadId: leadId
    }
}

export const leadDeleteSuccess = (success) => {
    return{
        type : actionType.LEAD_DELETE_SUCCESS,
        leadDeleteStatus: success
    }
}

export const leadDeleteFailed = (error) => {
    return{
        type : actionType.LEAD_DELETE_FAILED,
        leadDeleteStatus: error
    }
}

export const regionFetch = () => {
    return{
        type: actionType.REGION_FETCH
    }
}

export const regionFetchSuccess = (regions) =>{
    return{
        type: actionType.REGION_FETCH_SUCCESS,
        regions: regions
    }
}

export const regionFetchFailed = (error) =>{
    return{
        type: actionType.REGION_FETCH_FAILED,
        error: error
    }
}

export const productFetch = () => {
    return{
        type: actionType.PRODUCT_FETCH
    }
}

export const productFetchSuccess = (products) =>{
    return{
        type: actionType.PRODUCT_FETCH_SUCCESS,
        products: products
    }
}

export const productFetchFailed = (error) =>{
    return{
        type: actionType.PRODUCT_FETCH_FAILED,
        error: error
    }
}

export const leadDetailFetch = (leadId) =>{
    return{
        type: actionType.LEAD_DETAIL_FETCH,
        leadId: leadId
    }
}

export const leadDetailFetchSuccess = (lead) =>{
    return{
        type: actionType.LEAD_DETAIL_FETCH_SUCCESS,
        lead: lead
    }
}

export const leadDetailFetchFailed = (error) =>{
    return{
        type: actionType.LEAD_DETAIL_FETCH_FAILED,
        error: error
    }
}

//Home
export const recentStatusLeadsFetch = (tipsterId) => {
    return{
        type: actionType.RECENT_STATUS_LEADS_FETCH,
        tipsterId: tipsterId
    }
}

export const recentStatusLeadsFetchSuccess = (recentStatusLeads) => {
    return{
        type: actionType.RECENT_STATUS_LEADS_FETCH_SUCCESS,
        recentStatusLeads: recentStatusLeads
    }
}

export const recentStatusLeadsFetchFailed = (error) => {
    return{
        type: actionType.RECENT_STATUS_LEADS_FETCH_FAILED,
        error: error
    }
}