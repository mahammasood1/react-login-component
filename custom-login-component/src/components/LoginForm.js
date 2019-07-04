import React from 'react';
import {LoginStyle} from './LoginStyle.css';

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
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <h3>{this.props.fields.label}</h3>
                    {this.props.fields.fields.map(field =>(
                        <div>
                            {/* <label for={field.name}>{field.label}</label> */}
                           
                            <input class="input-con"
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

					<div class="container-submit">
					
                         <input type="submit"/>
					</div>
                        
					
                                
                            
                        
                    
                   

                    
                </form>
            </div>
        );
    }

}

export default LoginForm;
