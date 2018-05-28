import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import apiCaller from '../../API/apiCaller';
import * as URL from '../../API/URL';
import './css/LeadNew.css';
import * as Utils from '../../Commons/Utils';
import * as LocalStorageAction from '../../Commons/LocalStorageAction';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        with:'100%',
        transform: 'translate(-50%, -50%)',
        padding:0,

    }
};

export default class LeadListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            leadsSync: [],
            totalRecordSync : 0,
            recordSynchronized : 0
        };
        this.openSync = this.openSync.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openSync() {
        this.setState({ modalIsOpen: true });
    }

    async afterOpenModal() {
        if(this.state.leadsSync){
            if(this.state.leadsSync.length > 0){
                this.state.totalRecordSync = this.state.leadsSync.length;
                this.state.recordSynchronized = 0;
                this.setState(this.state);
                try{
                    let leads = this.state.leadsSync;
                    let urlEndPoint = URL.END_PONNT_LEAD_CREATE;
                    for (let index in leads) {
                        await apiCaller(urlEndPoint,"POST", leads[index]).then(res=>{
                            if(res.data){
                                if(res.data.status == "0"){
                                    LocalStorageAction.setLeadSync(leads[index]);
                                    console.log("thanh cong");
                                }
                            }
                            this.setState({recordSynchronized: this.state.recordSynchronized + 1});
                        });
                    }
                    this.setState({ modalIsOpen: false });
                    let userInfo = Utils.getLogin();
                    if (userInfo) {
                        this.props.leadFetch(userInfo.userId);
                    }
                }catch(error){
                    console.log(error);
                }
            }
        }
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    componentDidMount() {
        let { leadFetch, leadCreateInit, leadUpdateInit, leadDeleteInit, onLoginSuccess, onFetchProducts, onFetchRegions, onFetchTipsters } = this.props;
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
        this.state.leadsSync = LocalStorageAction.getLeadNotSync();
        this.setState(this.state);
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
        if (isConnection && leadsSync && leadsSync.length > 0) {
            buttonSync = <button className="btn btn-md btn-warning pull-right sync-leads" onClick={this.openSync}>
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
                                                        <span className="lead__name" style={{ color: item.status_color }}>
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
                
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="header-modal">
                        <h3>Synchronize lead</h3>
                    </div>
                    <div className="content-modal">
                        <img src="./images/sync_loadding.gif"/>
                        <div>
                            <span className="total_leads">Total leads : {this.state.totalRecordSync}</span>
                            <span className="synchronized">Synchronized : {this.state.recordSynchronized}</span>
                        </div>
                    </div>
                    <div className="footer-modal">
                        <button className="btn btn-md btn-primary pull-right">
                            <i className="fa fa-times-circle"></i> Close
                        </button>
                    </div>
                </Modal>
            </div>
        );
    }
}