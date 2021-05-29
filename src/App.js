import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import './App.css';
import Intro from './features/Intro';
import SignInSignUp from './features/SignIn-SignUp';
import MainContent from './features/MainContent';
import Login from './features/Login';
import Register from './features/Register';
import CustomGoogleMap from './features/CustomGoogleMap';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Intro} exact/>
        <Route path="/intro" component={Intro} />
        <Route path="/sign-in-sign-up" component={SignInSignUp} />
        <Route path="/main" component={MainContent}/>
        <Route path="/login" component={Login} exact/>
        <Route path="/register" component={Register} exact/>
        <Route path="/map" component={CustomGoogleMap} exact/>
      </Switch>

      {/* <Intro/> */}
    </div>
  );
}

export default App;
