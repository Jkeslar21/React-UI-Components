import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import KeyPad from './components/ButtonComponents/Pad'

const App = () => {
  return (
    <div>
      <CalculatorDisplay />
      <KeyPad />
    </div>
  );
};

export default App;
