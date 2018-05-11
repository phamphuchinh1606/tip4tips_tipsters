import React, { Component } from 'react';
import './css/LeadNew.css';

export default class LeadNewPage extends Component {
    render() {
        return (
            <form role="form" method="post" action="">
                <div className="row">
                    <div className="col-md-8">
                        {/* create manager form */}
                        <div className="box box-success">
                            {/* box-header */}
                            <div className="box-header with-border">
                                <h3 className="box-title">Create Lead</h3>
                                <a href="" className="btn btn-xs btn-default pull-right">
                                    <i className="fa fa-angle-left"></i> Back to list
                                </a>
                            </div>
                            
                            {/* box-body */}
                            <div className="box-body">
                                <div className="row">
                                    <div className="col-xs-6">
                                        {/* text input */}
                                        <div className="form-group">
                                            <label>Full name</label>
                                            <input name="fullname" value="" type="text" className="form-control" placeholder="Enter ..." required/>
                                        </div>
                                    </div>
                                    <div className="col-xs-6">
                                        <div className="form-group group__gender">
                                            <label className="Gender">Gender</label>
                                            <div className="radio-inline">
                                                <label>
                                                    <input type="radio" value="0" name="gender" checked/>
                                                    Male
                                                </label>
                                            </div>
                                            <div className="radio-inline">
                                                <label>
                                                    <input type="radio" value="1" name="gender"/>
                                                    Female
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-xs-6">
                                        <div class="form-group">
                                            <label>Phone</label>
                                            <input name="phone" value="" type="text" class="form-control" placeholder="Enter ..."/>
                                        </div>
                                    </div>
                                    <div class="col-xs-6">
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input name="email" value="" type="text" class="form-control" placeholder="Enter ..."/>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-xs-6">
                                        <div class="form-group">
                                            <label>Region</label>
                                            <select name="region" class="form-control" required>
                                                <option value="" disabled selected>Please pick a region</option>
                                                <option value="1">1</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-xs-6">
                                        <div class="form-group">
                                            <label>Product</label>
                                            <select name="product" class="form-control" required>
                                                <option value="" disabled selected>Please pick a product</option>
                                                <option value="1">1</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-xs-12">
                                        <div class="form-group">
                                            <label>Notes</label>
                                            <textarea name="notes" class="form-control" placeholder="URGENT - PLEASE CONTACT ASAP" rows="5"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="box-footer">
                                <a href="" class="btn btn-default">Cancel</a>
                                <button type="submit" class="btn btn-primary pull-right">Create</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="box box-success">
                            <div class="box-header with-border">
                                <h3 class="box-title">Actions</h3>
                            </div>
                            <div class="box-body">
                                <div class="form-group">
                                    <label>Tipster reference</label>
                                    <select name="tipster" class="form-control">
                                        <option  value="" disabled selected>Please pick a tipster</option>
                                        <option value="1" >2 </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}