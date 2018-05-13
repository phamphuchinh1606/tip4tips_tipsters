import React, {Component} from 'react';
import RecentLeads from './RecentLeads';
import LeadStatus from './LeadStatus';

export default class DashboardComponent extends Component{
    render(){
        return(
            <div className="row dashboard">
                <div className="col-sm-12 col-lg-6">
                    {/* LEADS LIST */}
                    <RecentLeads />
                </div>
                <div className="col-sm-12 col-lg-6">
                    {/* LEADS LIST */}
                    <LeadStatus />
                </div>
            </div>
        );
    }
}