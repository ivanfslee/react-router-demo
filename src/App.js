import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Home from './Home';
import Help from './Help';

const Host = () => <h1>Host</h1>

const Login = () => <h1>Login</h1>
const Signup = () => <h1>Signed up</h1>

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" render={() => <Home title="Aloha~~~" />} />
      <Route exact path="/host" component={Host}/>
      <Route path="/help" component={Help}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
    </Router>
  );
}

export default App;