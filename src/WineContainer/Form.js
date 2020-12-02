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

    render(){
        return(
            <form onSubmit={this.handleSubmit} >
            <h1>{this.props.name}</h1>
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
        )
    }
}