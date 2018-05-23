import React, { Component } from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
import './Loadding.css';


class Loadding extends Component {
    render() {
        if(true){
            return null;
        }
        return (
            <div className='loadding'>
                <img src="/images/loadding.gif"/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        isLoading : state.loaddingReducer.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(Loadding);