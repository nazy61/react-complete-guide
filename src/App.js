import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi i'm a react app</h1>
      <p>This is really working!</p>
      <Person name='Chinaza' age='20'> My Hobbies: Games</Person>
      <Person name='Mary' age='26' />
      <Person name='Chioma' age='22' />
    </div>
  );
}

export default App;
