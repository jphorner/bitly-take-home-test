import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Form from '../Form/Form.js';
import Results from '../Results/Results.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      times: []
    }
  };

  calculateTime = (hour, minutes, day, period) => {
    let totalTime = 0;
      // Starts by counting hours, then is converted to minutes
      // at the end of the function
    if (period === 'AM' && day === 1) {
      totalTime += hour;
    } else if (period === 'PM' && day === 1 && hour !== 12) {
      totalTime += hour + 12;
    } else if (period === 'PM' && day === 1 && hour === 12) {
      totalTime += hour;
    };
      // Ignores additional days if race finishes on day one
    if (period === 'AM' && day >= 2 && hour !== 12) {
      totalTime += 24 + hour;
    } else if (period === 'AM' && day >= 2 && hour === 12) {
      totalTime += 24;
    } else if (period === 'PM' && day >= 2 && hour === 12) {
      totalTime += 36;
    } else if (period === 'PM' && day >= 2 && hour !== 12) {
      totalTime += 36 + hour;
    };
      // If day two or later, a full day is added to the total
      // before final hours are added on the finishing day
    if (day > 2) {
      totalTime += 24 * (day - 2);
    };
      // Adds 24 hours for every day which passes between the
      // starting and finishing day
    totalTime = totalTime * 60;
      // Converts hours into minutes
    totalTime += minutes;
      // Adds the minute value once hours have been converted
    totalTime -= 480;
      // Subtracts eight hours' worth of minutes since race
      // begins at 8:00 AM
    this.setState({ times: [...this.state.times, totalTime] })
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
        // Splits valid race time string into its constituent values for calculation
      this.calculateTime(splitHour, splitMinutes, splitDay, splitPeriod);
    } else {
      return;
    };
  }

  render() {
    return (
      <div className="App">
        <div className="components-container">
          <Header />
          <Form submitTime={this.submitTime} />
          <Results results={this.state.times}/>
        </div>
      </div>
    )
  }
};

export default App;
