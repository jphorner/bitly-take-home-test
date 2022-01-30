import React, { Component } from 'react';
import './Results.css';

const Results = ({results}) => {
  return (
    <div className="results-container">
      <h4 className="results-header">Results</h4>
      <section className="results">
        {results}
      </section>
    </div>
  )
}

export default Results;
