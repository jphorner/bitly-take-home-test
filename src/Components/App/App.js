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

  calculateTime = (hour, minutes, day, period) => {
    let totalTime;
    totalTime = minutes;
    if (period === 'PM' && hour !== 12) {
      let hourAdjusted = hour + 12;
      console.log('Adjusted: ', hourAdjusted);
      totalTime += (hourAdjusted * 60);
    };
    if (day > 1) {
      totalTime += ((24 * 60) * day);
    };
    totalTime -= (8 * 60);
    console.log(totalTime);
  }

  submitTime = (event) => {
    event.preventDefault();
    let time = document.getElementById('timeInput').value;
    if (time.includes(':') && (time.includes('AM') || time.includes('PM')) && time.includes(',') && time.includes('DAY')) {
      let splitInput = time.split(',');
      let splitHour = parseInt(splitInput[0].split(':')[0]);
      let splitMinutes = parseInt(splitInput[0].split(':')[1].split(' ')[0]);
      let splitDay = parseInt(splitInput[1].split(' DAY ')[1]);
      let splitPeriod = splitInput[0].split(':')[1].split(' ')[1];
      console.log('HOUR: ', splitHour);
      console.log('MINUTE: ', splitMinutes);
      console.log('DAY: ', splitDay);
      console.log('PERIOD: ', splitPeriod);
      this.calculateTime(splitHour, splitMinutes, splitDay, splitPeriod);
    } else {
      console.log('invalid')
      return;
    };
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

// ["12:00 PM, DAY 1",
// "12:01 PM, DAY 1"]
// => 241 (240.5 rounded)

// Subtract 480 since race starts at 8:00 AM
