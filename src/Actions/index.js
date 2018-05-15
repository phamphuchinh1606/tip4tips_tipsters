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