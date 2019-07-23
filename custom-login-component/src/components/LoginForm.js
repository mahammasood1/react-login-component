import React from 'react';
import './base.css';
import './custom.css';
import { FormErrors } from '../FormErrors';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            formErrors: { Email: '', Password: '' },
            isEmailValid: false,
            isPwdValid: false,
            isFormValid: false
        }

    }

    handleSubmit = (event) => {

        alert(this.state.email);
        alert(this.state.password);
        event.preventDefault();
    }

    handleChange = (field) => (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [field]: value
        }
            , () => { this.validateField(name, value) });

    }

    validateField(name, value) {
        let formErrors = this.state.formErrors;
        let emailValid = this.state.isEmailValid;
        let passwordValid = this.state.isPwdValid;

        switch (name) {
            case 'email':
               // emailValid = value.match(this.props.fields.regex.emailRegex);
                const emailexp = this.props.fields.regex.emailRegex;
                const emailRegex = new RegExp(emailexp);
                emailValid = emailRegex.test(value)

                formErrors.Email = emailValid ? '' : ' is invalid';
                break;

            case 'password':

                //passwordValid = value.length >= 6;
                const passwordexp = this.props.fields.regex.pwdRegex;
                const pwdRegex = new RegExp(passwordexp);
                passwordValid = pwdRegex.test(value)

                formErrors.Password = passwordValid ? '' : ' must be atleast 8 characters';
                break;

            default:
                break;
        }
        this.setState({
            formErrors: formErrors,
            isEmailValid: emailValid,
            isPwdValid: passwordValid
        }, this.formValidation);
    }

    formValidation() {
        this.setState({ isFormValid: this.state.isEmailValid && this.state.isPwdValid });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    render() {
        return (
            <div class={`login-form ${this.props.fields.classes.container} `} >
                <form onSubmit={this.handleSubmit}>

                    <h3 class={`text-center ${this.props.fields.classes.title}`}>{this.props.fields.label}</h3>

                    {this.props.fields.fields.map(field => (
                        <div class="form-group">
                            <div class={`input-group ${this.props.fields.classes.inputGroup}`}>
                                <input class={`form-control 
                                        ${this.props.fields.classes.input}`
                                }
                                    required="required"
                                    type={field.type}
                                    value={this.state[field.name]}
                                    onChange={this.handleChange(field.name)}
                                    id={field.name}
                                    placeholder={field.placeholder}
                                    name={field.name}

                                />
                            </div>
                        </div>
                    ))
                    }

                    {/* {<div class="error">
                        <FormErrors formErrors={this.state.formErrors} />
                    </div>} */}
                 
                        <input
                            class={`btn btn-primary btn-block 
                            ${this.props.fields.classes.input}`
                            }
                            type="submit"
                            disabled={!this.state.isFormValid}
                        />

                        <br/>
                        <div class="clearfix">
                            {
                                <label class={`pull-left checkbox-inline 
                                        ${this.props.fields.classes.rememberMeLabel}`}>
                                    <input type="checkbox" /> Remember me
                            </label>
                            }
                            {<a href="#forgot" class="pull-right">Forgot Password?</a>}
                        </div>
                    
                </form>
            </div>


        );
    }
}

export default LoginForm;


{

}