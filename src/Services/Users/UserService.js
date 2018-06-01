import * as URL from '../../API/URL';
import apiCaller from '../../API/apiCaller';

export function* fetchUserShow(tipsterId) {
    let userInfo = {};
    let urlEndPoint = URL.END_POINT_USER_SHOW + "/" + tipsterId;
    yield apiCaller(urlEndPoint, "GET", null).then(res => {
        if(res.data){
            userInfo = res.data.userInfo;
        }
    });
    return userInfo;
}
