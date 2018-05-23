import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/LeadNew.css';
import * as Utils from '../../Commons/Utils';

export default class LeadListComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { leadFetch, leadCreateInit, leadUpdateInit, leadDeleteInit, onLoginSuccess } = this.props;
        let userInfo = Utils.getLogin();
        onLoginSuccess(Utils.getLogin());
        if (userInfo) {
            leadFetch(userInfo.userId);
        }
        leadCreateInit();
        leadUpdateInit();
        leadDeleteInit();
    }

    render() {
        let { leads, leadCreaeStatus, leadDeleteStatus } = this.props;
        if (!leads) leads = [];
        let headerInfo = [];
        if (leadCreaeStatus.status) {
            if (leadCreaeStatus.status === "0") {
                headerInfo = <div class="alert alert-success clearfix"><p>{leadCreaeStatus.message}</p></div>
            }
        } else if (leadDeleteStatus.status) {
            if (leadDeleteStatus.status === "0") {
                headerInfo = <div class="alert alert-success clearfix"><p>{leadDeleteStatus.message}</p></div>
            }
        }
        return (
            <div className="box box-list">
                {/* box-header */}
                <div className="box-header">
                    <h3 className="box-title">My Leads</h3>
                    <Link to="/leads/add" className="btn btn-md btn-primary pull-right">
                        <i className="fa fa-plus"></i> New Lead
                    </Link>
                </div>

                <div>
                    {/* header info */}
                    {headerInfo}
                    <br />
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
                                                        </span>
                                                        <span className="lead__product">{item.date}</span>
                                                    </div>
                                                </td>
                                                <td className="lead__actions actions text-center">
                                                    <Link to={{ pathname: `/leads/show/${item.id}` }} className="btn btn-xs btn-success">
                                                        <i className="fa fa-eye"></i>
                                                    </Link>
                                                    {/* <Link to={{ pathname: `/leads/edit/${item.id}` }} className="btn btn-xs btn-info" title="Edit">
                                                        <i className="fa fa-pencil"></i>
                                                    </Link> */}
                                                    {/* <a href="{{route('leads.edit', $lead->id)}}" className="btn btn-xs btn-info" title="Edit"><i className="fa fa-pencil"></i></a> */}
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