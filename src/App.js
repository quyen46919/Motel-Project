import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Intro from './features/Intro';
import SignInSignUp from './features/SignIn-SignUp';
import MainContent from './features/MainContent';


function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route path="/" exact> */}

          <MainContent/>
        {/* </Route>
        <Route path="/content">
          <Header/>
          <MainContent/>
        </Route>
        <Route path="/intro" component={Intro} exact/>
        <Route path="/sign-in-sign-up" component={SignInSignUp} exact/>
      </Switch> */}

      {/* <Intro/> */}
    </div>
  );
}

export default App;
