import React, { Component } from 'react';
import {NavLink, Link } from 'react-router-dom';

export default class Menu extends Component {
    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="images/no_image_available.jpg" className="img-circle" alt=" Avatar" />
                        </div>
                        <div className="pull-left info">
                            <p>full name</p>
                            {/* Status */}
                            <Link to="#">
                                <i className="fa fa-circle text-success"></i> Online
                            </Link>
                        </div>
                    </div>

                    {/* search form (Optional) */}
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                            <input type="text" name="q" className="form-control" placeholder="Search..."/>
                            <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </form>
                        {/* search form */}

                        {/* Sidebar Menu */}
                        <ul className="sidebar-menu" data-widget="tree">
                            <li className="header">MAIN</li>
                            {/* Optionally, you can add icons to the links */}
                            <li className="active">
                                <NavLink  to ="/">
                                    <i className="fa fa-home"></i><span>HOME</span>
                                </NavLink >
                            </li>
                            <li>
                                <NavLink  to ="/leads">
                                    <i className="fa fa-street-view"></i><span>Leads</span>
                                </NavLink >
                            </li>
                            <li>
                                <NavLink  to ="/menuparner">
                                    <i className="fa fa-street-view"></i><span>Choose insurance</span>
                                </NavLink >
                            </li>
                        </ul>
                        {/* /.sidebar-menu */}
                </section>
            </aside>
                );
            }
}