import React, { Component, Fragment } from 'react';
import './Login.css';

import Header from './Header';
import Container from './Container';

const backGroundImage = [
    './images/bg-home-1.jpg',
    './images/bg-home-2.jpg',
    './images/bg-home-3.jpg',
    './images/bg-home-4.jpg',
];

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgIndex: 0
        }
    }

    render() {
        var divStyle = {
            backgroundImage: 'url(' + backGroundImage[this.state.bgIndex] + ')',
        }
        return (
            <div className="has-img" style={divStyle}>
                <Header />
                <Container />
            </div>
        );
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.setState({ bgIndex: ++this.state.bgIndex % backGroundImage.length }),
            20000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
}