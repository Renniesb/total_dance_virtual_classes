import React from 'react';
import './LandingPage.css';
import Nav from '../Nav/Nav'

const LandingPage = ({getProfile,authMessage}) => {
    return (
        <div>
        {/* an adaptive navigation that highlights the landing page in the navigation */}
        <Nav authMessage={authMessage} getProfile={getProfile} page="home"/>
        <header className="hero">
            <div className="container">
                <h1 className="main-text">Interactive dance playlists</h1>
                <p className="description">Choose a dance type and skill level to see a curated list of videos that break down moves step by step</p>
            </div>
        </header>  
        <section className="bg-gray">
                <div className="get-started">
                    <h2>Getting Started</h2>
                </div>
                
                <ol>                
                    <li>Login to the app: username = danceman,   password = password</li>
                    <li>Click on Video quizzes</li>
                    <li>Select the dance you want to learn</li>
                    <li>Select the level of the dance you want to learn</li>
                </ol>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#333333" fillOpacity="1" d="M0,224L48,202.7C96,181,192,139,288,128C384,117,480,139,576,170.7C672,203,768,245,864,229.3C960,213,1056,139,1152,122.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                
        </section>      
        </div>
    )
        
    
}

export default LandingPage;
