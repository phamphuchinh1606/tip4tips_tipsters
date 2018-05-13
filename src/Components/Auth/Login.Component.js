import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import './Login.css';

import Header from './Header';
import Container from './Container';

const backGroundImage = [
    './images/bg-home-1.jpg',
    './images/bg-home-2.jpg',
    './images/bg-home-3.jpg',
    './images/bg-home-4.jpg',
];

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgIndex: 0
        }
    }

    render() {
        let userInfoRoot = localStorage.getItem("userInfo");
        if(userInfoRoot === null){
            
        }else{
            let userInfo = JSON.parse(userInfoRoot);
            if(!userInfo.loginState){
            }else{
                return <Redirect to="/"/>
            }
        }
        var divStyle = {
            backgroundImage: 'url(' + backGroundImage[this.state.bgIndex] + ')',
        }
        return (
            <div className="has-img" style={divStyle}>
                <Header {...this.props}/>
                <Container {...this.props}/>
            </div>
        );
    }

    componentDidMount() {
        let parrentThis = this;
        this.timerID = setInterval(
            () => {
                parrentThis.setState({ bgIndex: ++parrentThis.state.bgIndex % backGroundImage.length })
            },
            20000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
}