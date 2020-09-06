import React, { Component } from 'react';
import './App.css';
import config from './config';
import Login from './Login/Login'
import LandingPage from './LandingPage/LandingPage'
import {
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";


class App extends Component {
  constructor() {
    super();
    this.state = {
      user_name: '',
      password: '',
      error: '',
      authMessage: ''
    };

  }

  dismissError = () => {
    this.setState({ error: '' });
  }

  handleSubmit = (evt)=> {
    evt.preventDefault();
    const {user_name, password} = this.state;

    if (!user_name) {
      return this.setState({ error: 'Username is required' });
    }

    if (!password) {
      return this.setState({ error: 'Password is required' });
    }
    fetch(`${config.API_ENDPOINT}/auth/login`, {
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
        }
        else {
          res.json()
          this.setState({authMessage: "success"})
        }
      }

      )
      return this.setState({ error: '' });
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

  render() {
    
    const loginProps = {
      handlePassChange : this.handlePassChange,
      handleUserChange: this.handleUserChange,
      handleSubmit: this.handleSubmit,
      dismissError: this.dismissError,
      user_name: this.state.user_name,
      password: this.state.password,
      error: this.state.error,
      authMessage: this.state.authMessage
    }
    

    return (
      
        <div>
          <Switch>
            <Route path="/login">
              <Login {...loginProps}/>
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </div>
      
      
    );
  }
}



export default App;
