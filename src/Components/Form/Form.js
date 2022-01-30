import React, { Component } from 'react';
import './Form.css';

const Form = () => {
  return (
    <div className="form-container">
      <div className="race-time">Race Time</div>
      <form className="race-time-form">
        <div className="time-input-container">
          <input type="text" className="time-input"></input>
          <button type="submit" className="time-submit-btn">Submit</button>
        </div>
      </form>
      <div className="divider"></div>
    </div>
  )
}

export default Form;
