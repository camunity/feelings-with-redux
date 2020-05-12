import React from 'react';
import './App.css';
import Person from './components/Person';
import Feelings from './components/Feelings';
import HairColor from './components/HairColor';


function App() {
  return (
    <div className="App">

      <Person />
      <br />

      <Feelings />
      <br/>
  
      <HairColor />
      <br />
      
    </div>
  );
}

export default App;
