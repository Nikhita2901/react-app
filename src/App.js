import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';

function App() {
  return (
    <div className="App">
      {/* <Hello></Hello> 
      <ClickCounter/>*/}
      <HoverCounter></HoverCounter>
      <ClickCounter name='Nikhita'></ClickCounter>
    </div>
  );
}

export default App;
