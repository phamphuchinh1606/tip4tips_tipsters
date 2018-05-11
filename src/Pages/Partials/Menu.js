import React, { Component } from 'react';

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
                            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
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
                                <a href="">
                                    <i className="fa fa-home"></i><span>HOME</span>
                                </a>
                            </li>
                            <li>
                                <a href=""><i className="fa fa-street-view"></i><span>Leads</span></a>
                            </li>
                            <li>
                                <a href=""><i className="fa fa-eye"></i><span>Tipsters</span></a>
                            </li>
                            {/* Manager */}
                            <li className="header">ADMIN</li>

                            <li>
                                <a href=''><i className="fa fa-users"></i><span>Users</span></a>
                            </li>
                            {/* Product */}
                            <li>
                                <a href=""><i className="fa fa-shield"></i><span>Products</span>                </a>
                            </li>
                            <li>
                                <a href=""><i className="fa fa-gift"></i><span>Gifts</span></a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa fa-envelope"></i><span>Messages</span>
                                    <span className="pull-right-container">
                                        <small className="label pull-right bg-green">0</small>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa fa-file-text"></i><span>Activity</span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa fa-newspaper-o"></i><span>Message Templates</span>
                                </a>
                            </li>
                        </ul>
                        {/* /.sidebar-menu */}
                </section>
            </aside>
                );
            }
}