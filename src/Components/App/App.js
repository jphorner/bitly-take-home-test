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
  }

  calculateTime = (hour, minutes, day, period) => {
    let totalTime = minutes;
    if (period === 'AM' && day === 1) {
      totalTime += (hour * 60);
    } else if (period === 'PM' && day === 1) {
      if (hour === 12) {
        totalTime += (hour * 60);
      } else {
        totalTime += (hour + 12) * 60;
      }
    };

    if (period === 'AM' && day === 2) {
      if (hour === 12) {
        totalTime += (24 * 60);
      } else {
        totalTime += (24 * 60) + (hour * 60);
      }
    } else if (period === 'PM' && day === 2) {
      if (hour === 12) {
        totalTime += (36 * 60);
      } else {
        totalTime += (36 * 60) + (hour * 60);
      }
    };

    totalTime -= 480;
    console.log(totalTime);
    this.setState({ times: totalTime })
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
    );
  }
}

export default App;

// ["12:00 PM, DAY 1",
// "12:01 PM, DAY 1"]
// => 241 (240.5 rounded)

// Subtract 480 since race starts at 8:00 AM
