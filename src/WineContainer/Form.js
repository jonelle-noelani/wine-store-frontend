import React from 'react';

export default class Form extends React.Component {
    state = {
        email: "",
        password: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state, this.props.routerProps)
    }

    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    formStyle = {
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

    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
            <div style={this.formStyle}>
            <form onSubmit={this.handleSubmit} >
            <div>
            <input type="text" name="email" placeholder="Email Address" onChange={this.handleChange} />
            <label htmlFor="email">Email</label>
            </div>
            <div>
             <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
            <label htmlFor="password">Password</label>
             </div>
            <input type="submit" value={this.props.name} />
            <div>{this.props.err}</div>
            </form>
            </div>
            </div>
        )
    }
}