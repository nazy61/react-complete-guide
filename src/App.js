import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Chinaza', age: 20 },
      { name: 'Mary', age: 26 },
      { name: 'Chioma', age: 22 }
    ],
    otherState: 'some other state',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 20 },
        { name: 'Mary', age: 26 },
        { name: 'Chioma', age: 22 }
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = !this.state.showPersons;
    this.setState({ showPersons: doesShow });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Chinaza', age: 20 },
        { name: event.target.value, age: 26 },
        { name: 'Chioma', age: 22 }
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person =>
            <Person name={person.name} age={person.age} />
          )}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi i'm a react app</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  };
}

export default App;
