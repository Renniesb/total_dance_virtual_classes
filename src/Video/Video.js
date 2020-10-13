import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import env from '../config';
import choose from '../img/choose.png';
    
function Video({getProfile,authMessage}) {
    const dances = ['Salsa','Bachata','Merengue'];
    const [danceStep, setDanceStep] = useState('chooseDance');
    const [danceLevel, setDanceLevel] = useState('all');
    const [danceVideos, setDanceVideos] = useState([]);


    const getVideos =  (dance,level) => {

        setDanceLevel(level)
        return fetch(`${env.API_ENDPOINT}/videos/${dance}/${level}`)
        .then(response=>response.json())
        .then(data =>{
            setDanceVideos(data)
        }) 
    };
    const resetValues = () => {
        setDanceStep('chooseDance')
        setDanceLevel('all')
        setDanceVideos([])
    };
    const getHero = () => {

        // depending on the type of dance selected a certain background image is selected
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
        }   //this is the background image shown when no dance has been selected yet
        else {
            return (
                <header style={{background: `url(${choose})`, padding: "9em 0"}} className="hero">
                     <div className="container">
                         <h1 className="main-text">Virtual Dance Lessons</h1>
                     </div>
                 </header>  )
        }
       
    };
       
    const renderSelectDance = () => {
        // shows the choose a dance menu if the dance type has not been selected yet
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
        //Show the displayed videos if the dance type and skill level have been selected
        if(dances.includes(danceStep) && danceLevel !== 'all'){
            
            return danceVideos.map((move,index)=>{
                return (
                    <div key={index} style={{ marginBottom: "20px"}}>
                        <section style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", textAlign: "center"}}>
    
                            <h3 style={{marginTop: "50px", marginBottom: "15px"}}>{move.movetitle}</h3>
                            <div className="img-container">
                                <iframe style={{height: "315px", width: "100%"}}src={`https://www.youtube.com/embed/${move.link}`}
                                 frameBorder="0" allowFullScreen title={move.movetitle}>
                                </iframe>
                            </div>
                        </section>
                    </div>
                )
            
            })
            
           
        }  //when the dance type has been selected but the dance skill level hasn't been selected yet show this menu    
        else{
            return (
                <>
                 <section className="select-videos slide-in-right">
                     <div className="btn-group">
                         <h2>Select Your Skill Level</h2>
                         <button onClick={()=>{getVideos(danceStep,'beginner')}}  className="select">Beginner</button>
                         <button onClick={()=>{getVideos(danceStep, 'intermediate')}} className="select">Intermediate</button>
                         <button onClick={()=>{getVideos(danceStep,'advanced')}} className="select">Advanced</button>
                     </div>
                 </section>
                </>
            ) 
            
        }
    };
    

    return (
        <>
            <Nav authMessage={authMessage} getProfile={getProfile} page="videos"/>
            {
                //function to get the hero image as it dynamically changes depending on the dance selected
                getHero()
            }
           {
               //render the select dance and select dance skill level menus dynamically
               renderSelectDance()
           } 
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#333333" fillOpacity="1" d="M0,224L48,202.7C96,181,192,139,288,128C384,117,480,139,576,170.7C672,203,768,245,864,229.3C960,213,1056,139,1152,122.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </>
    );
};

export default Video;
