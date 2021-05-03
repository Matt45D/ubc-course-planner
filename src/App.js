import React from 'react';
import HeaderBar from './HeaderBar';
import Scheduler from './Scheduler';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderBar></HeaderBar>
      <div className="Scheduler-container">
        <Scheduler></Scheduler>
        <Scheduler></Scheduler>
      </div>
    </div>
  );
}

export default App;
