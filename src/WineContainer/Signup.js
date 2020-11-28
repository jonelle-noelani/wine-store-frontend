import React from 'react';

class Signup extends React.Component {constructor() {
    super();

    this.state = {
        errormsg: []
    }
}

    handleSubmit = (e) => {
      e.preventDefault()
        
      fetch('http://localhost:3000/api/v1/users', {
        method: 'POST',
        body: JSON.stringify({
           user: {
            email: e.target.email.value,
            password: e.target.password.value
           } 
        }),
        headers: {
            "Content-type": "application/json"
        }
      })
      .then(resp => resp.json())
      .then(err => this.setState({errormsg: err.error}))
    }

  render() {
      // console.log(this.state.errormsg)
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Signup</h1>
        <div>
          <input type="text" name="email" placeholder="Email Address" />
          <label htmlFor="email">Email</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Signup" />
        <div>{this.state.errormsg}</div>
      </form>
    );
  }
}

export default Signup;