import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const mails = [
    {
        id: '1',
        name: 'admin',
        subject: 'tieu de subject',
        date: 'Today 18:11'
    },
    {
        id: '2',
        name: 'admin',
        subject: 'tieu de subject',
        date: 'Today 18:11'
    }
];

export default class MessagesComponent extends Component {
    render() {
        return (
            <div className="messages_list row">
                <div className="col-md-3">
                    <div className="box box-solid">
                        <div className="box-header with-border">
                            <h3 className="box-title">Folders</h3>
                            <div className="box-tools">
                                <button type="button" className="btn btn-box-tool" data-widget="collapse">
                                    <i className="fa fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div className="box-body no-padding">
                            <ul className="nav nav-pills nav-stacked">
                                <li className="active">
                                    <a href="http://localhost:8000/admin/messages">
                                        <i className="fa fa-inbox"></i> Inbox
                                        <span className="label label-primary pull-right">3</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://localhost:8000/admin/messages/sent">
                                        <i className="fa fa-envelope-o"></i> Sent
                                        <span className="label label-default pull-right">0</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://localhost:8000/admin/messages/trash">
                                        <i className="fa fa-trash-o"></i> Trash
                                        <span className="label label-danger pull-right">0</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="box box-primary">
                        <div className="box-header with-border">
                            <h3 className="box-title">Mailbox</h3>
                        </div>
                        <div className="table-responsive mailbox-messages">
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
                                        mails.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="lead__no" align="center">{index + 1}</td>
                                                    <td className="lead__name">
                                                        <div className="lead__box">
                                                            <span className="lead__name">
                                                                {item.name}
                                                            </span>
                                                            <span className="lead__product">{item.name}</span>
                                                        </div>
                                                    </td>
                                                    <td className="lead__status">
                                                        <div className="lead__box">
                                                            <span className="lead__name">
                                                                {item.subject}
                                                            </span>
                                                            <span className="lead__product">{item.date}</span>
                                                        </div>
                                                    </td>
                                                    <td className="lead__actions actions text-center">
                                                        <Link to={{ pathname: `/leads` }} className="btn btn-xs btn-success">
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
            </div>
        );
    }
}