import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Utils from '../../Commons/Utils';


export default class MessageDetailComponent extends Component {
    componentDidMount() {
        let { id } = this.props.match.params;
        this.props.onMessageDetailFetch(id);
    }
    render() {
        let {messageDetail} = this.props;
        return (
            <div className="box box-primary">
                <div className="box-header with-border">
                    <h3 className="box-title">Mail Detail</h3>
                    <span className="group__action pull-right">
                        <Link to="/messages" className="btn btn-xs btn-default">
                            <i className="fa fa-angle-left"></i> Back to list
                        </Link>
                    </span>
                </div>
                <div class="box-body no-padding">
                    <div class="mailbox-read-info">
                        <h3 className="sj"><span>Subject:</span> {messageDetail.title}</h3>
                        <h5>From: {messageDetail.authorMess}
                            <span class="mailbox-read-time pull-right" dangerouslySetInnerHTML={ { __html: messageDetail.dateSend } } />
                        </h5>
                    </div>
                    {/* /.mailbox-read-info  */}

                    <div class="mailbox-read-message">
                        <p dangerouslySetInnerHTML={ { __html: messageDetail.content } }/>
                    </div>
                    {/* /.mailbox-read-message  */}
                </div>
            </div>
        );
    }
}