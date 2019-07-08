import React from 'react';
import './base.css';
import './custom.css';

function validate(email, password) {
    // true means invalid, so our conditions got reversed

    const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return {
      email: email.length === 0,
      password: password.length === 0
    };

  }

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
        return emailRegex.test(this.state.email);
    }

    passValidation = () => {
        const passwordRegex = /^[a-zA-Z0-9_@!#()]{8,}/;	
        return passwordRegex.test(this.state.password);
    }

    handleBlur = (field) => (evt) => {    
        this.setState({      
            touched: { ...this.state.touched, [field]: true },    
        });     
    }

    render() {
        const buttonDisabled = this.inputValidation() ? "" : "disabled";
        const errors = validate(this.state.email, this.state.password);
        
        const shouldMarkError = field => {
          //const hasError = errors[field];
          //const shouldShow = this.state.touched[field]; 
          
          if (field === "email"){ 
            return this.emailValidation() ? false : true
          }
          else if (field === "password"){
            return this.passValidation() ? false : true
          }
          
          //return hasError ? shouldShow : false;
        };



        return ( 
            <div class={`login-form ${this.props.classes.container} `} >
                { !this.props.hideForm && <form onSubmit={this.handleSubmit}>
                    <h3 class={`text-center ${this.props.classes.title}`}>{this.props.title}</h3>
                    {this.props.fields.fields.map(field =>(
                        <div class="form-group">
                            <input 
                                class={`form-control ${this.props.classes.input} ${shouldMarkError(field.name) ? `error-${field.name}` : ""}`}                     
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
                    ))
                    }               
					<input 
                        class={`btn btn-primary btn-block ${this.props.classes.input} ${buttonDisabled}`} 
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
