import React, { useState } from 'react';
import Nav from './Nav/Nav';
import {Salsa,Bachata,Merengue} from './links';
import choose from './img/choose.png';
    
function Video({getProfile,authMessage}) {
    const dances = ['Salsa','Bachata','Merengue'];
    const [danceStep, setDanceStep] = useState('chooseDance');
    const [danceLevel, setDanceLevel] = useState('all');
    const resetValues = () => {
        setDanceStep('chooseDance')
        setDanceLevel('all')
    }
    const getHero = () => {
        if(danceStep === "Salsa" && danceLevel !== 'all' ){
            return (
                <>
                <header className="salsa-hero">
                     <div className="container">
                         <h1 className="main-text">{danceLevel} Salsa Dance Lessons</h1>
                     </div>
                 </header>
                 <button className="big-button" onClick={() => resetValues()}>Select A different dance</button>
                </>
                 )

        }
        else if (danceStep === "Bachata" && danceLevel !== 'all'){
            return (
                <>
                <header className="bachata-hero">
                     <div className="container">
                         <h1 className="main-text">{danceLevel} Bachata Dance Lessons</h1>
                     </div>
                 </header>
                 <button className="big-button" onClick={() => resetValues()}>Select A different dance</button>
                </>
                   )
        }
        else if (danceStep === "Merengue" && danceLevel !== 'all'){
            return (
                <>
                <header className="merengue-hero">
                     <div className="container">
            <h1 className="main-text">{danceLevel} Merengue Dance Lessons</h1>
                     </div>
                 </header>
                 <button className="big-button" onClick={() => resetValues()}>Select A different dance</button>
                </>
                   )
        }
        else {
            return (
                <header style={{background: `url(${choose})`, padding: "9em 0"}} className="hero">
                     <div className="container">
                         <h1 className="main-text">Virtual Dance Lessons</h1>
                     </div>
                 </header>  )
        }
       
    }
       
    const renderSelectDance = () => {

        if(danceStep === 'chooseDance'){
            return (
                <>
                    <section className="select-videos">
                        <div className="btn-group">
                            <h2>Select The dance you are learning</h2>
                            <button onClick={() => setDanceStep('Salsa')}  className="select">Salsa</button>
                            <button onClick={() => setDanceStep('Bachata')} className="select">Bachata</button>
                            <button onClick={() => setDanceStep('Merengue')} className="select">Merengue</button>
                        </div>
                    </section>
                </>
            )

        }
        if(dances.includes(danceStep) && danceLevel !== 'all'){
            let danceVideos;
            
            switch(danceStep) {
                case 'Salsa':
                  danceVideos = Salsa[danceLevel]
                  break;
                case 'Bachata':
                    danceVideos = Bachata[danceLevel]
                  break;
                default:
                  danceVideos = Merengue[danceLevel]
            }
            return danceVideos.map((move,index)=>{
                return (
                    <div key={index} style={{ marginBottom: "20px"}}>
                        <section style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", textAlign: "center"}}>
    
                            <h3 style={{marginTop: "50px", marginBottom: "15px"}}>{move.name}</h3>
                            <div className="img-container">
                                <iframe style={{height: "315px", width: "100%"}}src={`https://www.youtube.com/embed/${move.link}`}
                                 frameBorder="0" allowFullScreen title={move.name}>
                                </iframe>
                            </div>
                        </section>
                    </div>
                )
            })
        }     
        else{
            return (
                <>
                 <section className="select-videos slide-in-right">
                     <div className="btn-group">
                         <h2>Select Your Skill Level</h2>
                         <button onClick={()=>{setDanceLevel('beginner')}}  className="select">Beginner</button>
                         <button onClick={()=>{setDanceLevel('intermediate')}} className="select">Intermediate</button>
                         <button onClick={()=>{setDanceLevel('advanced')}} className="select">Advanced</button>
                     </div>
                 </section>
                </>
            ) 
            
        }
    }
    

    return (
        <>
            <Nav authMessage={authMessage} getProfile={getProfile} page="videos"/>
            {
                getHero()
            }
           {
               renderSelectDance()
           } 
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#333333" fillOpacity="1" d="M0,224L48,202.7C96,181,192,139,288,128C384,117,480,139,576,170.7C672,203,768,245,864,229.3C960,213,1056,139,1152,122.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </>
    )
}

export default Video;