import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import RecentLeads from './RecentLeads';
import LeadStatus from './LeadStatus';
import * as Utils from '../../Commons/Utils';

export default class DashboardComponent extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        let {onLoginSuccess, fetchRecentStatus, userInfo} = this.props;
        onLoginSuccess(Utils.getLogin());
        if(userInfo){
            fetchRecentStatus(userInfo.userId);
        }
        
    }
    render(){
        let {recentStatusLeads} = this.props;
        let recentleads = recentStatusLeads.recentleads;
        let statusLead = recentStatusLeads.statusLead;  
        return(
            <div className="row dashboard">
                <div className="col-sm-12 col-lg-6">
                    {/* LEADS LIST */}
                    <RecentLeads recentleads={recentleads}/>
                </div>
                <div className="col-sm-12 col-lg-6">
                    {/* LEADS LIST */}
                    <LeadStatus statusLead={statusLead}/>
                </div>
            </div>
        );
    }
}