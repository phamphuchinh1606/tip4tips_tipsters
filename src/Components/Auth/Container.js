import React, { Component } from 'react';

export default class Container extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            passWord : ''
        }
    }

    _clickLogin(){
        this.state.email = this.refs.email;
        this.state.passWord = this.refs.passWord;
        this.setState(this.state);
        var {onLogin} = this.props;
        onLogin(this.state);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default login__wrapper form__transparent">
                            <div className="panel-heading">Login</div>
                            <div className="panel-body">
                                <form className="login__form">
                                    <div className="form-group">
                                        <label htmlFor="email">E-Mail Address</label>
                                        <input id="email" type="email" className="form-control" name="email" ref="email"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input id="password" type="password" className="form-control" name="password" required ref="passWord"/>
                                    </div>
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" name="remember" /> Remember Me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div type="submit" className="btn btn-primary" onClick={this._clickLogin.bind(this)}>
                                            Login
                                        </div>
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