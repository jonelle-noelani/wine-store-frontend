import React from 'react';

class Login extends React.Component {constructor() {
    super();

    this.state = {
        errormsg: []
    }
}

    handleSubmit = (e) => {
      e.preventDefault()
        
      fetch('http://localhost:3000/api/v1/profile', {
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer <token>`
        }
      })
    }

  render() {
      console.log(this.state.errormsg)
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <div>
          <input type="text" name="email" placeholder="Email Address" />
          <label htmlFor="email">Email</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
        <div>{this.state.errormsg}</div>
      </form>
    );
  }
}

export default Login;