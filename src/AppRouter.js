import React from "react"
import { Route, Switch } from "react-router-dom"

import Featured from "./WineContainer/Featured"
import Browse from "./WineContainer/Browse"
import DisplayWine from "./WineContainer/DisplayWine"
import About from "./WineContainer/About"
import Contact from "./WineContainer/Contact"
import Cart from "./WineContainer/Cart"
// import Signup from "./WineContainer/Signup"
// import Login from "./WineContainer/Login"
// import Form from "./WineContainer/Form"
import AccountForm from "./WineContainer/AccountForm"

const AppRouter = (props) => {
    // console.log(props.featured)
    // console.log(props.wines)
  return (
    <div>
      <Switch>
        <Route exact path="/" render={routerProps => <Featured {...routerProps} featured={props.featured} />} />
        <Route exact path="/browse" render={routerProps => <Browse {...routerProps} wines={props.wines} type={props.type} region={props.region} addToCart={props.addToCart} />} />
        <Route exact path="/wine" component={DisplayWine} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signup" render={routerProps => props.renderForm(routerProps)} />
        <Route exact path="/login" render={routerProps => props.renderForm(routerProps)} />
        <Route exact path="/account" render={routerProps => <AccountForm {...routerProps} user={props.user} save={props.save} />} />
        <Route exact path="/cart" render={routerProps => <Cart {...routerProps} user={props.user} />} />
      </Switch>
    </div>
  )
}

export default AppRouter