import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as Utils from '../../Commons/Utils';

export default class UserShowComponent extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let { id } = this.props.match.params;
        let {onFetchUserShow, onLoginSuccess} = this.props;
        let userInfo = Utils.getLogin();
        onLoginSuccess(Utils.getLogin());
        if (userInfo) {
            onFetchUserShow(userInfo.userId);
        }
    }

    render() {
        let {userInfo} = this.props;
        return (
            <Fragment>
                <div class="row">
                    <div class="col-md-4 col-md-push-8">
                        {/* Profile Image */}
                        <div class="box box-primary">
                            <div class="box-body box-profile">
                                <div class="upload__area-image">
                                    <span>
                                        <img id="imgHandle" src={`${userInfo.path_image}/${userInfo.avatar}`} />
                                    </span>
                                </div>
                                <p class="text-muted text-center" title="Username">
                                    <strong>
                                        <i class="fa fa-user margin-r-5"></i>
                                        {userInfo.username}
                                </strong>
                                </p>
                                <p class="text-muted text-center tipster__point-total" title="Point total">
                                    <span>{userInfo.point}</span><br />
                                    points
                            </p>
                                <hr />
                                <p class="text-center">
                                    <span class="label label-success">Active</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 col-md-pull-4">
                        {/* About Me Box */}
                        <div class="box box-primary">
                            {/* box-header */}
                            <div class="box-header with-border">
                                <h3 class="box-title">Tipster detail</h3>
                                <span class="group__action pull-right">
                                    <Link to="/" class="btn btn-xs btn-default">
                                        <i class="fa fa-angle-left"></i> Back to list
                                    </Link>
                                    <Link to={`/user/edit/2`} class="btn btn-xs btn-info">
                                        <i class="fa fa-pencil"></i> Edit
                                    </Link>
                                </span>
                            </div>
                            <div class="box-body">
                                <div class="row box-line">
                                    <div class="col-sm-6">
                                        <p class="text-muted">
                                            <i class="fa fa-globe margin-r-5"></i> Preferred language
                                            <span class="text-highlight">{userInfo.lang_text}</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="row box-line">
                                    <div class="col-sm-6">
                                        <p class="text-muted">
                                            <i class="fa fa-address-book margin-r-5"></i> Fullname
                                            <span class="text-highlight">{userInfo.fullname}</span>
                                        </p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted">
                                            <i class="fa fa-building margin-r-5"></i> Level
                                            <span class="text-highlight">{userInfo.level}</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="row box-line">
                                    <div class="col-sm-6">

                                        <p class="text-muted">
                                            <i class="fa fa-calendar margin-r-5"></i> Birthday
                                        <span class="text-highlight">{userInfo.birthday}</span>
                                        </p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted">
                                            <i class="fa fa-venus-mars margin-r-5"></i> Gender
                                            <span class="text-highlight">{userInfo.showGender}</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="row box-line">
                                    <div class="col-sm-6">
                                        <p class="text-muted">
                                            <i class="fa fa-envelope margin-r-5"></i> Email
                                        <span class="text-highlight">{userInfo.email}</span>
                                        </p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted">
                                            <i class="fa fa-phone margin-r-5"></i> Phone
                                        <span class="text-highlight">{userInfo.phone}</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="row box-line">
                                    <div class="col-sm-6">
                                        <p class="text-muted">
                                            <i class="fa fa-home margin-r-5"></i> Address
                                        <span class="text-highlight">{userInfo.address}</span>
                                        </p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="text-muted">
                                            <i class="fa fa-map-marker margin-r-5"></i> Location
                                        <span class="text-highlight">{userInfo.region}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}