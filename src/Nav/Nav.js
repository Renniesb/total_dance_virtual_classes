import React from 'react';
import {Link, useHistory} from "react-router-dom";
import env from '../config';

function Nav({getProfile,page,logout}) {
  let history = useHistory();

  //initiate the logged in and out link and logged in user links variables
  let loggedLink;
  let loggedInUserLinks;

  //determines whether or not to set the page as a highlighted
  let highlightHome = page === "home" ? "active": "";
  let highlightLogin = page === "login" ? "active": "";
  let highlightVideo = page === "video" ? "active": "";
  let highlightProfile = page === "profile" ? "active": "";

  //if the user isn't logged in show the login tab and hide the video classes and profile tabs
  if(localStorage.getItem(env.TOKEN_KEY) == null){
    loggedLink = <Link className={highlightLogin} to="/login">Login</Link>
    loggedInUserLinks = <></>
  }
  else{
    //if the user is logged in show the log out, video classes and profile tabs

    loggedLink = <button className={'makeNavElement '+ highlightLogin } onClick={()=>{logout(history)}}>Log Out</button>
    loggedInUserLinks = <>
                          <Link className={highlightVideo} to="/videos">Video Classes</Link>
                          <button className={'makeNavElement '+ highlightProfile} onClick={()=>{getProfile(history)}}>Profile</button>
                       </> 
  }

  return (
  <nav className="topnav">
    
    <Link className={highlightHome} to="/">Home</Link>

    {
      //displays the logged in or out link
      loggedLink             
    
    }

    {
      //show the Video Classes and Profile links if the login is a success
    loggedInUserLinks
    }

  </nav>
)
    
};

export default Nav;
