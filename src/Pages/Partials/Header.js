import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {logOutAction} from '../../Actions';

class Header extends Component {
    constructor(props){
        super(props);
    }

    _onClickLogout = ()=>{
        var {onLogout} = this.props;
        onLogout();
        <Redirect to="/login"/>
    }

    render() {
        let {userInfo} = this.props;
        console.log(userInfo);
        return (
            <header className="main-header">
                {/* Logo  */}
                <Link className="logo" to="#">
                    {/* mini logo for sidebar mini 50x50 pixels  */}
                    <span className="logo-mini">T4T</span>
                    {/* logo for regular state and mobile devices  */}
                    <span className="logo-lg">Tip4Tips</span>
                </Link>
                {/* Header Navbar */}
                {/* Right Side Of Navbar */}
                <nav className="navbar navbar-static-top" role="navigation">
                    {/* Sidebar toggle button*/}
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            {/* Messages: style can be found in dropdown.less*/}
                            <li className="dropdown messages-menu">
                                {/* Menu toggle button */}
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-envelope-o"></i>
                                    <span className="label label-success">New message</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have new messages</li>
                                    <li>
                                        {/* inner menu: contains the messages */}
                                        <ul className="menu">
                                            
                                                    <li>{/* start message */}
                                                <a href="{{route('messages.show', $newmessage->id)}}">
                                                    <div className="pull-left">
                                                        {/* User Image */}
                                                        hinh anh
                                                    </div>
                                                    {/* Message title and timestamp */}
                                                    <h4>
                                                        senderUsername
                                                        <small><i className="fa fa-clock-o"></i>  Member since May. 2018 </small>
                                                    </h4>
                                                    {/* The message */}
                                                    <p>content</p>
                                                </a>
                                            </li>
                                            {/* end message */}
                                            <li>No messages.</li>
                                            
                                        </ul>
                                        {/* /.menu */}
                                    </li>
                                    <li className="footer"><a href="">See All Messages</a></li>
                                </ul>
                            </li>
                            {/* messages-menu */}

                            {/* Notifications Menu */}
                            <li className="dropdown notifications-menu">
                                {/* Menu toggle button */}
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-bell-o"></i>
                                    <span className="label label-warning">10</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 10 notifications</li>
                                    <li>
                                        {/* Inner Menu: contains the notifications */}
                                        <ul className="menu">
                                            <li>
                                                {/* start notification */}
                                                <a href="#">
                                                    <i className="fa fa-users text-aqua"></i> 5 new members joined today
                                                </a>
                                            </li>
                                            {/* end notification */}
                                        </ul>
                                    </li>
                                    <li className="footer"><a href="#">View all</a></li>
                                </ul>
                            </li>

                            {/* User Account Menu */}
                            <li className="dropdown user user-menu">
                                {/* Menu Toggle Button */}
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    {/* The user image in the navbar*/}
                                    <img src={`${userInfo.pathImage}/${userInfo.avata}`} className="user-image" alt="user-image"/>
                                    {/* hidden-xs hides the username on small devices so only the image appears. */}
                                    <span className="hidden-xs">{userInfo.fullName}</span>
                                </a>
                                <ul className="dropdown-menu">
                                    {/* The user image in the menu */}
                                    <li className="user-header">
                                        <img src={`${userInfo.pathImage}/${userInfo.avata}`} className="img-circle" alt="User Image"/>
                                        <p>
                                            {userInfo.userName}
                                            <small>Member since : {userInfo.date}</small>
                                        </p>
                                    </li>
                                    {/* Menu Footer*/}
                                    <li className="user-footer">
                                        <div className="pull-left">
                                            <a href="" className="btn btn-default btn-flat">Profile</a>
                                        </div>
                                        <div className="pull-right">
                                            <Link to="/login" onClick={()=>this._onClickLogout()} className="btn btn-default btn-flat">
                                                Sign out
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </nav>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        userInfo: state.LoginReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onLogout: ()=>{
            dispatch(logOutAction());
        }
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;