import React from 'react';
import './Login.css';
// import config from '../config'

const Login = ({
    handlePassChange,
    handleUserChange,
    handleSubmit,
    dismissError,
    user_name,
    password,
    error,    
    authMessage
}) => {
    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
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

            <input type="submit" value="Log In" data-test="submit" />
            </form>
        </div>
    )
}



export default Login;
