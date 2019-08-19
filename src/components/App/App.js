import React from 'react';
import Input from '../Input/Input.js';
import ButtonsBox from '../ButtonsBox/ButtonsBox.js';
import calculate from "../../logic/calculate";

export default class App extends React.Component {
    state = {
        total: null,
        next: null,
        operation: null,
    };
    handleClick = (buttonName) => {
        this.setState(calculate(this.state, buttonName));
    }
    render() {
        return (
            <div>   
                <Input value = {this.state.next || this.state.total || '0'}/>
                <ButtonsBox clickHandler = {this.handleClick}/>
            </div>
        );
    }
}