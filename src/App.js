import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from './TodoApp';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My <span>To Do List</span> </h2>
        </div>
        <p>
          <TodoApp />
        </p>

        
      </div>
    );
  }
}

export default App;
