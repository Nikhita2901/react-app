import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import ClickCounterTwo from './Components/ClickCounterTwo';
import HoverCounterTwo from './Components/HoverCounterTwo';
import User from './Components/User';
import Counter from './Components/Counter';
import ComponentC from './Components/ComponentC';
import { UserProvider } from './Components/userContext';

function App() {
  return (
    <div className="App">
      {/* <Hello></Hello> 
      <ClickCounter/>
      <HoverCounter></HoverCounter>
      <ClickCounter name='Nikhita'></ClickCounter>
      <ClickCounterTwo></ClickCounterTwo>
      <HoverCounterTwo></HoverCounterTwo>
      <User render={(isLoggedIn) => isLoggedIn? 'Nikhita': 'Guest'}></User>
      <Counter> 
        {(count, incrementCount) => (
           <ClickCounterTwo count={count} incrementCount={incrementCount}/>
         )}
      </Counter>
      <Counter> 
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount}/>
        )}
      </Counter>*/}
      <UserProvider value="Nikhita">
      <ComponentC></ComponentC>
      </UserProvider>

    </div>
  );
}

export default App;
