import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

export default class LeadDetailComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { id } = this.props.match.params;
        let { fetchLeadDetail, leadDeleteInit } = this.props;
        fetchLeadDetail(id);
        leadDeleteInit();
    }

    _onClickDelete = () => {
        let { onDeleteLead, lead } = this.props;
        let message = "Do you really want to delete lead :" + lead.fullname+ " ?";
        confirmAlert({
            title: 'Confirm delete lead',
            message: message,
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        onDeleteLead(lead.id);
                    }
                },
                {
                    label: 'No',
                    onClick: () => {

                    }
                }
            ]
        })
    }

    render() {
        let { lead , leadDeleteStatus} = this.props;
        let listStatus = lead.historys;
        let headerError = [];
        if(leadDeleteStatus.status){
            if(leadDeleteStatus.status === "1"){
                headerError = <div class="alert alert-danger clearfix"><p>{leadDeleteStatus.message}</p></div>
            }else{
                return <Redirect to="/leads"/>
            }
        }
        return (
            <div className="row">
                <div className="col-md-8">
                    {/* About Me Box */}
                    <div className="box box-primary">
                        {/* box-header */}
                        <div className="box-header with-border">
                            <h3 className="box-title">Lead detail</h3>
                            <span className="group__action pull-right">
                                <Link to="/leads" className="btn btn-xs btn-default">
                                    <i className="fa fa-angle-left"></i> Back to list
                                </Link>
                                <Link to={`/leads/edit/${lead.id}`} className="btn btn-xs btn-info">
                                    <i className="fa fa-pencil"></i> Edit
                                </Link>
                                <a className="btn btn-xs btn-danger" onClick={this._onClickDelete.bind(this)}>
                                    <i className="fa fa-trash"></i> Delete
                                </a>
                            </span>
                        </div>
                        {/* box-body */}
                        <div className="box-body">
                            {/* header error */}
                            {headerError}
                            <div className="block__profile">
                                <h3 className="profile__name">{lead.fullname}</h3>

                                <p className="text-muted">
                                    <span className="text-label"><i className="fa fa-phone margin-r-5"></i> Phone</span>
                                    <span className="text-highlight">{lead.phone}</span>
                                </p>

                                <p className="text-muted">
                                    <span className="text-label"><i className="fa fa-envelope margin-r-5"></i> Email</span>
                                    <span className="text-highlight">{lead.email}</span>
                                </p>

                                <p className="text-muted">
                                    <span className="text-label"><i className="fa fa-map-marker margin-r-5"></i> Region</span>
                                    <span className="text-highlight">{lead.region}</span>
                                </p>

                                <p className="text-muted">
                                    <span className="text-label"><i className="fa fa-shield margin-r-5"></i> Product</span>
                                    <span className="text-highlight">{lead.product}</span>
                                </p>

                                <p className="text-muted">
                                    <span className="text-label"><i className="fa fa-file-text-o margin-r-5"></i> Notes</span>
                                    <span className="text-highlight">{lead.notes}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    {/* Profile Image */}
                    <div className="box box-primary">
                        <div className="box-header with-border">
                            <h3 className="box-title">Advanced information</h3>
                        </div>
                        <div className="box-body">
                            <div className="block__action">
                                <p>Tipster reference:
                                    <span className="text-highlight">{lead.tipster}</span></p>
                            </div>
                            {/* <div className="block__action">
                                <p>Be Assigned to:<br/>
                                </p>
                            </div> */}
                            <div className="block__action">
                                <p>Status history</p>
                                <ul className="list-unstyled history-statuses">
                                    {
                                        listStatus.map((item, index) => {
                                            return (
                                                <li className="label-quote}" key={index}>
                                                    <span className="history__time">{item.date}</span>
                                                    <span className="history__info">{item.status_name}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}