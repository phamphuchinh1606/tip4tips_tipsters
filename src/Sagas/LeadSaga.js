import React from 'react';
import * as leadService from '../Services/Ledas/LeadService';
import * as productService from '../Services/Products/ProductService';
import * as actionType from '../Actions/ActionType';
import * as actionFunction from '../Actions/index';
import {put, takeLatest} from 'redux-saga/effects';
import * as API from '../API/apiCaller';

const leads = [
    {
        id: '1',
        fullname: 'lead 1',
        product: 'Medical',
        tipster: 'tipster 1',
        date: '2018/05/11',
        status: 'status 1',
    },
    {
        id: '2',
        fullname: 'lead 2',
        product: 'Medica2',
        tipster: 'tipster 2',
        date: '2018/05/11',
        status: 'status 2',
    },
    {
        id: '3',
        fullname: 'lead 3',
        product: 'Medical 3',
        tipster: 'tipster 3',
        date: '2018/05/11',
        status: 'status 3',
    },
    {
        id: '4',
        fullname: 'lead 4',
        product: 'Medical',
        tipster: 'tipster 4',
        date: '2018/05/11',
        status: 'status 4',
    },
    {
        id: '5',
        fullname: 'lead 5',
        product: 'Medica5',
        tipster: 'tipster 5',
        date: '2018/05/11',
        status: 'status 5',
    }
];

const regions = [
    {
        regionId : 1,
        regionName: 'region 1'
    },
    {
        regionId : 2,
        regionName: 'region 2'
    },
    {
        regionId : 3,
        regionName: 'region 3'
    },
    {
        regionId : 4,
        regionName: 'region 4'
    }
];

const products = [
    {
        productId : 1,
        productName : 'product 1'
    },
    {
        productId : 2,
        productName : 'product 2'
    },
    {
        productId : 3,
        productName : 'product 3'
    }
];

const lead = {
    leadName: 'lead name',
    gender: '0',
    phone: '01659655961',
    email: 'phamphuchinh1606@gmail.com',
    regionId: '2',
    region: 'Thanh phố hồ chí minh',
    product: 'Sản phẩm của lead',
    productId: '2',
    notes: 'ghi chu tinh trang ',
    tipsterReference: 'Tipster 01',
    historys: [
        {
            date: '26-Apr-2018 15:05',
            status: 'Win'
        },
        {
            date: '26-Apr-2018 15:05',
            status: 'Quote'
        },
        {
            date: '26-Apr-2018 15:05',
            status: 'Call'
        },
        {
            date: '26-Apr-2018 15:05',
            status: 'New'
        }
    ]
}

function* fetchLeads(action){
    try{
        yield put(actionFunction.loaddingTrue());
        let {tipsterId} = action;
        let leadsFetch = yield leadService.fetchLeads(tipsterId);
        yield put(actionFunction.leadFetchSuccess(leadsFetch));
    }catch(error){
        console.log(error);
        yield put(actionFunction.leadFetchSuccess(leads));
    }finally{
        yield put(actionFunction.loaddingFalse());
    }
}

function* fetchRegions(){
    try{
        yield put(actionFunction.loaddingTrue());
        yield put(actionFunction.regionFetchSuccess(regions));
    }catch(error){
        console.log(error);
        yield put(actionFunction.leadFetchFailead(error));
    }finally{
        yield put(actionFunction.loaddingFalse());
    }
}

function* fetchProducts(){
    try{
        yield put(actionFunction.loaddingTrue());
        let productsFetch = yield productService.fetchProducts();
        yield put(actionFunction.productFetchSuccess(productsFetch));
    }catch(error){
        console.log(error);
        yield put(actionFunction.leadFetchFailead(error));
    }finally{
        yield put(actionFunction.loaddingFalse());
    }
}

function* leadLoadCreate(action){
    try{
        yield put(actionFunction.loaddingTrue());
        let {tipsterId} = action;
        let leadFetch = yield leadService.leadLoadCreate(tipsterId);
        yield put(actionFunction.leadLoadCreateSuccess(leadFetch));
    }catch(error){
        console.log(error);
        yield put(actionFunction.leadLoadCreateFailed(error));
    }finally{
        yield put(actionFunction.loaddingFalse());
    }
}

function* leadCreate(action){
    try{
        yield put(actionFunction.loaddingTrue());
        let {lead} = action;
        let data = yield leadService.leadCreate(lead);
        if(data && data.status == "0"){
            let jsonValue = { message : "create lead : " + lead.fullname + " success", status : "0"};
            yield put(actionFunction.leadCreateSuccess(jsonValue));
        }else{
            let jsonValue = { message : data.message, status : "1"};
            yield put(actionFunction.leadCreateFailed(jsonValue));
        }
    }catch(error){
        console.log(error);
        yield put(actionFunction.leadCreateFailed(error));
    }finally{
        yield put(actionFunction.loaddingFalse());
    }
}

function* leadDelete(action){
    try{
        yield put(actionFunction.loaddingTrue());
        let {leadId} = action;
        let isSuccess = yield leadService.leadDelete(leadId);
        if(isSuccess){
            let jsonValue = { message : "delete lead success", status : "0"};
            yield put(actionFunction.leadDeleteSuccess(jsonValue));
        }else{
            let jsonValue = { message : "delete lead fail . Please try again", status : "1"};
            yield put(actionFunction.leadDeleteFailed(jsonValue));
        }
    }catch(error){
        console.log(error);
        yield put(actionFunction.leadDeleteFailed(error));
    }finally{
        yield put(actionFunction.loaddingFalse());
    }
}

function* leadLoadUpdate(action){
    try{
        yield put(actionFunction.loaddingTrue());
        let {tipsterId,leadId} = action;
        let leadFetch = yield leadService.leadLoadUpdate(tipsterId,leadId);
        console.log(leadFetch);
        yield put(actionFunction.leadLoadUpdateSuccess(leadFetch));
    }catch(error){
        console.log(error);
        yield put(actionFunction.leadLoadUpdateFailed(error));
    }finally{
        yield put(actionFunction.loaddingFalse());
    }
}

function* leadUpdate(action){
    try{
        yield put(actionFunction.loaddingTrue());
        let {lead} = action;
        let isSuccess = yield leadService.leadUpdate(lead);
        console.log(isSuccess);
        if(isSuccess){
            let jsonValue = { message : "Update lead : " + lead.fullname + " success", status : "0"};
            yield put(actionFunction.leadUpdateSuccess(jsonValue));
        }else{
            let jsonValue = { message : "Update lead fail . Please try again", status : "1"};
            yield put(actionFunction.leadUpdateFailed(jsonValue));
        }
    }catch(error){
        console.log(error);
        yield put(actionFunction.leadUpdateFailed(error));
    }finally{
        yield put(actionFunction.loaddingFalse());
    }
}

function* fetchLeadDetail(action){
    try{
        yield put(actionFunction.loaddingTrue());
        let {leadId} = action;
        let leadFetch = yield leadService.fetchLeadDetail(leadId);
        console.log(leadFetch);
        yield put(actionFunction.leadDetailFetchSuccess(leadFetch));
    }catch(error){
        console.log(error);
        yield put(actionFunction.leadDetailFetchFailed(error));
    }finally{
        yield put(actionFunction.loaddingFalse());
    }
}

function* fetchRecentStatusLeads(action){
    try{
        yield put(actionFunction.loaddingTrue());
        let {tipsterId} = action;
        let leadsFetch = yield leadService.fetchRecentStatusLeads(tipsterId);
        console.log(leadsFetch);
        yield put(actionFunction.recentStatusLeadsFetchSuccess(leadsFetch));
    }catch(error){
        console.log(error);
        yield put(actionFunction.recentStatusLeadsFetchFailed(error));
    }finally{
        yield put(actionFunction.loaddingFalse());
    }
}

export function* watchFetchLeads(){
    yield takeLatest(actionType.LEAD_FETCH,fetchLeads);
}

export function* watchFetchRegions(){
    yield takeLatest(actionType.REGION_FETCH,fetchRegions);
}

export function* watchFetchProducts(){
    yield takeLatest(actionType.PRODUCT_FETCH,fetchProducts);
}

export function* watchFetchLeadLoadCreate(){
    yield takeLatest(actionType.LEAD_LOAD_CREATE,leadLoadCreate);
}

export function* watchLeadCreate(){
    yield takeLatest(actionType.LEAD_CREATE,leadCreate);
}

export function* watchLeadUpdate(){
    yield takeLatest(actionType.LEAD_UPDATE, leadUpdate);
}

export function* watchLeadDelete(){
    yield takeLatest(actionType.LEAD_DELETE, leadDelete);
}

export function* watchFetchLeadLoadUpdate(){
    yield takeLatest(actionType.LEAD_LOAD_UPDATE,leadLoadUpdate);
}


export function* watchFetchLeadDetail(){
    yield takeLatest(actionType.LEAD_DETAIL_FETCH,fetchLeadDetail);
}

export function* watchFetchRecentStatusLeads(){
    yield takeLatest(actionType.RECENT_STATUS_LEADS_FETCH,fetchRecentStatusLeads);
}

