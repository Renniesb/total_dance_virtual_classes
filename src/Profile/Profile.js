import React from 'react';
import './Profile.css';
import Nav from '../Nav/Nav';
import user from '../img/user.png';
const Profile = ({authMessage,getProfile}) => {
    return (
        <>
        <div>
            <Nav authMessage={authMessage} getProfile={getProfile} page="profile"/>
            <div className="profile-container">
                <h1>Profile Page</h1>
                <img style={{marginLeft: "-10px", width: "200px", height:"200px"}} alt="user profile icon" src={user}></img>
                <h3 style={{display: "inline"}}>Username:<span style={{color: "rebeccapurple"}}> dunder</span></h3>
                <h3 style={{display: "inline"}}>Name:<span style={{color: "rebeccapurple"}}> John Smith</span></h3>
            </div>
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#333333" fillOpacity="1" d="M0,224L48,202.7C96,181,192,139,288,128C384,117,480,139,576,170.7C672,203,768,245,864,229.3C960,213,1056,139,1152,122.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
        </>
    )
        
    
}

export default Profile;
