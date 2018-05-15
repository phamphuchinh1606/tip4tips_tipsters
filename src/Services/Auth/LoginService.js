import * as URL from '../../API/URL';
import apiCaller from '../../API/apiCaller';

export function* loginAction(email, password){
    let body = {
        email : email,
        password : password
    };
    let userInfo = {};
    yield apiCaller(URL.END_POINT_LOGIN,"POST", body).then(res=>{
        userInfo = JSON.parse(res.data);
    });
    return userInfo;
}