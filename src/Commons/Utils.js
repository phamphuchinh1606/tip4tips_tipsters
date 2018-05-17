import { Redirect } from 'react-router-dom';

export const checkLogin = () => {
    let userInfoRoot = localStorage.getItem("userInfo");
    if (userInfoRoot === null) {
        return false;
    } else {
        let userInfo = JSON.parse(userInfoRoot);
        if (!userInfo.loginState) {
            return false;
        } else {
            return true;
        }
    }
    return true;
}

export const getLogin =() =>{
    let isLogin = checkLogin();
    if(isLogin){
        return JSON.parse(localStorage.getItem("userInfo"));
    }
    return null;
}