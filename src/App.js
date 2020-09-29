import React, { Component } from 'react';
import './App.css';
import Video from './Video'
import Login from './Login/Login'
import LandingPage from './LandingPage/LandingPage'
import Profile from './Profile/Profile'
// import env from './config';


import {
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from './PrivateRoute';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user_name: '',
      password: '',
      error: '',
      authMessage: '',
      isAuthenticated: false
    };

  }

  getProfile = (history)=>{

        this.setState({ isAuthenticated: true },()=>{
          history.push('./profile')
        })


    // fetch(`${env.API_ENDPOINT}/user/profile`,
    // {
    //   headers: {Authorization: 'Bearer '+ localStorage.getItem(env.TOKEN_KEY)},
    //   method: "POST",

    // }
    // )
    //   .then(response => response.json())
    //   .then(data =>{ 
    //     console.log(localStorage.getItem(env.TOKEN_KEY))
    //     this.setState({ isAuthenticated: true, profile: data },()=>{
    //       history.push('./profile')
    //     })
        
    //   }
    //   ).catch(err=>console.log(err))
  }

  dismissError = () => {
    this.setState({ error: '' });
  }

  handleLogin = (evt, history)=> {
    evt.preventDefault();
    const {user_name, password} = this.state;

    if (!user_name) {
      return this.setState({ error: 'Username is required' });
    }

    if (!password) {
      return this.setState({ error: 'Password is required' });
    }

    if(user_name === 'dunder' && password === 'password'){
      this.setState({authMessage: "success"})
      this.setState({user_name: "", password: ""})
      history.push('./videos')
    }
    else {
      this.setState({authMessage: "failed"})
      this.setState({user_name: "", password: ""})
    }
    
  }


  handleUserChange = (evt) => {
    this.setState({
      user_name: evt.target.value,
    });
  };

  handlePassChange = (evt) => {
    this.setState({
      password: evt.target.value,
    });
  }
  logout = () => {
    // console.log('here we go')
    // localStorage.removeItem(env.TOKEN_KEY)
    this.setState({authMessage: '', isAuthenticated: false})
  }

  render() {
    const loginProps = {
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
    }
    

    return (
      <div>     
          <Switch>
            <Route path="/login">
              <Login {...loginProps}/>
            </Route>
            <Route path="/videos">
              <Video authMessage={this.state.authMessage} getProfile={this.getProfile} />
            </Route>       
            <PrivateRoute path="/profile" isAuthenticated = {this.state.isAuthenticated}>
                <Profile authMessage={this.state.authMessage} getProfile={this.getProfile} />
            </PrivateRoute>
            <Route path="/">
              <LandingPage authMessage={this.state.authMessage} getProfile={this.getProfile}/>
            </Route>           
          </Switch>
      </div>  
    );
  }
}



export default App;
