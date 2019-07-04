import React from 'react';
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
            <div className="App">
                <h3>{this.props.fields.label}</h3>
                <form onSubmit={this.handleSubmit}>
                    {this.props.fields.fields.map(field => (
                        <div>
                            <label for={field.name}>{field.label}</label>
                            <input
                                type={field.type}
                                value={this.state[field.name]}
                                onChange={this.handleChange(field.name)}
                                id={field.name}
                                placeholder={field.placeholder}
                                name={field.name} />
                        </div>
                    ))
                    }
                    <input type="submit" />
                </form>
            </div>
        );
    }

}

export default LoginForm;
