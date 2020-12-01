import React from 'react';

class Login extends React.Component {constructor() {
    super();

    this.state = {
        email: "",
        token: "",
        errormsg: []
    }
}

    handleSubmit = (e) => {
      e.preventDefault()
      console.log('before the fetch')
      console.log(e)
        
      fetch('http://localhost:3000/api/v1/login', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
                email: e.target.email.value,
                password: e.target.password.value
            }
          })
      })
      .then(res => res.json())
      .then(data => {
        this.setState({errormsg: data.message,
        email: data.user.email,
        token: data.jwt}, () => {this.props.history.push('/account')})
        console.log(data)})

    //   fetch('http://localhost:3000/api/v1/profile', {
    //     method: 'GET',
    //     headers: {
    //         "Content-type": "application/json",
    //         "Authorization": `Bearer ${this.state.token}`
    //     }
    //   })
    }

  render() {
      // console.log(this.state)
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