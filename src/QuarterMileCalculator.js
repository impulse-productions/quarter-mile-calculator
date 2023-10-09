import React, { useState } from 'react';
import './QuarterMileCalculator.css';

const QuarterMileCalculator = () => {
  const [engineHP, setEngineHP] = useState(0);
  const [carWeight, setCarWeight] = useState(0);
  const [horsepowerType, setHorsepowerType] = useState('flywheel');
  const [result, setResult] = useState('');
  const [resultEighthMile, setResultEighthMile] = useState('');
  const [resultTrapSpeed, setResultTrapSpeed] = useState('');

  const calculateQuarterMileTime = () => {
    const engineHPValue = parseFloat(engineHP) || 0;
    const carWeightValue = parseFloat(carWeight) || 0;
    const C1 = 5.825;
    const adjustedEngineHPValue =
      horsepowerType === 'wheel' ? engineHPValue * 0.89 : engineHPValue;

    let estimatedTime = C1 * Math.pow(carWeightValue / adjustedEngineHPValue, 0.333);
    setResult(estimatedTime.toFixed(2) + ' seconds');

    const eighthMileTime = estimatedTime / 1.511;
    setResultEighthMile(eighthMileTime.toFixed(2) + ' seconds');

    const trapSpeed = 234 * Math.pow(adjustedEngineHPValue / carWeightValue, 1 / 3);
    setResultTrapSpeed(trapSpeed.toFixed(2) + ' mph');
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    calculateQuarterMileTime();
  };

  return (
    <div className="container">
      <div className="input-container">
        <h1>Quarter Mile Calculator</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="engineHP">Engine Horsepower (HP):</label>
          <input
            type="number"
            id="engineHP"
            value={engineHP}
            onChange={(e) => setEngineHP(e.target.value)}
          />
          <div className="horsepower-type-container">
            <label>
              <input
                type="radio"
                name="horsepowerType"
                value="flywheel"
                checked={horsepowerType === 'flywheel'}
                onChange={() => setHorsepowerType('flywheel')}
              />{' '}
              Flywheel Horsepower
            </label>
            <label>
              <input
                type="radio"
                name="horsepowerType"
                value="wheel"
                checked={horsepowerType === 'wheel'}
                onChange={() => setHorsepowerType('wheel')}
              />{' '}
              Wheel Horsepower (11% loss)
            </label>
          </div>
          <label htmlFor="carWeight">Car Weight (lbs):</label>
          <input
            type="number"
            id="carWeight"
            value={carWeight}
            onChange={(e) => setCarWeight(e.target.value)}
          />
          <div className="calculate-button-container">
            <button type="submit">Calculate</button>
          </div>
        </form>
      </div>
      <div className="results-container">
        <div className="results-box">
          <h2>1/4 Mile Elapsed Time</h2>
          <p>{result}</p>
        </div>
        <div className="results-box">
          <h2>1/8 Mile Elapsed Time:</h2>
          <p>{resultEighthMile}</p>
        </div>
        <div className="results-box">
          <h2>1/4 Mile Trap Speed:</h2>
          <p>{resultTrapSpeed}</p>
        </div>
      </div>
    </div>
  );
};

export default QuarterMileCalculator;
