import React, {Component} from 'react';
import RecentLeads from './RecentLeads';
import LeadStatus from './LeadStatus';
import * as Utils from '../../Commons/Utils';

export default class DashboardComponent extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        console.log(Utils.getLogin());
        console.log(this.props);
        this.props.onLoginSuccess(Utils.getLogin());
    }
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