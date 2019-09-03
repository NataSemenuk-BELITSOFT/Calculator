import React from 'react';
import './Button.css';

const Button = (props) => {
  const { label , clickHandler } = props;
  return (
    <button className = 'buttonStyle' 
            onClick =  {() => clickHandler(label.label)}>
              {label.label}
    </button> 
  );
}
export default Button;
