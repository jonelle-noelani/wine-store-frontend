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
        selectedType: 'all',
        selectedRegion: 'all',
        // filteredType: [],
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
        featured: wines.find(wine => wine.name === "House of Arras"),
        token: localStorage.getItem('token')
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
            () => {routerProps.history.push('/account')
            localStorage.setItem('token', data.jwt)
            }          
          )}
        console.log(data)
    })
}
        //   console.log(routerProps.history.push),
        //   () => {this.history.push('/account')}

updateUser = (state, id) => {
    fetch(`http://localhost:3000/api/v1/users/${id}`, {
        method: 'PATCH',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.state.token}`
        },
        body: JSON.stringify({
            user: {
                password: state.password,
                name: state.name,
                dob: state.dob,
                line: state.line,
                city: state.city,
                state: state.state,
                postal_code: state.postal_code
            }
        })
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        // this.setState({...this.state.user, data})
    })
}

selectType = (type) => {
    console.log(type)
    this.setState({selectedType: type})
}

selectRegion = (region) => {
    console.log(region)
    this.setState({selectedRegion: region})
}

addToCart = (wine) => {
    fetch('http://localhost:3000/api/v1/cart_items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${this.state.token}`
        },
        body: JSON.stringify({wine_id: wine.id})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        this.setState({user: data.user})
    })
}

    render() {
        // console.log(this.state.wines)
        // console.log(this.state.featured)
        console.log(this.state)
        console.log(this.state.user.wines)
        return (
            <div className="winestoreapp">
                <Router>
                    <Header selectType={this.selectType} selectRegion={this.selectRegion} />
                    <div className="winecontainer">
                    <AppRouter 
                    wines={this.state.wines} 
                    type={this.state.selectedType}
                    region={this.state.selectedRegion}
                    featured={this.state.featured} 
                    user={this.state.user}
                    email={this.state.email}
                    token={this.state.token}
                    renderForm={this.renderForm} 
                    save={this.updateUser}
                    addToCart={this.addToCart}
                    />
                    </div>
                </Router>
            </div>
        )
    }
}
export default WineStoreApp;
withRouter(WineStoreApp);