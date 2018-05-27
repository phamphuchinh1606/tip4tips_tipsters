import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/LeadNew.css';
import * as Utils from '../../Commons/Utils';
import * as LocalStorageAction from '../../Commons/LocalStorageAction';

export default class LeadListComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { leadFetch, leadCreateInit, leadUpdateInit, leadDeleteInit, onLoginSuccess,onFetchProducts, onFetchRegions, onFetchTipsters } = this.props;
        let userInfo = Utils.getLogin();
        onLoginSuccess(Utils.getLogin());
        if (userInfo) {
            leadFetch(userInfo.userId);
            onFetchTipsters(userInfo.userId);
        }
        onFetchProducts();
        onFetchRegions();
        leadCreateInit();
        leadUpdateInit();
        leadDeleteInit();
    }

    render() {
        let { leads, leadCreaeStatus, leadDeleteStatus, isConnection } = this.props;
        if (!leads) leads = [];
        let headerInfo = [];
        if (leadCreaeStatus.status) {
            if (leadCreaeStatus.status === "0") {
                headerInfo = <div className="alert alert-success clearfix"><p>{leadCreaeStatus.message}</p></div>
            }
        } else if (leadDeleteStatus.status) {
            if (leadDeleteStatus.status === "0") {
                headerInfo = <div className="alert alert-success clearfix"><p>{leadDeleteStatus.message}</p></div>
            }
        }
        let leadsSync = LocalStorageAction.getLeadNotSync();
        let buttonSync = null;
        if(isConnection && leadsSync && leadsSync.length > 0){
            buttonSync = <button className="btn btn-md btn-warning pull-right sync-leads">
                            <i class="fa fa-refresh"></i> Synchronize
                        </button>;
        }
        
        return (
            <div className="box box-list">
                {/* box-header */}
                <div className="box-header with-border">
                    <h3 className="box-title">My Leads</h3>
                    <Link to="/leads/add" className="btn btn-md btn-primary pull-right">
                        <i className="fa fa-plus"></i> New Lead
                    </Link>
                    {buttonSync}
                </div>

                <div>
                    {/* header info */}
                    {headerInfo}
                    <div>
                        <table className="table table-hover table-striped lead__list_mobile">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Lead</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    leads.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="lead__no" align="center">{index + 1}</td>
                                                <td className="lead__name">
                                                    <div className="lead__box">
                                                        <span className="lead__name">
                                                            {item.fullname}
                                                        </span>
                                                        <span className="lead__product">{item.product}</span>
                                                    </div>
                                                </td>
                                                <td className="lead__status">
                                                    <div className="lead__box">
                                                        <span className="lead__name" style={{color: item.status_color}}>
                                                            {item.status_text}
                                                            <span className="not_sync"> {item.new_offline_text} </span>
                                                        </span>
                                                        <span className="lead__product">{item.date}</span>
                                                    </div>
                                                </td>
                                                <td className="lead__actions actions text-center">
                                                    <Link to={{ pathname: `/leads/show/${item.id}` }} className="btn btn-xs btn-success">
                                                        <i className="fa fa-eye"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}