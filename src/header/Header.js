import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Logo from '../images/shop_logo2.jpg'

const Header = ({ history }) => {

  const link = {
    padding: '15px',
    background: 'black',
    textDecoration: 'inherit',
    color: '#ff40c4',
    width: '20%',
    fontWeight: '650',
  }

  const other = {
    padding: '15px',
    background: 'black',
    textDecoration: 'inherit',
    color: '#ff40c4',
    width: '20%',
    fontWeight: '650',
  }

  const logout = () => {
    localStorage.clear();
    localStorage.removeItem('user');

    history.push("/") 
  }

  return (
    <>
    <div style={{background: "#00ff00", content: "", clear: "both", display: "table", position: "relative", width: "100%"}}>
    <div style={{width: "100%", textAlign: "center"}}>
      <img src={Logo} alt='logo' style={{justifySelf: "center", width: "99%", height: "auto"}}/>
  </div>

  <div className="nav-bar"  style={{float: "right", overFlow: "hidden", background: "#00ff00", marginRight: '10px'}}>
   
      <NavLink
      exact to="/"
      style={link}
      activeStyle={{
        fontWeight: "bold",
        color: "#00ff00"
      }}
      activeClassName="is-active"
      >Featured Wine</NavLink>

      <NavLink
      exact to="/browse"
      activeStyle={{
        fontWeight: "bold",
        color: "#00ff00"
      }}
      activeClassName="is-active"
      style={other}
      >Browse Wines
      </NavLink>

      <NavLink
      exact to="/cart"
      activeStyle={{
        fontWeight: "bold",
        color: "#00ff00"
      }}
      activeClassName="is-active"
      style={link}
      >Cart</NavLink>
      
    {localStorage.getItem('token')? 
    <NavLink
    exact to="/account"
    activeStyle={{
      fontWeight: "bold",
      color: "#00ff00"
    }}
    activeClassName="is-active"
    style={other}
    >Account</NavLink> : 
    
    <NavLink
    exact to="/signup"
    activeStyle={{
      fontWeight: "bold",
      color: "#00ff00"
    }}
    activeClassName="is-active"
    style={other}
    >Signup</NavLink> }

    {localStorage.getItem('token')? <button className="header button" onClick={logout} style={{padding: '15px'}}>Log Out</button> :
    <NavLink
    exact to="/login"
    activeStyle={{
      fontWeight: "bold",
      color: "#00ff00"
    }}
    activeClassName="is-active"
    style={link}
    >Login</NavLink>}
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
      </div>
    </div>
  </div>
    </>
  );
}

export default withRouter(Header);