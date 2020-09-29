import React from 'react';
import './Login.css';
import env from '../config';
import Nav from '../Nav/Nav';
import {useHistory} from "react-router-dom";

// import config from '../config'

const Login = ({
    handlePassChange,
    handleUserChange,
    handleLogin,
    dismissError,
    user_name,
    password,
    error,    
    authMessage,
    logout,
    getProfile
}) => {
    let history = useHistory();
    return (
        <div>
            <Nav authMessage={authMessage} getProfile={getProfile} page="login"/>
            <div className="Login">
                <form onSubmit={ (event)=>{handleLogin(event,history)} }>
                {
                    error &&
                    <h3 data-test="error" onClick={dismissError}>
                    <button onClick={dismissError}>✖</button>
                    {error}
                    </h3>
                }
                <label>User Name</label>
                <input type="text" data-test="username" value={user_name} onChange={handleUserChange} />

                <label>Password</label>
                <input type="password" data-test="password" value={password} onChange={handlePassChange} />

                <p>{authMessage}</p>

                {authMessage !== "success" && localStorage.getItem(env.TOKEN_KEY) === null ? <input type="submit" value="Log In" data-test="submit" /> : <button onClick={logout}  data-test="submit">Log Out</button>   } 
                </form>
            </div>
        </div>
        
    )
}



export default Login;
