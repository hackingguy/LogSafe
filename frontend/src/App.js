import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Landing from './components/Landing'
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Verify from './components/Verify';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route path="/verify" component={Verify} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    );
  }
}

export default App;