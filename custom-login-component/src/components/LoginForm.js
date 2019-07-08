import React from 'react';
import './base.css';
import './custom.css';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
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

    render() {
        return (
            <div class={`login-form ${this.props.classes.container} `} >
                { !this.props.hideForm && <form onSubmit={this.handleSubmit}>
                    <h3 class={`text-center ${this.props.classes.title}`}>{this.props.title}</h3>
                    {this.props.fields.fields.map(field =>(
                        <div class="form-group">
                            <input class={`form-control ${this.props.classes.input}`} required="required"
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
					<input class={`btn btn-primary btn-block ${this.props.classes.input}`} type="submit"/>  
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
