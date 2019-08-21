import React from 'react';
import PropTypes from "prop-types";
import Button from '../Button/Button.jsx';

import './ButtonsBox.css';

export default class ButtonsBox extends React.Component {
    static propTypes = {
        clickHandler: PropTypes.func,
    };

    handleClick = (buttonName) => {
        this.props.clickHandler(buttonName);
    };
    render() {
        return (
            <div>
                <div className = 'components_ButtonsPanel'>
                    <Button label = 'c' clickHandler={this.handleClick}/>
                    <Button label = '+/-' clickHandler={this.handleClick}/>
                    <Button label = '&#8730;' clickHandler={this.handleClick}/>
                    <Button label = '/' clickHandler={this.handleClick}/>
                </div>
                <div className="components_ButtonsPanel">
                    <Button label = '7' clickHandler={this.handleClick}/>
                    <Button label = '8' clickHandler={this.handleClick}/>
                    <Button label = '9' clickHandler={this.handleClick}/>
                    <Button label = '*' clickHandler={this.handleClick}/>
                </div>          
                <div className="components_ButtonsPanel">
                    <Button label = '4' clickHandler={this.handleClick}/>
                    <Button label = '5' clickHandler={this.handleClick}/>
                    <Button label = '6' clickHandler={this.handleClick}/>
                    <Button label = '-' clickHandler={this.handleClick}/>
                </div>
                <div className="components_ButtonsPanel">
                    <Button label = '1' clickHandler={this.handleClick}/>
                    <Button label = '2' clickHandler={this.handleClick}/>
                    <Button label = '3' clickHandler={this.handleClick}/>
                    <Button label = '+' clickHandler={this.handleClick}/>
                </div> 
                <div className="components_ButtonsPanel">
                    <Button label = '.' clickHandler={this.handleClick}/>
                    <Button label = '0' clickHandler={this.handleClick}/>
                    <Button label = '%' clickHandler={this.handleClick}/>
                    <Button label = '=' clickHandler={this.handleClick} equal/>
                </div>
            </div>
        );
    }
};