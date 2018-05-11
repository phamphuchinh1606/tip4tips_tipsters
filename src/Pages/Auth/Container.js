import React, { Component } from 'react';

export default class Container extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default login__wrapper form__transparent">
                            <div className="panel-heading">Login</div>
                            <div className="panel-body">
                                <form className="login__form" method="POST">
                                    <div className="form-group">
                                        <label htmlFor="email">E-Mail Address</label>
                                        <input id="email" type="email" className="form-control" name="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input id="password" type="password" className="form-control" name="password" required />
                                    </div>
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" name="remember" /> Remember Me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary">
                                            Login
                                        </button>
                                        <p className="text-right">
                                            <a className="btn btn-link btn-forget">
                                                Forgot Your Password?
                                            </a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}