import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import InnerHTML from 'dangerously-set-inner-html';
import { RawHTML } from 'react-dom';
import * as actionFunction from '../../Actions';
import * as Utils from '../../Commons/Utils';
import { Network } from '../../Commons/Utils';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { onLoadMessageNew } = this.props;
        let userInfo = Utils.getLogin();
        if (userInfo) {
            onLoadMessageNew(userInfo.userId);
        }
    }

    _onClickLogout = () => {
        var { onLogout } = this.props;
        onLogout();
        <Redirect to="/login" />
    }

    _clickRefreshMail = () =>{
        let { onLoadMessageNew } = this.props;
        let userInfo = Utils.getLogin();
        if (userInfo) {
            onLoadMessageNew(userInfo.userId);
        }
    }

    render() {
        let { userInfo, messageNews, messageNewCount } = this.props;
        let messagesHtml = <li>No messages.</li>;
        if (messageNews && messageNews.length > 0) {
            messagesHtml = messageNews.map((item, index) => {
                return (
                    <li key={index}>{/* start message */}
                        <Link to={`/messages/show/${item.id}`}>
                            <div className="pull-left">
                                {/* User Image */}
                                <img src={`${item.pathImage}/${item.senderAvatar}`} className="img-circle" alt="" />
                            </div>
                            {/* Message title and timestamp */}
                            <h4>
                                {item.senderUsername}
                                <small><i className="fa fa-clock-o"></i>
                                    <span dangerouslySetInnerHTML={{ __html: item.dateSend }} />
                                </small>
                            </h4>
                            {/* The message */}
                            <p dangerouslySetInnerHTML={{ __html: item.contentShow }} />
                        </Link>

                    </li>
                )
            })
        }
        return (
            <header className="main-header">
                <Network
                    onChange={({ online }) => {
                        if (online && window.cornify_add) {
                            window.cornify_add()
                        }
                    }}
                    render={({ online }) => {
                        this.props.onSetNetwork(online);
                        return null;
                    }}
                />
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
                                    <span className="label label-success">{messageNewCount}</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">
                                        <span>You have {messageNewCount} new messages</span>
                                        <button class="btn btn-xs btn-info pull-right" onClick={this._clickRefreshMail.bind(this)}>
                                            <i class="fa fa-refresh"></i> Refresh
                                        </button>
                                    </li>
                                    <li>
                                        {/* inner menu: contains the messages */}
                                        <ul className="menu">
                                            {messagesHtml}
                                            {/* end message */}
                                        </ul>
                                        {/* /.menu */}
                                    </li>
                                    <li className="footer">
                                        <Link to="/messages">See All Messages</Link>
                                    </li>
                                </ul>
                            </li>
                            {/* messages-menu */}

                            {/* User Account Menu */}
                            <li className="dropdown user user-menu">
                                {/* Menu Toggle Button */}
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    {/* The user image in the navbar*/}
                                    <img src={`${userInfo.pathImage}/${userInfo.avata}`} className="user-image" alt="user-image" />
                                    {/* hidden-xs hides the username on small devices so only the image appears. */}
                                    <span className="hidden-xs">{userInfo.fullName}</span>
                                </a>
                                <ul className="dropdown-menu">
                                    {/* The user image in the menu */}
                                    <li className="user-header">
                                        <img src={`${userInfo.pathImage}/${userInfo.avata}`} className="img-circle" alt="User Image" />
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
                                            <Link to="/login" onClick={() => this._onClickLogout()} className="btn btn-default btn-flat">
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
    return {
        userInfo: state.LoginReducer,
        messageNews: state.messageReducer.messageNews,
        messageNewCount: state.messageReducer.messageNewCount,
        isConnection: state.networkReducer.isConnection
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => {
            dispatch(actionFunction.logOutAction());
        },
        onLoadMessageNew: (tipsterId) => {
            dispatch(actionFunction.messageNewFetch(tipsterId));
        },
        onSetNetwork: (isConnection) =>{
            dispatch(actionFunction.networkSet(isConnection));
        }
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;