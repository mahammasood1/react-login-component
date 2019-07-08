import React from 'react';
import './base.css';
import './custom.css';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            touched: {      
                email: false,        
                password: false,  
            }, 
        };
    }

    handleSubmit = (e) => {
        alert(this.state.email);
        alert(this.state.password);
        e.preventDefault();
    }

    handleChange = (field) => (event) => {
        this.setState({
            [field]: event.target.value,
        })
    }

    inputValidation = () => {  
        const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const passwordRegex = /^[a-zA-Z0-9_@!#()]{8,}/;	
        // const emailRegex = new RegExp(emailRegex);
        // const passwordRegex = new RegExp(passwordRegex);
        return (
            emailRegex.test(this.state.email) &&
            passwordRegex.test(this.state.password)
        );
    };

    emailValidation = () => {
        const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const result = emailRegex.test(this.state.email);
        if (this.state.touched.email && !this.props.disableAlert){
            return result ? "" : "error-email"
        }
        else return;
    }

    passValidation = () => {
        const passwordRegex = /^[a-zA-Z0-9_@!#()]{8,}/;	
        const result = passwordRegex.test(this.state.password);
        if (this.state.touched.password && !this.props.disableAlert){
            return result ? "" : "error-pass";
        }
        else return;
    }

    handleBlur = (field) => (evt) => {    
        this.setState({      
            touched: { ...this.state.touched, [field]: true },    
        });     
    }

    render() {
        const buttonDisabled = this.inputValidation() ? "" : "disabled";

        return ( 
            <div class={`login-form ${this.props.classes.container} `} >
                { !this.props.hideForm && <form onSubmit={this.handleSubmit}>
                    <h3 class={`text-center ${this.props.classes.title}`}>{this.props.title}</h3>
                    {this.props.fields.fields.map(field =>(
                        <div class="form-group">
                            <div class={`input-group ${this.props.classes.inputGroup}`}>
                                {field.name === "email" ? <span class="input-group-addon"><i class="fa fa-user"></i></span> : <span class="input-group-addon"><i class="fa fa-lock"></i></span>}
                                <input 
                                    class={`form-control ${this.props.classes.input} ${field.name === "email"} ? ${this.emailValidation()} : ${this.passValidation()}`}                     
                                    required="required" 
                                    onBlur={this.handleBlur(field.name)}
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
					<input 
                        class={`btn btn-primary btn-block ${this.props.classes.input} ${this.props.buttonValidation && buttonDisabled}`} 
                        type="submit" 
                        onClick={this.inputValidation}
                    />                 
                    <br/>
                    <div class="clearfix">
                        {!this.props.hideRememberMe && <label class={`pull-left checkbox-inline ${this.props.classes.rememberMeLabel}`}><input type="checkbox"/> Remember me</label>}
                        {!this.props.hideForgotPass && <a href="#bla" class="pull-right">Forgot Password?</a> }                      
                    </div>                              
				</form> }
            </div>
        );
    }
}

export default LoginForm;
