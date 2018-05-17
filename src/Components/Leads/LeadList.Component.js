import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/LeadNew.css';

export default class LeadListComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { leadFetch, userInfo } = this.props;
        leadFetch(userInfo.userId);
    }

    render() {
        let { leads } = this.props;
        return (
            <div className="box box-list">
                {/* box-header */}
                <div className="box-header">
                    <h3 className="box-title">List of Leads</h3>
                    <Link to="/leads/add" className="btn btn-md btn-primary pull-right">
                        <i className="fa fa-plus"></i> New Lead
                    </Link>
                </div>

                <div className="box-body">
                    <div className="alert alert-success clearfix">
                        <p>Tao lead thanh cong</p>
                    </div>
                    <br />
                    <div className="table-responsive">
                        <table id="viewList" className="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Lead</th>
                                    <th>Product</th>
                                    <th>Tipster</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    leads.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td width="40" align="center">{index+1}</td>
                                                <td>{item.fullname}</td>
                                                <td>{item.product}</td>
                                                <td>{item.tipster}</td>
                                                <td>{item.date}</td>
                                                <td>
                                                    <span className="label-status {{Common::showColorStatus($lead->status)}}">
                                                        {item.status_text}
                                                    </span>
                                                </td>
                                                <td className="actions text-center" style={{ width: 100 }}>
                                                    <Link to={{pathname: `/leads/show/${item.id}`}} className="btn btn-xs btn-success">
                                                        <i className="fa fa-eye"></i>
                                                    </Link>
                                                    <Link to={{pathname: `/leads/edit/${item.id}`}} className="btn btn-xs btn-info" title="Edit">
                                                        <i className="fa fa-pencil"></i>
                                                    </Link>
                                                    {/* <a href="{{route('leads.edit', $lead->id)}}" className="btn btn-xs btn-info" title="Edit"><i className="fa fa-pencil"></i></a> */}
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>No.</th>
                                    <th>Lead</th>
                                    <th>Product</th>
                                    <th>Tipster</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}