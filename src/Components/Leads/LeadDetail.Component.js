import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LeadDetailComponent extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let {id} = this.props.match.params;
        let {fetchLeadDetail} = this.props;
        fetchLeadDetail(id);
    }

    render() {
        let {lead} = this.props;
        let listStatus = lead.historys;
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
                                <a href="" className="btn btn-xs btn-info"><i className="fa fa-pencil"></i> Edit</a>
                                <a data-toggle="modal" data-target="#popup-confirm" className="btn btn-xs btn-danger"><i className="fa fa-trash"></i> Delete</a>
                            </span>
                        </div>
                        {/* box-body */}
                        <div className="box-body">
                            <div className="block__profile">
                                <h3 className="profile__name">{lead.leadName}</h3>

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
                                    <span className="text-highlight">{lead.tipsterReference}</span></p>
                            </div>
                            {/* <div className="block__action">
                                <p>Be Assigned to:<br/>
                                </p>
                            </div> */}
                            <div className="block__action">
                                <p>Status history</p>
                                <ul className="list-unstyled history-statuses">
                                    {
                                        listStatus.map((item,index)=>{
                                            return(
                                                <li className="label-quote}" key={index}>
                                                    <span className="history__time">{item.date}</span>
                                                    <span className="history__info">{item.status}</span>
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