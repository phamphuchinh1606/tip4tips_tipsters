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