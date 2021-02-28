import React from 'react';
import './App.css';
import Header from './components/Header'
import MainContent from './features/MainContent';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent/>
    </div>
  );
}

export default App;
