import React, { Component } from 'react';
import FormErrors from '../FormErrors';

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            remember: false,
            formErrors: { email: '', password: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(value);
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
     }

    _clickLogin() {
        if (this.state.formValid) {
            this.setState(this.state);
            var { onLogin } = this.props;
            onLogin(this.state);
        }
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
                                        <input id="email" type="email" className={`form-control ${this.errorClass(this.state.formErrors.email)}`} name="email" require
                                            value={this.state.email} placeholder="Email" onChange={this.handleUserInput} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input id="password" type="password" className="form-control ${this.errorClass(this.state.formErrors.email)}`}" name="password" required
                                            value={this.state.password} placeholder="passWord" onChange={this.handleUserInput} />
                                    </div>
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" name="remember" value={this.state.remember} onChange={this.handleUserInput} /> Remember Me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div type="submit" className="btn btn-primary" onClick={this._clickLogin.bind(this)}
                                            disabled={!this.state.formValid}>
                                            Login
                                        </div>
                                        <p className="text-right">
                                            <a className="btn btn-link btn-forget">
                                                Forgot Your Password?
                                            </a>
                                        </p>
                                    </div>
                                </form>
                                <FormErrors formErrors={this.state.formErrors}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}