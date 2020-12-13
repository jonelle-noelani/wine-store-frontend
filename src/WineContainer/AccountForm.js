import React, { Component } from 'react';

class AccountForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: []
        }
    }

    handleChange = (e) => {
        this.setState({ input: {
            ...this.state.input, [e.target.name]: e.target.value
        }});
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.input)
        this.props.save(this.state.input, this.props.user.id)
    }

    accountStyle = {
        width: '300px',
        height: 'auto',
        paddingLeft: '60px',
        paddingRight: '60px',
        paddingBottom: '20px',
        paddingTop: '20px',
        margin: 'auto',
        background: 'gray',
        boxShadow: "3px 4px #00ff00",
    }


    render() {
        const { email, name, dob, line, city, state, postal_code } = this.props.user

        return ( 
        <div>
            <h1>Account Info</h1>

            <div style={this.accountStyle}>
        <form onSubmit={this.handleSubmit} >
        <table>
            <tbody>
            <tr>
                <td><label htmlFor="email">Email</label></td>
                <td><input name="email" type="text" readOnly value={email} /></td>

            </tr>
            
            <tr>
                <td><label htmlFor="password">Password</label></td>
                <td><input name="password" type="text" placeholder="********" onChange={this.handleChange}/></td>
            </tr>

            <tr>
                <td><label htmlFor="name">Name</label></td>
                <td><input name="name" type="text" defaultValue={name} onChange={this.handleChange} /></td>
            </tr>

            <tr>
                <td><label htmlFor="dob">Date Of Birth</label></td>
                <td><input name="dob" type="text" defaultValue={dob} onChange={this.handleChange} /></td>
            </tr>

            <tr>
                <td><label htmlFor="line">Address</label></td>
                <td><input name="line" type="text" defaultValue={line} onChange={this.handleChange} /></td>
            </tr>

            <tr>
                <td><label htmlFor="city">City</label></td>
                <td><input name="city" type="text" defaultValue={city} onChange={this.handleChange} /></td>
            </tr>

            <tr>
                <td><label htmlFor="State">State</label></td>
                <td><input name="state" type="text" defaultValue={state} onChange={this.handleChange} /></td>
            </tr>

            <tr>
                <td><label htmlFor="postal_code">Zip Code</label></td>
                <td><input name="postal_code" type="text" defaultValue={postal_code} onChange={this.handleChange} /></td>
            </tr>
            <tr>
                <td><input value="Save Changes" type="submit" /></td>
            </tr>
            </tbody>
        </table>
        </form>
        </div>

        </div>
        )
    }
}

export default AccountForm;