import React, { Component } from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
import {  BrowserRouter as Router, NavLink, Link, Route } from 'react-router-dom';

const MenuLink = ({ to, ...rest}) =>{
    return(
        <Route exact path={to} children={({ match }) =>{
            var active = match ? 'active 123' : '';
            console.log(match);
            return(
                <li className={active}>
                    <NavLink to={to} {...rest}/>
                </li>
            )
        }}/>
    )
}

class Menu extends Component {
    _clickMenuItem =() =>{
        $('body').removeClass("sidebar-open");
    }

    render() {
        let {userInfo} = this.props;
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src={`${userInfo.pathImage}/${userInfo.avata}`} className="img-circle" alt=" Avatar" />
                        </div>
                        <div className="pull-left info">
                            <p>{userInfo.fullName}</p>
                            {/* Status */}
                            <Link to="#">
                                <i className="fa fa-circle text-success"></i> Online
                            </Link>
                        </div>
                    </div>

                    {/* search form (Optional) */}
                    {/* <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                            <input type="text" name="q" className="form-control" placeholder="Search..." />
                            <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </form> */}
                    {/* search form */}

                    {/* Sidebar Menu */}
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN</li>
                        {/* Optionally, you can add icons to the links */}
                        {/* <li className="active">
                            <NavLink to="/">
                                <i className="fa fa-home"></i><span>HOME</span>
                            </NavLink >
                        </li> */}
                        {/* <li>
                            <NavLink to="/leads">
                                <i className="fa fa-street-view"></i><span>Leads</span>
                            </NavLink >
                        </li>
                        <li>
                            <NavLink to="/menuparner">
                                <i className="fa fa-shield"></i><span>Choose insurance</span>
                            </NavLink >
                        </li> */}
                        <MenuLink to="/" exact onClick={this._clickMenuItem.bind(this)} >Home</MenuLink>
                        <MenuLink to="/leads" exact onClick={this._clickMenuItem.bind(this)}>MY LEADS</MenuLink>
                    </ul>
                    {/* /.sidebar-menu */}
                </section>
            </aside>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.LoginReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);
export default MenuContainer;