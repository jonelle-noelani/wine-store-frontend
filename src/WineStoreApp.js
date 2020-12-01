import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';
import Header from './header/Header';
import Form from './WineContainer/Form';

import { withRouter } from 'react-router';


class WineStoreApp extends Component {constructor() {
    super();

    this.state = {
        wines: [],
        featured: [],
        user: [],
        email: "",
        token: "",
        errormsg: []
    }
}

componentDidMount(){
    fetch("http://localhost:3000/api/v1/wines")
    .then(res => res.json())
    .then(wines => this.setState({
        wines: wines,
        featured: wines.find(wine => wine.name === "House of Arras")
    }))
}

renderForm = (routerProps) => {
    // console.log(routerProps)
    if (routerProps.location.pathname === "/login"){
        return <Form name="Login" handleSubmit={this.handleLogin} err={this.state.errormsg} routerProps={routerProps}/>
    } else if (routerProps.location.pathname === "/signup"){
        return <Form name="Signup" handleSubmit={this.handleSignup} err={this.state.errormsg} routerProps={routerProps} />
     } 
}

handleLogin = (info, routerProps) => {
    console.log('login')
    // console.log(info)
    this.handleAuthFetch(info, 'http://localhost:3000/api/v1/login', routerProps)
}

handleSignup = (info, routerProps) => {
    console.log('signup')
    this.handleAuthFetch(info, 'http://localhost:3000/api/v1/users', routerProps)
}

handleAuthFetch = (info, request, routerProps) => {
    fetch(request, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
                email: info.email,
                password: info.password
            }
          })
      })
      .then(res => res.json())
    //   .then(console.log)
      .then(data => {
          if (data.message) this.setState({errormsg: data.message})
          if (data.user) {this.setState({
            user: data.user,
            email: data.user.email,
            token: data.jwt,
            errormsg: ''},
        //   console.log(routerProps.history.push),
          () => {routerProps.history.push('/account')}          
          )}
        console.log(data)
    })
}
        //   () => {this.history.push('/account')}


selectWines = (selectedwines) => {
    console.log(selectedwines)
    this.setState({wines: selectedwines})
}

    render() {
        // console.log(this.state.wines)
        // console.log(this.state.featured)
        console.log(this.state)
        return (
            <div className="winestoreapp">
                <Router>
                    <Header wines={this.state.wines} selectWines={this.selectWines} />
                    <div className="winecontainer">
                    <AppRouter 
                    wines={this.state.wines} 
                    featured={this.state.featured} 
                    renderForm={this.renderForm} 
                    email={this.state.email}
                    token={this.state.token}
                    />
                    </div>
                </Router>
            </div>
        )
    }
}
export default WineStoreApp;
withRouter(WineStoreApp);