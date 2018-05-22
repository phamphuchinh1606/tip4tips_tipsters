import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as Utils from '../../Commons/Utils';

import './css/LeadNew.css';

export default class LeadNew extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            gender: '0',
            phone: '',
            email: '',
            regionId: '',
            productId: '',
            notes: '',
            tipsterId: ''
        }
    }

    componentDidMount() {
        //fet data drop box
        this.props.onLoginSuccess(Utils.getLogin());
        let { loadCreate, tipsterId, leadCreateInit } = this.props;
        leadCreateInit();
        loadCreate(tipsterId);
        this.state.tipsterId = tipsterId;
        if (this.props.history.location.state) {
            let productParamId = this.props.history.location.state.productId;
            this.state.productId = productParamId;
        }
        this.setState(this.state);
    }

    handleChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        let lead = {};
        lead.fullname = this.state.fullname;
        lead.email = this.state.email;
        lead.gender = this.state.gender;
        lead.phone = this.state.phone;
        lead.notes = this.state.notes;
        lead.product = this.state.productId;
        lead.region = this.state.regionId;
        lead.tipster = this.state.tipsterId;
        this.props.onCreateLead(lead);
    }

    render() {
        let { leadCreate, leadCreaeStatus } = this.props;
        let regions = [];
        if (leadCreate.regions) {
            regions = leadCreate.regions.map((item, index) => {
                return (
                    <option value={item.id} key={index}>{item.name}</option>
                )
            });
        }
        let products = [];
        if (leadCreate.products) {
            products = leadCreate.products.map((item, index) => {
                if (this.state.productId == item.id) {
                    return (
                        <option value={item.id} key={index} selected>{item.name}</option>
                    )
                }
                return (
                    <option value={item.id} key={index}>{item.name}</option>
                )
            });
        }
        let tipster = [];
        if (leadCreate.tipsters) {
            tipster = <option value={leadCreate.tipsters.id} selected> {leadCreate.tipsters.username} </option>
        }
        let headerError = [];
        console.log(leadCreaeStatus);
        if(leadCreaeStatus.status){
            if(leadCreaeStatus.status === "1"){
                headerError = <div class="alert alert-danger clearfix"><p>{leadCreaeStatus.message}</p></div>
            }else{
                return <Redirect to="/leads"/>
            }
        }
        return (
            <form onSubmit={this.onSubmit}>
                <div className="row">
                    <div className="col-md-12">
                        {/* create manager form */}
                        <div className="box box-success">
                            {/* box-header */}
                            <div className="box-header with-border">
                                <h3 className="box-title">Create Lead</h3>
                                <Link to="/leads" className="btn btn-xs btn-default pull-right">
                                    <i className="fa fa-angle-left"></i> Back to list
                                </Link>
                            </div>

                            {/* box-body */}
                            <div className="box-body">
                                {/* show header error */}
                                {headerError}
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6">
                                        {/* text input */}
                                        <div className="form-group">
                                            <label>Full name</label>
                                            <input name="fullname" value={this.state.fullname} type="text" className="form-control" placeholder="Enter ..." required
                                                onChange={this.handleChangeInput.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6">
                                        <div className="form-group group__gender">
                                            <label className="Gender">Gender</label>
                                            <div className="radio-inline">
                                                <label>
                                                    <input type="radio" value="0" name="gender" checked onChange={this.handleChangeInput.bind(this)}/>
                                                    Male
                                                </label>
                                            </div>
                                            <div className="radio-inline">
                                                <label>
                                                    <input type="radio" value="1" name="gender" onChange={this.handleChangeInput.bind(this)}/>
                                                    Female
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-xs-12 col-sm-6">
                                        <div class="form-group">
                                            <label>Phone</label>
                                            <input name="phone" value={this.state.phone} type="text" class="form-control" placeholder="Enter ..."
                                                onChange={this.handleChangeInput.bind(this)} required/>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6">
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input name="email" value={this.state.email} type="email" class="form-control" placeholder="Enter ..."
                                                onChange={this.handleChangeInput.bind(this)} required/>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-xs-12 col-sm-6">
                                        <div class="form-group">
                                            <label>Region</label>
                                            <select name="regionId" class="form-control" required onChange={this.handleChangeInput.bind(this)}>
                                                <option value="" disabled selected>Please pick a region</option>
                                                {regions}
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6">
                                        <div class="form-group">
                                            <label>Product</label>
                                            <select name="productId" class="form-control" required onChange={this.handleChangeInput.bind(this)}>
                                                <option value="" disabled selected>Please pick a product</option>
                                                {products}
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-xs-12">
                                        <div class="form-group">
                                            <label>Notes</label>
                                            <textarea name="notes" class="form-control" placeholder="URGENT - PLEASE CONTACT ASAP" rows="5"
                                                onChange={this.handleChangeInput.bind(this)} value={this.state.notes}></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="box-footer">
                                <Link to="/leads" className="btn btn-default">
                                    Cancel
                                </Link>
                                <button type="submit" class="btn btn-primary pull-right">Create</button>
                            </div>
                        </div>
                    </div>
                    {/* <div class="col-md-4">
                        <div class="box box-success">
                            <div class="box-header with-border">
                                <h3 class="box-title">Actions</h3>
                            </div>
                            <div class="box-body">
                                <div class="form-group">
                                    <label>Tipster reference</label>
                                    <select name="tipsterId" class="form-control" onChange={this.handleChangeInput.bind(this)} required>
                                        <option value="" disabled>Please pick a tipster</option>
                                        {tipster}
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