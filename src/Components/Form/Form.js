import React from 'react';
import './Form.css';

const Form = ({submitTime}) => {
  return (
    <div className="form-container">
      <div className="race-time">Race Time</div>
      <form className="race-time-form">
        <section className="time-input-container">
          <input type="text" className="time-input" id="timeInput"></input>
          <button type="submit" className="time-submit-btn" onClick={submitTime}>Submit</button>
        </section>
      </form>
      <div className="divider"></div>
    </div>
  )
};

export default Form;
