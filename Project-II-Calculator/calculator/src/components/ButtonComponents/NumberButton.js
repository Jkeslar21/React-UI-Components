import React from 'react';
import './Button.css';

function NumberButton(props) {
    console.log(props)
    return (
      <div className={props.style}>
        {props.btn}
      </div>
    );
}
export default NumberButton;
