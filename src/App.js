import React, { Component } from 'react';
import './App.css';
import Video from './Video/Video';
import Login from './Login/Login';
import LandingPage from './LandingPage/LandingPage';
import Profile from './Profile/Profile';
import env from './config';


import {
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from './PrivateRoute/PrivateRoute';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user_name: '',
      full_name: '',
      nickname: '',
      email: '',
      password: '',
      error: '',
      authMessage: '',
      isAuthenticated: false
    };

  };

  getProfile = (history)=>{
    // authorize access to the users profile page only when logged in
    fetch(`${env.API_ENDPOINT}/user/profile`,
    {
      headers: {Authorization: 'Bearer '+ localStorage.getItem(env.TOKEN_KEY)},
      method: "POST",

    }
    )
      .then(response => response.json())
      .then(data =>{ 
        this.setState({ isAuthenticated: true,
           user_name: data.user.sub,
           full_name: data.user.full_name,
           nickname: data.user.nickname,
           email: data.user.email,
        },()=>{
          history.push('./profile')
        })
        
      }
      ).catch(err=>console.log(err));
  };

  dismissError = () => {
    this.setState({ error: '' });
  };

  handleLogin = (evt,history)=> {
    evt.preventDefault();
    const {user_name, password} = this.state;
    //show error messages if the user doesn't include their username or password
    if (!user_name) {
      return this.setState({ error: 'Username is required' });
    }

    if (!password) {
      return this.setState({ error: 'Password is required' });
    }
    //logs user in if they provide the correct credentials
    fetch(`${env.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ user_name, password }),
    })
      .then(res =>{
        if(!res.ok){
          res.json().then(e => Promise.reject(e))
          this.setState({authMessage: "failed"})
          this.setState({user_name: "", password: ""})
        }
        else {
          this.setState({authMessage: "success"})
          this.setState({user_name: "", password: ""})
          return res.json();          
        }
      }

      )
      .then(data => {
          //sets the valid authorization token and redirects the user to the video classes page
          localStorage.setItem(env.TOKEN_KEY, data.authToken)
          history.push('./videos')
          
      })
      .catch(res => {
        this.setState({ error: '' });
      });
  };


  handleUserChange = (evt) => {
    //handles the username input field keeping the value in state
    this.setState({
      user_name: evt.target.value,
    });
  };

  handlePassChange = (evt) => {
    //handles the password input field keeping the value in state
    this.setState({
      password: evt.target.value,
    });
  };
  logout = () => {
    //removes the auth token when the user logs out
    localStorage.removeItem(env.TOKEN_KEY);
    this.setState({authMessage: '', isAuthenticated: false});
  };

  render() {
    const loginProps = {
      //props for the log in
      handlePassChange : this.handlePassChange,
      handleUserChange: this.handleUserChange,
      handleLogin: this.handleLogin,
      dismissError: this.dismissError,
      user_name: this.state.user_name,
      password: this.state.password,
      error: this.state.error,
      authMessage: this.state.authMessage,
      logout: this.logout,
      getProfile: this.getProfile
    };

    const profileProps = {
      //props for the profile page
      user_name: this.state.user_name,
      authMessage: this.state.authMessage,
      getProfile: this.getProfile,
      full_name: this.state.full_name,
      nickname: this.state.nickname,
      email: this.state.email,
    };
    

    return (
      <div> 
          {/* go to the correct page route depending on the path specified in th url     */}
          <Switch>
            <Route path="/login">
              <Login {...loginProps}/>
            </Route>
            <Route path="/videos">
              <Video authMessage={this.state.authMessage} getProfile={this.getProfile} />
            </Route>       
            <PrivateRoute path="/profile" isAuthenticated = {this.state.isAuthenticated}>
                <Profile {...profileProps}/>
            </PrivateRoute>
            <Route path="/">
              <LandingPage authMessage={this.state.authMessage} getProfile={this.getProfile}/>
            </Route>           
          </Switch>
      </div>  
    );
  };
};



export default App;
