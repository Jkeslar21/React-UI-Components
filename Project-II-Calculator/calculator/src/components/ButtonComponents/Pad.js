import React from 'react';
import './Button.css';
import NumberButton from './NumberButton'

function KeyPad() {
    return (
      <div className="KeyPad">
        <NumberButton style='Clear' btn='clear' />
        <NumberButton style='Operator' btn= '÷' />
        <NumberButton style='Small' btn='7' />
        <NumberButton style='Small' btn='8' />
        <NumberButton style='Small' btn='9' />
        <NumberButton style='Operator' btn='x' />
        <NumberButton style='Small' btn='4' />
        <NumberButton style='Small' btn='5' />
        <NumberButton style='Small' btn='6' />
        <NumberButton style='Operator' btn='-' />
        <NumberButton style='Small' btn='1' />
        <NumberButton style='Small' btn='2' />
        <NumberButton style='Small' btn='3' />
        <NumberButton style='Operator' btn='+' />
        <NumberButton style='Large' btn='0' />
        <NumberButton style='Operator' btn='=' />
      </div>
    );
  }
  
export default KeyPad;