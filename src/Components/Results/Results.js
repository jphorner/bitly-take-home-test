import React, { Component } from 'react';
import './Results.css';

const Results = ({results}) => {
  let allTimes = 0;
  let allResults = results.map( result => {
    return <div key={Math.random()}>{result}</div>;
  })

  let calculateAllTimes = results.forEach( result => {
    allTimes = allTimes + result;
  })

  return (
    <div className="results-container">
      <div className="individual-results-container">
        <h4 className="results-header">Results</h4>
        <section className="results">
          {allResults}
        </section>
      </div>
      <div className="average-container">
        <h4 className="average-header">Average</h4>
        <section className="average-time">
          {allTimes !== 0 && <div key="average">{Math.round(allTimes / results.length)}</div>}
        </section>
      </div>
    </div>
  )
}

export default Results;
