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

export const leadCreate = (lead) => {
    return{
        type: actionType.LEAD_CREATE,
        lead: lead
    }
}

export const leadCreateSuccess = (lead) => {
    return{
        type : actionType.LEAD_CREATE_SUCCESS,
        lead: lead
    }
}

export const leadCreateFailed = (error) => {
    return{
        type : actionType.LEAD_CREATE_FAILED,
        error: error
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