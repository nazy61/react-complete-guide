import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Chinaza', age: 20 },
      { name: 'Mary', age: 26 },
      { name: 'Chioma', age: 22 }
    ]
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
    return (
      <div className="App">
        <h1>Hi i'm a react app</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Ogwo')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Bethel')}
          changed={this.nameChangedHandler}> My Hobbies: Games</Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  };
}

export default App;
