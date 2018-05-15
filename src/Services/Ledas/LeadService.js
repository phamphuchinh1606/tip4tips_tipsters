import * as URL from '../../API/URL';
import apiCaller from '../../API/apiCaller';

export function* fetchLeads(tipsterId){
    let body = {
        tipsterId : tipsterId
    };
    let leads = {};
    yield apiCaller(URL.END_POINT_LOGIN,"GET", body).then(res=>{
        leads = JSON.parse(res.data);
    });
    return leads;
}