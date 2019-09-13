import React from 'react';
import './Button.css';

const Button = ( props ) => {
  const { label , clickHandler, btnStyle } = props;
  return (
    <button className = {btnStyle} onClick =  {() => clickHandler(label.label)}>{ label.label }</button> 
  );
}
export default Button;
