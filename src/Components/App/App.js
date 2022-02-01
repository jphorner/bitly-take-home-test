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
    let totalTime = 0;

    if (period === 'AM' && day === 1) {
      totalTime += hour;
    } else if (period === 'PM' && day === 1 && hour !== 12) {
      totalTime += hour + 12;
    } else if (period === 'PM' && day === 1 && hour === 12) {
      totalTime += hour;
    };

    if (period === 'AM' && day >= 2 && hour !== 12) {
      totalTime += 24 + hour;
    } else if (period === 'AM' && day >= 2 && hour === 12) {
      totalTime += 24;
    } else if (period === 'PM' && day >= 2 && hour === 12) {
      totalTime += 36;
    } else if (period === 'PM' && day >= 2 && hour !== 12) {
      totalTime += 36 + hour;
    };

    if (day > 2) {
      totalTime += 24 * (day - 2);
    }

    totalTime = totalTime * 60;
    totalTime += minutes;
    totalTime -= 480;
    console.log(totalTime);
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
