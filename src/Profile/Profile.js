import React from 'react';
import './Profile.css';
import Nav from '../Nav/Nav';
import user from '../img/user.png';
const Profile = ({getProfile,user_name,nickname,full_name, email,logout }) => {
    return (
        <>
        <div className="background">
            {/* dynamically highlights the profile link in the navigation */}
            <Nav getProfile={getProfile} logout={logout} page="profile"/>
            <div className="profile-container">
                <h1>Profile Page</h1>
                {/* shows the profile information when authenticated */}
                <img style={{marginLeft: "-10px", width: "200px", height:"200px"}} alt="user profile icon" src={user}></img>
                <h3 style={{display: "inline"}}>Username:<span style={{color: "rebeccapurple"}}> {user_name}</span></h3>
                <h3 style={{display: "inline"}}>Nickname:<span style={{color: "rebeccapurple"}}> {nickname}</span></h3>
                <h3 style={{display: "inline"}}>Full Name:<span style={{color: "rebeccapurple"}}> {full_name}</span></h3>
                <h3 style={{display: "inline"}}>Email:<span style={{color: "rebeccapurple"}}> {email}</span></h3>
            </div>
                <svg style={{display: "block" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#333333" fillOpacity="1" d="M0,224L48,202.7C96,181,192,139,288,128C384,117,480,139,576,170.7C672,203,768,245,864,229.3C960,213,1056,139,1152,122.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
        
        </>
    );
        
    
};

export default Profile;
