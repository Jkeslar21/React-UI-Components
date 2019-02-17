import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
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
