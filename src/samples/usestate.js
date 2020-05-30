import React, { useState } from 'react';
import './App.css';
import Person from '../Person/Person';

const App = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Chinaza', age: 20 },
      { name: 'Mary', age: 26 },
      { name: 'Chioma', age: 22 }
    ],
    otherState: 'some value'
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Ogwo', age: 20 },
        { name: 'Mary', age: 26 },
        { name: 'Chioma', age: 22 }
      ],
      otherState: 'some value'
    });
  }

  return (
    <div className="App">
      <h1>Hi i'm a react app</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}> My Hobbies: Games</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default App;
