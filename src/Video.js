import React, { useState } from 'react';
import Nav from './Nav/Nav';
import {Salsa,Bachata,Merengue} from './links';
    
function Video({getProfile,authMessage}) {
    const dances = ['Salsa','Bachata','Merengue'];
    const [danceStep, setDanceStep] = useState('chooseDance');
    let danceVideoInterface = "";

    const getVideos = (level) => {
        if(danceStep === 'Salsa'){
            setDanceStep(Salsa[level])
            // danceVideoInterface = Salsa[level].map((move,index)=>{
            //     return (
            //         <div key={index}>
            //             <h3>{move.name}</h3>
            //             <p>{move.link}</p>
            //         </div>
            //     )
            // })
        }
        else if(danceStep === 'Bachata'){
            setDanceStep(Bachata[level])
            // danceVideoInterface = Bachata[level].map((move,index)=>{
            //     return (
            //         <div key={index}>
            //             <h3>{move.name}</h3>
            //             <p>{move.link}</p>
            //         </div>
            //     )
            // })
        }
        else {
            setDanceStep(Merengue[level])
            // danceVideoInterface = Merengue[level]
        }
        
    }
       
    const renderSelectDance = () => {
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
    const renderSelectLevel = () => {
       return (
           <>
            <section className="select-videos">
                <div className="btn-group">
                    <h2>Select Your Skill Level</h2>
                    <button onClick={()=>{getVideos('beginner')}}  className="select">Beginner</button>
                    <button onClick={()=>{getVideos('intermediate')}} className="select">Intermediate</button>
                    <button onClick={()=>{getVideos('advanced')}} className="select">Advanced</button>
                </div>
            </section>
           </>
       ) 
    }
    if(danceStep === 'chooseDance'){
        danceVideoInterface = renderSelectDance()
    }else if(dances.includes(danceStep)){
        danceVideoInterface = renderSelectLevel()
    }
    else{
        danceVideoInterface = danceStep.map((move,index)=>{
            return (
                <div key={index}>
                    <h3>{move.name}</h3>
                    <iframe src={`http://www.youtube.com/embed/${move.link}`}
                    width="560" height="315" frameborder="0" allowfullscreen title={move.name}></iframe>
                </div>
            )
        })
    }

    return (
        <>
            <Nav authMessage={authMessage} getProfile={getProfile} page="videos"/>
           {
               danceVideoInterface
           } 
        </>
    )
}

export default Video;