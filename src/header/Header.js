import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
// import Logo from '../images/shop_logo1.png'
import Logo from '../images/shop_logo2.jpg'


// import "bulma/css/bulma.min.css";



const Header = ({ history }) => {
  // const headerstyle = {
  //     fontFamily : 'Apple Chancery, cursive',
  // }

  const link = {
    padding: '15px',
    background: 'black',
    textDecoration: 'inherit',
    color: '#ff40c4',
    // marginBottom: '50px',
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

  // const [isOpen, setOpen] = useState(false);

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
    <>
    <div style={{background: "#00ff00", content: "", clear: "both", display: "table", position: "relative", width: "100%"}}>
    <div style={{width: "100%", textAlign: "center"}}>
      <img src={Logo} alt='logo' style={{justifySelf: "center", width: "99%", height: "auto"}}/>
  </div>

  <div className="nav-bar"  style={{float: "right", overFlow: "hidden", background: "#00ff00", marginRight: '10px'}}>
    {/* <div className="nav-bar" style={{width: "50%", right: "0", bottom: "0", position: "absolute", padding: "10px"}}> */}
     {/* <nav
     className="navbar is-primary"
     role="navigation"
     aria-label="main navigation"
     >
       <div className="container">
         <div className="navbar-brand">
           <a
           role="button"
           className={`navbar-burger burger ${isOpen && "is-active"}`}
           aria-label="menu"
           aria-expanded="false"
           onClick={() => setOpen(!isOpen)}
           >
             <span aria-hidden="true"></span>
             <span aria-hidden="true"></span>
             <span aria-hidden="true"></span>
             <span aria-hidden="true"></span>
             <span aria-hidden="true"></span>
           </a>
         </div> */}
{/* 
         <div className={`navbar-menu ${isOpen && "is-active"}`}>
           <div className="navbar-start">
             
           */}
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
      
    {/* {logged_in? <NavLink to="/account">Hey</NavLink> : console.log("no")} */}
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
            
         {/* </div>
         </nav>
       </div>
     
     </div> */}
    </>
  );
}

export default withRouter(Header);