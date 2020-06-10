import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList from './components/ItemList';
import Form     from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
        <h3>Liste de courses</h3>

        <Form />

        <ItemList />

    </div>
  );
}

export default App;
