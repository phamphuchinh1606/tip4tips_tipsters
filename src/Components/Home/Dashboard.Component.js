import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import RecentLeads from './RecentLeads';
import LeadStatus from './LeadStatus';
import * as Utils from '../../Commons/Utils';

export default class DashboardComponent extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let { fetchRecentStatus, onLoginSuccess, onProductFetch, onFetchRegions } = this.props;
        let userInfo = Utils.getLogin();
        onLoginSuccess(Utils.getLogin());
        if (userInfo) {
            fetchRecentStatus(userInfo.userId);
            onProductFetch();
            onFetchRegions();
        }

    }

    render() {
        let { recentStatusLeads } = this.props;
        let recentleads = recentStatusLeads.recentleads;
        let statusLead = recentStatusLeads.statusLead;
        return (
            <div className="row dashboard">
                <div className="row margin-bottom-10">
                    <div className="col-sm-12 col-lg-12">
                        <Link className="btn btn-primary btn-block btn-add-lead" to="/menuparner">
                            <i className="fa fa-plus"></i>
                            <span className="margin-left-10">ADD NEW LEAD</span>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                        {/* LEADS LIST */}
                        <RecentLeads recentleads={recentleads} />
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        {/* LEADS LIST */}
                        <LeadStatus statusLead={statusLead} />
                    </div>
                </div>
            </div>
        );
    }
}