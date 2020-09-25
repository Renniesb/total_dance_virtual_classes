import React from 'react';
import {Link, useHistory} from "react-router-dom";
// import navStyles from './Nav.module.css'; 

function Nav({getProfile,page,authMessage}) {
  let history = useHistory();
    if(page === "home"){

          return (<nav className="topnav">

                <Link className="active" to="/">Home</Link>

                <Link to="/login">Login</Link>

                {
                  authMessage === "success" ? (
                    <>
                      <Link to="/videos">Video Classes</Link>
                      <button className="makeNavElement" onClick={()=>{getProfile(history)}}>Profile</button>
                    </> 
                  ): <></>
                }

          </nav>)
    }else if(page==="login"){
          return (<nav className="topnav">

                <Link to="/">Home</Link>

                <Link className="active" to="/login">Login</Link>

                {
                  authMessage === "success" ? (
                    <>
                      <Link to="/videos">Video Classes</Link>
                      <button className="makeNavElement" onClick={()=>{getProfile(history)}}>Profile</button>
                    </> 
                  ): <></>
                }

          </nav>)
    }else if(page==="videos"){
      return(<nav className="topnav">
              
                <Link to="/">Home</Link>

                <Link to="/login">Login</Link>

                {
                  authMessage === "success" ? (
                    <>
                      <Link className="active" to="/videos">Video Classes</Link>
                      <button className="makeNavElement" onClick={()=>{getProfile(history)}}>Profile</button>
                    </> 
                  ): <></>
                }
              
              </nav>)
    }
    
}

export default Nav;
