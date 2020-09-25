import React, { useState } from 'react';
import Nav from './Nav/Nav';
function Video({getProfile}) {
    const [danceSelected, setDanceBoolean] = useState(false);
    const renderSelectDance = () => {
        return (
            <>
                <section className="select-videos">
                    <div className="btn-group">
                        <h2>Select The dance you are learning</h2>
                        <button onClick={() => setDanceBoolean(true)}  className="select">Salsa</button>
                        <button onClick={() => setDanceBoolean(true)} className="select">Bachata</button>
                        <button onClick={() => setDanceBoolean(true)} className="select">Merengue</button>
                    </div>
                </section>
            </>
        )
    }
    const renderSelectLevel = () => {
       return (
           <>
            <section className="select-videos">
                <div className="btn-group">
                    <h2>Select Your Skill Level</h2>
                    <button  className="select">Beginner</button>
                    <button  className="select">Intermediate</button>
                    <button className="select">Advanced</button>
                </div>
            </section>
           </>
       ) 
    }

    return (
        <>
            <Nav getProfile={getProfile} page="login"/>
           {
               !danceSelected ? renderSelectDance() : renderSelectLevel()
           } 
        </>
    )
}

export default Video;