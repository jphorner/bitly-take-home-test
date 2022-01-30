import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Form from '../Form/Form.js';
import Results from '../Results/Results.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      test: 'Test'
    }
  }

  submitTime = (event) => {
    event.preventDefault();
    this.setState({ test: 'Noice' })
  }

  render() {
    return (
      <div className="App">
        <div className="components-container">
          <Header />
          <Form submitTime={this.submitTime} />
          <Results results={this.state.test}/>
        </div>
      </div>
    );
  }
}

export default App;
