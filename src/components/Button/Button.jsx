import React from 'react';
import './Button.css';
import PropTypes from "prop-types";

export default class Button extends React.Component {
static propTypes = {
    label: PropTypes.string,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    this.props.clickHandler(this.props.label);
  };

    render() {
        return (
            <div>
                <button className = 'buttonStyle' onClick = { this.handleClick }>{this.props.label}</button> 
            </div>
        );
    };
}
