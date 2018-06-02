import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import $ from 'jquery';
import * as Utils from '../../Commons/Utils';
import * as URL from '../../API/URL';
import apiCaller from '../../API/apiCaller';

export default class UserEditComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            userInfo: {},
            regions: []
        }
    }

    async componentWillMount(){
        let { id } = this.props.match.params;
        let {onLoadUpdate, onLoginSuccess} = this.props;
        let userInfo = Utils.getLogin();
        onLoginSuccess(Utils.getLogin());
        if (userInfo) {
            try {
                await this.props.onLoaddingTrue();
                let urlEndPoint = URL.END_POINT_USER_UPDATE + "/" + userInfo.userId;
                await apiCaller(urlEndPoint, "GET", null).then(res => {
                    if(res.data && res.data.userInfo){
                        this.state.userInfo = res.data.userInfo;
                        this.state.regions = res.data.regions;
                        this.setState(this.state);
                    }
                });
            } catch (error) {
                console.log(error);
            } finally {
                await this.props.onLoaddingFalse();
            }
        }
    }

    componentDidMount() {
        let parrentThis = this;
        this.timerID = setInterval(
            () => {
                this.props.onUpdateInit();
            },
            3000
        );
    }

    handleChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({userInfo: {...this.state.userInfo,[name]: value }});
    }

    onSubmit = (e) => {
        e.preventDefault();
        let userInfo = this.state.userInfo;
        if(userInfo){
            console.log(userInfo);
            this.props.onUpdateAction(userInfo);
        }
    }

    render() {
        let {userUpdateStatus} = this.props;
        let headerError = [];
        if(userUpdateStatus && userUpdateStatus.status){
            if(userUpdateStatus.status == "0"){
                headerError = <div className="alert alert-info clearfix">
                                    <p>{userUpdateStatus.message}</p>
                                </div>;
            }else{
                headerError = <div className="alert alert-danger clearfix">
                                    <p>{userUpdateStatus.message}</p>
                                </div>;
            }
            $(window).scrollTop(0);
        }
        let{userInfo} = this.state;
        let regions = this.state.regions.map((item, index) => {
            if (userInfo.region_id == item.id) {
                return <option value={item.id} key={index} selected>{item.name}</option>
            }
            return (
                <option value={item.id} key={index}>{item.name}</option>
            )
        });

        let inputMale = (<input type="radio" value="0" name="gender" onChange={this.handleChangeInput.bind(this)}/>);
        let inputFemale = <input type="radio" value="1" name="gender" onChange={this.handleChangeInput.bind(this)}/>
        if (userInfo.gender === '0') {
            inputMale = <input type="radio" value="0" name="gender" checked onChange={this.handleChangeInput.bind(this)} />;
        } else {
            inputFemale = <input type="radio" value="1" name="gender" checked onChange={this.handleChangeInput.bind(this)} />
        }
        console.log(userInfo);

        return (
            <div className="user_edit row">
                <div className="col-md-8">
                    {/* create manager form */}
                    <div className="box box-warning">
                        <div className="box-header with-border">
                            <h3 className="box-title">Edit Tipster</h3>
                            <span className="group__action pull-right">
                                {/* <a href="{{route('changePassword')}}" className="btn-xs btn-link">Change Your Password</a> */}
                                <Link to={`/user/show/${userInfo.userId}`} className="btn btn-xs btn-default">
                                    <i className="fa fa-angle-left"></i> Back to show user
                                </Link>
                            </span>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            {headerError}
                            <div className="box-body">
                                <div className="row">
                                    <div className="col-sm-6">
                                        {/* text input */}
                                        <div className="form-group">
                                            <label>Username</label>
                                            <input name="username" type="text" className="form-control" value={userInfo.username} 
                                                onChange={this.handleChangeInput.bind(this)} disabled/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Full name</label>
                                            <input name="fullname" type="text" className="form-control" value={userInfo.fullname} placeholder="Enter ..." 
                                                onChange={this.handleChangeInput.bind(this)} required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Birthday</label>
                                            <input name="birthday" type="date" className="form-control" value={userInfo.birthday} placeholder="Enter ..." 
                                                onChange={this.handleChangeInput.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label className="width100_percent">Gender</label>
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
                                    <div className="col-sm-6">
                                        <div className="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                                            <label>Email</label>
                                            <input name="email" type="text" className="form-control" value={userInfo.email} placeholder="Enter ..." 
                                                onChange={this.handleChangeInput.bind(this)} disabled/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input name="phone" type="text" className="form-control" value={userInfo.phone} placeholder="Enter ..." 
                                                onChange={this.handleChangeInput.bind(this)} required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Address</label>
                                            <textarea name="address" className="form-control" placeholder="Enter ..." rows="4"
                                                onChange={this.handleChangeInput.bind(this)} value={userInfo.address}>
                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Region</label>
                                            <select name="region" className="form-control" onChange={this.handleChangeInput.bind(this)} required>
                                                <option value="" disabled selected>Please pick a region</option>
                                                {regions}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer">
                                <Link to="/" className="btn btn-default">
                                    Cancel
                                </Link>
                                <button type="submit" className="btn btn-primary pull-right">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-4">
                    {/* Profile Image */}
                    <div className="box box-warning">
                        <div className="box-header with-border">
                            <h3 className="box-title">Actions</h3>
                        </div>
                        <div className="box-body box-profile">
                            <div className="upload__area-image">
                                <span>
                                    <img id="imgHandle" src={`${userInfo.path_image}/${userInfo.avatar}`} />
                                    <label htmlFor="imgAnchorInput">Upload image</label>
                                </span>
                                <p><small>(Please upload a file of type: jpeg, png, jpg, gif, svg.)</small></p>
                                <h4>Avatar</h4>
                            </div>
                        </div>
                        <div className="box-body box-points">
                            <h4>Points total: <span>0</span> points</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}