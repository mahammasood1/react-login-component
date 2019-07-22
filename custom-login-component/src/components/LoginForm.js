import React from 'react';
import '../App.css'
import './base.css';
import './custom.css';
import {FormErrors} from '../FormErrors';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     name: "",
        //     input: []
        //   };
        this.state = {
            email:'',
            password:'',
            formErrors: {Email: '', Password: ''},
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
            [field]: value}
             ,  () => {this.validateField(name, value) });
        
    }

    // emailValidation = (values) => {
    //     let errors = {};
    //     if (!values.email) {
    //         errors.email = 'Email address is required';
    //       } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    //         errors.email = 'Email address is invalid';
    //       }
    //     return errors;
    // }

    validateField(name, value) {
        let formErrors = this.state.formErrors;
        let emailValid = this.state.isEmailValid;
        let passwordValid = this.state.isPwdValid;
      
        switch(name) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            formErrors.Email = emailValid ? '' : ' is invalid';
            break;

          case 'password':
            passwordValid = value.length >= 6;
            formErrors.Password = passwordValid ? '': ' must be atleast 6 characters';
            break;

          default:
            break;
        }
        this.setState({formErrors: formErrors,
                        isEmailValid: emailValid,
                        isPwdValid: passwordValid
                      }, this.formValidation);
      }
      
      formValidation() {
        this.setState({isFormValid: this.state.isEmailValid && this.state.isPwdValid});
      }

      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
     }

     appendInput() {

        this.setState({
            input: this.state.input.concat([this.props.fields.classes.name])
          });

          console.log('state',this.state);

        // var newInput = `input-${this.state.inputs.length}`;
        // this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
    }

    render() {
        return (
            <div id="container">
                <form onSubmit={this.handleSubmit}>
                    
                    <h3 className={this.props.fields.classes.title}>{this.props.fields.label}</h3>

                    { <div class="error">
                        <FormErrors formErrors={this.state.formErrors}/>
                    </div> }

                    {this.props.fields.fields.map(field =>(
                        <div>
                        <div class="label">
                            {field.label}
                        </div>

                        <div>
                           <input 
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

                    {<div class="error">
                        <FormErrors formErrors={this.state.formErrors}/>
                    </div> }
                    <div id="bottom">
                    <div className={this.props.fields.classes.button}>
                    { <input type="submit" disabled={!this.state.isFormValid}/>}
                   
                    </div>   

                    <div>
                    <input type="checkbox"/><label class="check" for="checkbox">Remember Me</label>
                    </div>

                    </div>   

				</form>
            </div>
        );
    }
}

export default LoginForm;
