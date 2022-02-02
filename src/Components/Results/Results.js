import React from 'react';
import './Results.css';

const Results = ({results}) => {
  let cumulativeTimes = 0;
    // Keeps track of time total from all entries
  let allResults = results.map( result => {
    return <li key={Math.random()}>{result}</li>;
  });
    // Used to render each individual race time
  let calculatecumulativeTimes = results.forEach( result => {
    cumulativeTimes = cumulativeTimes + result;
  });
    // Adds each race time to cumulativeTimes
  return (
    <div className="results-container">
      <div className="individual-results-container">
        <h4 className="results-header">Results</h4>
        <section className="results">
          <ul>
            {allResults}
          </ul>
        </section>
      </div>
      <div className="average-container">
        <h4 className="average-header">Average</h4>
        <section className="average-time">
          {cumulativeTimes !== 0 && <div key="average">{Math.round(cumulativeTimes / results.length)}</div>}
        </section>
      </div>
    </div>
  )
};

export default Results;
