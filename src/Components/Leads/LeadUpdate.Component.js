import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apiCaller from '../../API/apiCaller';
import * as URL from '../../API/URL';

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
            lead: {}
        }
    }

    async componentDidMount() {
        let {tipsterId, loadUpdate } = this.props;
        let { id } = this.props.match.params;
        let urlEndPoint = URL.END_POINT_LEAD_UPDATE + "/" + tipsterId + "/" + id;
        await apiCaller(urlEndPoint,"GET", null).then(res=>{
            if(res){
                this.state.regions = res.data.regions;
                this.state.products = res.data.products;
                this.state.tipsters = res.data.tipsters;
                this.state.lead = res.data.lead;
                this.setState(this.state);
            }
        });
    }

    handleChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ lead: {[name]: value }});
    }

    render() {
        let regions = this.state.regions.map((item, index) => {
            return (
                <option value={item.id} key={index}>{item.name}</option>
            )
        });

        let products = this.state.products.map((item, index) => {
            return (
                <option value={item.id} key={index}>{item.name}</option>
            )
        });

        let tipsters = this.state.tipsters.map((item, index) => {
            return (
                <option value={item.id} selected> {item.username} </option>
            )
        });

        let lead = this.state.lead;
        let inputMale = <input type="radio" value="0" name="gender" />;
        let inputFemale = <input type="radio" value="1" name="gender" />
        if(lead){
            if(lead.gender === '0'){
                inputMale = <input type="radio" value="0" name="gender" checked/>;
            }else{
                inputFemale = <input type="radio" value="1" name="gender" checked/>
            }
        }
        return (
            // <form method="post" action="">
                <div className="row">
                    <div className="col-md-8">
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
                                <div className="row">
                                    <div className="col-xs-6">
                                        {/* text input */}
                                        <div className="form-group">
                                            <label>Full name</label>
                                            <input name="fullname" value={lead.fullname} type="text" className="form-control" placeholder="Enter ..." required onChange={this.handleChangeInput.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="col-xs-6">
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
                                    <div className="col-xs-6">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input name="phone" value={lead.phone} type="text" className="form-control" placeholder="Enter ..." onChange={this.handleChangeInput.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="col-xs-6">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input name="email" value={lead.email} type="text" className="form-control" placeholder="Enter ..." onChange={this.handleChangeInput.bind(this)}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-6">
                                        <div className="form-group">
                                            <label>Region</label>
                                            <select name="region" className="form-control" required>
                                                <option value="" disabled selected>Please pick a region</option>
                                                {regions}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xs-6">
                                        <div className="form-group">
                                            <label>Product</label>
                                            <select name="product" className="form-control" required>
                                                <option value="" disabled selected>Please pick a product</option>
                                                {products}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div className="form-group">
                                            <label>Notes</label>
                                            <textarea name="notes" className="form-control" placeholder="URGENT - PLEASE CONTACT ASAP" rows="5" value={lead.notes} 
                                                onChange={this.handleChangeInput.bind(this)}>
                                            </textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box-footer">
                                <a href="" className="btn btn-default">Cancel</a>
                                <button type="submit" onClick="return false" className="btn btn-primary pull-right">Create</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box box-success">
                            <div className="box-header with-border">
                                <h3 className="box-title">Actions</h3>
                            </div>
                            <div className="box-body">
                                <div className="form-group">
                                    <label>Tipster reference</label>
                                    <select name="tipster" className="form-control">
                                        <option value="" disabled selected>Please pick a tipster</option>
                                        {tipsters}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            // </form>
        );
    }
}