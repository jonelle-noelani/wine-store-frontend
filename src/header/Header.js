import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({selectType, selectRegion}) => {
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

<select style={other} onChange={(e) => selectType(e.target.value)} >
  <option value="all">Browse by Type</option>
  <option value="sparkling">Sparkling</option>
  <option value="white">White</option>
  <option value="red">Red</option>
</select>

<select style={link} onChange={(e) => selectRegion(e.target.value)} >
  <option value="all">Browse by Region</option>
  <option value="California">California</option>
  <option value="Oregon">Oregon</option>
  <option value="Australia">Australia</option>
  <option value="France">France</option>
  <option value="Spain">Spain</option>
</select>
      
      <NavLink
      to="/login"
      exact
      style={link}
      >Login</NavLink>

      <NavLink
      to="/signup"
      exact
      style={other}
      >Signup</NavLink>
      
      <NavLink
      to="/account"
      exact
      style={link}
      >Account</NavLink>
    </div>
  );
}

export default Header;