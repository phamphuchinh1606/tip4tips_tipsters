import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { BrowserRouter as Router, NavLink, Link, Route } from 'react-router-dom';

const MenuLink = ({ to, ...rest }) => {
    return (
        <Route exact path={to} children={({ match }) => {
            var active = match ? 'active 123' : '';
            return (
                <li className={active}>
                    <NavLink to={to} {...rest} />
                </li>
            )
        }} />
    )
}

class Menu extends Component {
    _clickMenuItem = (menuClassName) => {
        $('body').removeClass("sidebar-open");
        $('.sidebar-menu li').removeClass("active");
        $('.sidebar-menu li .' + menuClassName).parent().addClass("active");
    }

    render() {
        let { userInfo } = this.props;
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

                    {/* Sidebar Menu */}
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN</li>
                        {/* Optionally, you can add icons to the links */}
                        <MenuLink to="/" exact onClick={() => this._clickMenuItem('menu-home')} className="menu-home">
                            <i className="fa fa-home"></i>
                            <span>Home</span>
                        </MenuLink>
                        <MenuLink to="/leads" exact onClick={() => this._clickMenuItem('menu-leads')} className="menu-leads">
                            <i className="fa fa-street-view"></i>
                            <span>My Leads</span>
                        </MenuLink>
                        <MenuLink to="/messages" exact onClick={() => this._clickMenuItem('menu-messages')} className="menu-messages">
                            <i className="fa fa-envelope"></i>
                            <span>Messages</span>
                            <span className="pull-right-container">
                                <small className="label pull-right bg-green">{this.props.messageNewCount}</small>
                            </span>
                        </MenuLink>
                    </ul>
                    {/* /.sidebar-menu */}
                </section>
            </aside>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.LoginReducer,
        messageNewCount: state.messageReducer.messageNewCount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);
export default MenuContainer;