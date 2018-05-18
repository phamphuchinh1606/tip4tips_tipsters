import * as URL from '../../API/URL';
import apiCaller from '../../API/apiCaller';

export function* fetchLeads(tipsterId){
    let leads = {};
    console.log(tipsterId);
    let urlEndPoint = URL.END_POINT_LEAD_LIST + "/" + tipsterId;
    yield apiCaller(urlEndPoint,"GET", null).then(res=>{
        leads = res.data;
    });
    return leads;
}

export function* leadLoadCreate(tipsterId){
    let lead = {};
    console.log(tipsterId);
    let urlEndPoint = URL.END_PONNT_LEAD_CREATE + "/" + tipsterId;
    yield apiCaller(urlEndPoint,"GET", null).then(res=>{
        lead = res.data;
    });
    return lead;
}

export function* leadCreate(lead){
    let body = lead;
    let urlEndPoint = URL.END_PONNT_LEAD_CREATE;
    let isSuccess = false;
    console.log(body);
    yield apiCaller(urlEndPoint,"POST", body).then(res=>{
        console.log(res);
        if(res.data && res.data.status == "0"){
            isSuccess = true;
        }
    });
    return isSuccess;
}

export function* leadLoadUpdate(tipsterId,leadId){
    let lead = {};
    console.log(tipsterId);
    let urlEndPoint = URL.END_POINT_LEAD_UPDATE + "/" + tipsterId + "/" + leadId;
    yield apiCaller(urlEndPoint,"GET", null).then(res=>{
        lead = res.data;
    });
    return lead;
}

export function* fetchLeadDetail(leadId){
    let lead = {};
    console.log(leadId);
    let urlEndPoint = URL.END_POINT_LEAD_DETAIL + "/" + leadId;
    yield apiCaller(urlEndPoint,"GET", null).then(res=>{
        lead = res.data;
    });
    return lead;
}