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
            <div class={`login-form ${this.props.fields.classes.container} `} >
                <form onSubmit={this.handleSubmit}>
                    <h3 class={`text-center ${this.props.fields.classes.title}`}>{this.props.fields.label}</h3>
                    {this.props.fields.fields.map(field =>(
                        <div class="form-group">
                            <input class="form-control" required="required"
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
					<input class="btn btn-primary btn-block" type="submit"/>  
                    <br/>
                    <div class="clearfix">
                        <label class="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
                        <a href="#bla" class="pull-right">Forgot Password?</a>
                    </div>                              
				</form>
            </div>
        );
    }
}

export default LoginForm;
