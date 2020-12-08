import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';


const Header = ({ history }) => {
  const headerstyle = {
      fontFamily : 'Apple Chancery, cursive',
  }

  const link = {
    padding: '10px',
    background: 'white',
  }

  const other = {
    padding: '10px',
    background: 'grey',
  }

  // const logged_in = () => {
  //   let token_check = localStorage.getItem('token') 
  //   !!token_check? <NavLink to="/account">Hey</NavLink> : console.log("no")
  // }

  // const logged_in = localStorage.getItem('token')

  const logout = () => {
    localStorage.clear();
    localStorage.removeItem('user');

    history.push("/") 
  }
  // localStorage.removeItem('token');

  return (
    <div className="nav-bar">
      <ul style={headerstyle}>
        <li className="nav-item"><h2>Header for this APP</h2></li>
        <li className="nav-item"><h2>Logo & NavBar</h2></li>
      </ul>
      <NavLink
      to="/"
      exact
      style={link}
      >Featured Wine</NavLink>

      <NavLink
      to="/browse"
      exact
      style={other}
      >Browse Wines
      </NavLink>

      <NavLink
      to="/cart"
      exact
      style={link}
      >Cart</NavLink>
      
    {/* {logged_in? <NavLink to="/account">Hey</NavLink> : console.log("no")} */}
    {localStorage.getItem('token')? 
    <NavLink
    to="/account"
    exact
    style={other}
    >Account</NavLink> : 
    
    <NavLink
    to="/signup"
    exact
    style={other}
    >Signup</NavLink> }

    {localStorage.getItem('token')? <button className="header button" onClick={logout}>Log Out</button> :
    <NavLink
    to="/login"
    exact
    style={link}
    >Login</NavLink>}

    </div>
  );
}

export default withRouter(Header);