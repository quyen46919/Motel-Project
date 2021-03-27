import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import './App.css';
import Intro from './features/Intro';
import SignInSignUp from './features/SignIn-SignUp';
import MainContent from './features/MainContent';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Intro} exact/>
        <Route path="/intro" component={Intro} />
        <Route path="/sign-in-sign-up" component={SignInSignUp} />
        <Route path="/main" component={MainContent}/>
        {/* <Route path="/" component={MainContent}/>    */}
      </Switch>

      {/* <Intro/> */}
    </div>
  );
}

export default App;
