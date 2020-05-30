import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Chinaza', age: 20 },
      { id: 2, name: 'Mary', age: 26 },
      { id: 3, name: 'Chioma', age: 22 }
    ],
    otherState: 'some other state',
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = !this.state.showPersons;
    this.setState({ showPersons: doesShow });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
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
          {this.state.persons.map((person, index) =>
            <Person
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} />
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
