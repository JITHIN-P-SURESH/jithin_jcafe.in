import React from "react";
import { NavLink } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./nav.css";

const Navbar = () => {
  const navLinkStyles = ({isActive}) =>{
    return{
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'underline' : 'none',
    }
  }
return(
       
<div className="container-fluid nav bg">
  <div className="col-10 mx-auto">
  <div className="">
 
  <div className="container-fluid" style={{display:"flex"}}>
    <NavLink className="navbar-brand  p-4" to="/">Jp cafe</NavLink>
    <nav className="navbar navbar-expand-lg navbar-light "style={{marginLeft:"auto"}}>
    <button className="navbar-toggler"
     type="button" 
     data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent" 
     aria-controls="navbarSupportedContent" 
     aria-expanded="false" 
     aria-label="Toggle navigation"
     >
      <span className="navbar-toggler-icon"></span>
    </button>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >

      <ul className="navbar-nav col-10 m-auto">
        <li className="nav-item">
          <NavLink style={navLinkStyles}
           exact
          className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={navLinkStyles} className="nav-link" to="service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={navLinkStyles}  className="nav-link" to="about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={navLinkStyles}  className="nav-link" to="contact" >Contact</NavLink>
        </li>
        </ul>
      
      </div>
      </nav>

    </div>

</div>

</div>

</div>

);
};
export default Navbar;