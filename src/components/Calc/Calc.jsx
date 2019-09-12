import React, { Component } from 'react';
import { createStore } from 'redux';
import Input from '../Input/Input.jsx';
import UserName from '../UserName/UserName.jsx';
import History from '../History/History.jsx';
import ButtonsBox from '../ButtonsBox/ButtonsBox.jsx';
import AddingButtons from '../AddingButtons/AddingButtons.jsx';
import calculate from "../../logic/calculate";
import writeHistory from "../../logic/writeHistory";
import './Calc.css'

export default class Calc extends Component{
    state = {
        total: null,
        next: null,
        operation: null,
    };
    handleClick = (buttonName) => {
        let newState = calculate(this.state, buttonName);
        this.setState(newState, () => this.setState(writeHistory(this.state, buttonName)));
    }
    clearHistory = () => {
        this.setState({ history: [] });
        localStorage.setItem('history', JSON.stringify([]));
    }
    render() {
        return (
            <div className = 'calcStyle'> 
                <UserName/>
                <div>
                    <Input 
                        operation = {this.state.operation} 
                        next = {this.state.next}
                        total = {this.state.total}/>
                    <ButtonsBox click = {this.handleClick}/>
                </div>  
                <div className = 'asideBox'>
                    <History history={ JSON.parse(localStorage.getItem('history')) } clearHistory = {this.clearHistory}/>
                    <AddingButtons link = '/' title = 'Change user'/>
                    <AddingButtons link = '/adding-buttons' title = 'Adding buttons'/>
                </div>
            </div>
        )
    }
}