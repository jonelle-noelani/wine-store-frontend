import React from "react"
import { Route, Switch } from "react-router-dom"

import Featured from "./WineContainer/Featured"
import Browse from "./WineContainer/Browse"
import DisplayWine from "./WineContainer/DisplayWine"
import About from "./WineContainer/About"
import Contact from "./WineContainer/Contact"
import Cart from "./WineContainer/Cart"
import Login from "./WineContainer/Login"
import AccountForm from "./WineContainer/AccountForm"

const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Featured} />
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/wine" component={DisplayWine} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/account" component={AccountForm} />
      </Switch>
    </div>
  )
}

export default AppRouter