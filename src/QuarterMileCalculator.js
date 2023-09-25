import React, { useState } from 'react';
import './QuarterMileCalculator.css'; // Import your CSS file

const QuarterMileCalculator = () => {
  const [engineHP, setEngineHP] = useState(0);
  const [carWeight, setCarWeight] = useState(0);
  const [result, setResult] = useState('');

  const calculateQuarterMileTime = () => {
    const engineHPValue = parseFloat(engineHP) || 0;
    const carWeightValue = parseFloat(carWeight) || 0;
  
    // Constants for the formula
    const C1 = 5.825;
  
    // Calculate quarter-mile time using the provided formula
    let estimatedTime = C1 * Math.pow(carWeightValue / engineHPValue, 0.333);
  
    setResult(estimatedTime.toFixed(2) + " seconds");
  };
  
  
  
  return (
    <div className="container">
      <div className="input-container">
        <h1>Quarter Mile Calculator</h1>
        <label htmlFor="engineHP">Engine Horsepower (HP):</label>
        <input
          type="number"
          id="engineHP"
          value={engineHP}
          onChange={(e) => setEngineHP(e.target.value)}
        />
        <label htmlFor="carWeight">Car Weight (lbs):</label>
        <input
          type="number"
          id="carWeight"
          value={carWeight}
          onChange={(e) => setCarWeight(e.target.value)}
        />
        <div className="calculate-button-container">
          <button onClick={calculateQuarterMileTime}>Calculate</button>
        </div>
      </div>
      <div className="results-container">
        <div className="results-box">
          <h2>Estimated Quarter Mile Time:</h2>
          <p>{result}</p>
        </div>
      </div>
    </div>
  );
};

export default QuarterMileCalculator;
