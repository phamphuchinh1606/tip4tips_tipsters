import React, {Component} from 'react';
import LoginContainer from '../../Containers/Auth/Login.Container';

export default class LoginPage extends Component{
    render(){
        console.log("chinh dep trai");
        console.log(this.props);
        return(
            <LoginContainer {...this.props}/>
        );
    }
}