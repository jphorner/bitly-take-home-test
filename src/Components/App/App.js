import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Form from '../Form/Form.js';
import Results from '../Results/Results.js';

function App() {
  return (
    <div className="App">
      <div className="components-container">
        <Header />
        <Form />
        <Results />
      </div>
    </div>
  );
}

export default App;
