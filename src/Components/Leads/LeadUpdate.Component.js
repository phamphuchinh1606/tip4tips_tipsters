import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import apiCaller from '../../API/apiCaller';
import * as URL from '../../API/URL';
import * as Utils from '../../Commons/Utils';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import * as LocalStorageAction from '../../Commons/LocalStorageAction';

import './css/LeadNew.css';

const lead = {
    leadName: '',
    gender: '',
    phone: '',
    email: '',
    regionId: '',
    region: '',
    product: '',
    productId: '',
    notes: '',
    tipsterReference: '',
    tipsterReferenceId: '',
    historys: []
}

export default class LeadUpdate extends Component {

    constructor(props){
        super(props);
        this.state = {
            regions : [],
            products : [],
            tipsters : [],
            id: '',
            fullname: '',
            gender: '0',
            phone: '',
            email: '',
            regionId: '',
            productId: '',
            notes: '',
            tipsterId: '',
            lead : null
        }
    }

    async componentDidMount() {
        let {tipsterId, loadUpdate, leadUpdateInit, onLoginSuccess, isConnection } = this.props;
        let userInfo = Utils.getLogin();
        onLoginSuccess(Utils.getLogin());
        if (userInfo) {
            tipsterId = userInfo.userId;
        }
        leadUpdateInit();
        let { id } = this.props.match.params;
        if(isConnection){
            let urlEndPoint = URL.END_POINT_LEAD_UPDATE + "/" + tipsterId + "/" + id;
            await apiCaller(urlEndPoint,"GET", null).then(res=>{
                if(res){
                    this.state.regions = res.data.regions;
                    this.state.products = res.data.products;
                    this.state.tipsters = res.data.tipsters;
                    this.state.id = res.data.lead.id;
                    this.state.fullname = res.data.lead.fullname;
                    this.state.gender = res.data.lead.gender;
                    this.state.phone = res.data.lead.phone;
                    this.state.email = res.data.lead.email;
                    this.state.regionId = res.data.lead.region_id;
                    this.state.productId = res.data.lead.product_id;
                    this.state.notes = res.data.lead.notes;
                    this.state.tipsterId = res.data.lead.tipster_id;
                    this.setState(this.state);
                }
            });
        }else{
            this.state.regions = LocalStorageAction.getRegionsList();
            this.state.products = LocalStorageAction.getProductsList();
            this.state.tipsters = LocalStorageAction.getTipstersList();
            let lead = LocalStorageAction.getLeadDetail(id);
            if(lead){
                this.state.id = lead.id;
                this.state.fullname = lead.fullname;
                this.state.gender = lead.gender;
                this.state.phone = lead.phone;
                this.state.email = lead.email;
                this.state.regionId = lead.region_id;
                this.state.productId = lead.product_id;
                this.state.notes = lead.notes;
                this.state.tipsterId = lead.tipster_id;
                this.state.lead = lead;
            }
            this.setState(this.state);
        }
    }

    handleChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        let lead = {};
        if(this.state.lead){
            lead = this.state.lead;
        }
        lead.id = this.state.id;
        lead.fullname = this.state.fullname;
        lead.email = this.state.email;
        lead.gender = this.state.gender;
        lead.phone = this.state.phone;
        lead.notes = this.state.notes;
        lead.product = this.state.productId;
        lead.region = this.state.regionId;
        lead.tipster = this.state.tipsterId;
        this.props.onUpdate(lead);
    }

    _onClickDelete = () => {
        let { onDeleteLead, lead } = this.props;
        let message = "Do you really want to delete lead :" + this.state.fullname + " ?";
        confirmAlert({
            title: 'Confirm delete lead',
            message: message,
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        onDeleteLead(this.state.id);
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
        let regions = this.state.regions.map((item, index) => {
            if(this.state.regionId == item.id){
                return <option value={item.id} key={index} selected>{item.name}</option>
            }
            return (
                <option value={item.id} key={index}>{item.name}</option>
            )
        });

        let products = this.state.products.map((item, index) => {
            if(this.state.productId == item.id){
                return <option value={item.id} key={index} selected>{item.name}</option>;
            }
            return (
                <option value={item.id} key={index}>{item.name}</option>
            )
        });

        let tipsters = this.state.tipsters.map((item, index) => {
            if(this.state.tipsterId == item.id){
                <option value={item.id} selected key={index}> {item.username} </option>
            }
            return (
                <option value={item.id} selected key={index}> {item.username} </option>
            )
        });
        let inputMale = (<input type="radio" value="0" name="gender" />);
        let inputFemale = <input type="radio" value="1" name="gender" />
        if(this.state.gender === '0'){
            inputMale = <input type="radio" value="0" name="gender" checked onChange={this.handleChangeInput.bind(this)}/>;
        }else{
            inputFemale = <input type="radio" value="1" name="gender" checked onChange={this.handleChangeInput.bind(this)}/>
        }

        let headerError = [];
        let {leadUpdateStatus} = this.props;
        if(leadUpdateStatus.status){
            if(leadUpdateStatus.status == "1"){
                headerError = <div className="alert alert-danger clearfix"><p>{leadUpdateStatus.message}</p></div>
            }else{
                return <Redirect to="/leads"/>
            }
        }

        let { leadDeleteStatus} = this.props;
        if(leadDeleteStatus.status){
            if(leadDeleteStatus.status === "1"){
                headerError = <div class="alert alert-danger clearfix"><p>{leadDeleteStatus.message}</p></div>
            }else{
                return <Redirect to="/leads"/>
            }
        }
        return (
            <form onSubmit={this.onSubmit}>
                <div className="lead_update row">
                    <div className="col-md-12">
                        {/* create manager form */}
                        <div className="box box-success">
                            {/* box-header */}
                            <div className="box-header with-border">
                                <h3 className="box-title">Update Lead</h3>
                                <Link to="/leads" className="btn btn-xs btn-default pull-right">
                                    <i className="fa fa-angle-left"></i> Back to list
                                </Link>
                            </div>

                            {/* box-body */}
                            <div className="box-body">
                                {/* header error */}
                                {headerError}
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6">
                                        {/* text input */}
                                        <div className="form-group">
                                            <label>Full name</label>
                                            <input name="fullname" value={this.state.fullname} type="text" className="form-control" placeholder="Enter ..." required onChange={this.handleChangeInput.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6">
                                        <div className="form-group group__gender">
                                            <label className="Gender">Gender</label>
                                            <div className="radio-inline">
                                                <label>
                                                    {inputMale}
                                                    Male
                                                </label>
                                            </div>
                                            <div className="radio-inline">
                                                <label>
                                                    {inputFemale}
                                                    Female
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-12 col-sm-6">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input name="phone" value={this.state.phone} type="text" className="form-control" placeholder="Enter ..." onChange={this.handleChangeInput.bind(this)} required/>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input name="email" value={this.state.email} type="text" className="form-control" placeholder="Enter ..." onChange={this.handleChangeInput.bind(this)} required/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-12 col-sm-6">
                                        <div className="form-group">
                                            <label>Region</label>
                                            <select name="regionId" className="form-control" required onChange={this.handleChangeInput.bind(this)} required>
                                                <option value="" disabled selected>Please pick a region</option>
                                                {regions}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6">
                                        <div className="form-group">
                                            <label>Product</label>
                                            <select name="productId" className="form-control" required onChange={this.handleChangeInput.bind(this)} required>
                                                <option value="" disabled selected>Please pick a product</option>
                                                {products}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div className="form-group">
                                            <label>Notes</label>
                                            <textarea name="notes" className="form-control" placeholder="URGENT - PLEASE CONTACT ASAP" rows="5" value={this.state.notes} 
                                                onChange={this.handleChangeInput.bind(this)}>
                                            </textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box-footer">
                                <Link to="/leads" className="btn btn-default">
                                    Cancel
                                </Link>
                                
                                <button type="submit" className="btn btn-primary pull-right">Update</button>
                                <button type="button" className="btn btn-danger pull-right" onClick={this._onClickDelete.bind(this)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-md-4">
                        <div className="box box-success">
                            <div className="box-header with-border">
                                <h3 className="box-title">Actions</h3>
                            </div>
                            <div className="box-body">
                                <div className="form-group">
                                    <label>Tipster reference</label>
                                    <select name="tipsterId" className="form-control" onChange={this.handleChangeInput.bind(this)} required>
                                        <option value="" disabled selected>Please pick a tipster</option>
                                        {tipsters}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </form>
        );
    }
}