import React from 'react';
import './App.css';
import Header from './components/Header'
import Intro from './features/Intro';
import MainContent from './features/MainContent';

function App() {
  return (
    <div className="App">

      <Header />
      <MainContent/>
      {/* <Intro/> */}
    </div>
  );
}

export default App;
