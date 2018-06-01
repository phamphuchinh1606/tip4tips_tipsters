import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as Utils from '../../Commons/Utils';

export default class UserEditComponent extends Component {
    render() {
        return (
            <div class="row">
                <div class="col-md-4 col-md-push-8">
                    {/* Profile Image */}
                    <div class="box box-warning">
                        <div class="box-header with-border">
                            <h3 class="box-title">Actions</h3>
                        </div>
                        <div class="box-body box-profile">
                            <div class="upload__area-image">
                                <span>
                                    <img id="imgHandle" src="" />
                                    <label for="imgAnchorInput">Upload image</label>
                                </span>
                                <p><small>(Please upload a file of type: jpeg, png, jpg, gif, svg.)</small></p>
                                <h4>Avatar</h4>
                            </div>
                        </div>
                        <div class="box-body box-points">
                            <h4>Points total: <span>0</span> points</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-md-pull-4">
                    {/* create manager form */}
                    <div class="box box-warning">
                        <div class="box-header with-border">
                            <h3 class="box-title">Edit Tipster</h3>
                            <span class="group__action pull-right">
                                <a href="{{route('changePassword')}}" class="btn-xs btn-link">Change Your Password</a>
                                <a href="{{route('tipsters.index')}}" class="btn btn-xs btn-default">
                                    <i class="fa fa-angle-left"></i> Back to home
                                </a>
                            </span>
                        </div>
                        <form role="form" method="post" action="" enctype="multipart/form-data">
                            <div class="box-body">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label style={{ width: 300 }}>Preferred language</label>
                                            <div class="radio-inline">
                                                <label>
                                                    <input type="radio" value="vn" name="preferred_lang" checked />
                                                    Vietnam
                                                </label>
                                            </div>
                                            <div class="radio-inline">
                                                <label>
                                                    <input type="radio" value="en" name="preferred_lang" />
                                                    English
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label style={{ width: 300 }}>Status</label>
                                            <div class="radio-inline">
                                                <label>
                                                    <input type="radio" value="0" name="status" checked />
                                                    Active
                                                </label>
                                            </div>
                                            <div class="radio-inline">
                                                <label>
                                                    <input type="radio" value="1" name="status" />
                                                    Non Active
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        {/* text input */}
                                        <div class="form-group{{ $errors->has('username') ? ' has-error' : '' }}">
                                            <label>Username</label>
                                            <input name="username" type="text" class="form-control" value="" />
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group{{ $errors->has('fullname') ? ' has-error' : '' }}">
                                            <label>Full name</label>
                                            <input name="fullname" type="text" class="form-control" value="" placeholder="Enter ..." />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Birthday</label>
                                            <input name="birthday" type="date" class="form-control" value="" placeholder="Enter ..." />
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label style={{ width: 300 }}>Gender</label>
                                            <div class="radio-inline">
                                                <label><input type="radio" value="0" name="gender" checked />
                                                    Male
                                                </label>
                                            </div>
                                            <div class="radio-inline">
                                                <label><input type="radio" value="1" name="gender" />
                                                    Female
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                                            <label>Email</label>
                                            <input name="email" type="text" class="form-control" value="" placeholder="Enter ..." />
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Phone</label>
                                            <input name="phone" type="text" class="form-control" value="" placeholder="Enter ..." />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Address</label>
                                            <textarea name="address" class="form-control" placeholder="Enter ..." rows="4">address</textarea>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Region</label>
                                            <select name="region" class="form-control">
                                                <option value="" disabled selected>Please pick a region</option>
                                                <option value="1">Ho chi minh</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="box-footer">
                                <a href="" class="btn btn-default">Cancel</a>
                                <button type="submit" class="btn btn-primary pull-right">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}