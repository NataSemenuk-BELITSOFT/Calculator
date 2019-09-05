import React from 'react';
import Input from '../Input/Input.jsx';
import History from '../History/History.jsx';
import ButtonsBox from '../ButtonsBox/ButtonsBox.jsx';
import AddingButtons from '../AddingButtons/AddingButtons.jsx';
import calculate from "../../logic/calculate";
import writeHistory from "../../logic/writeHistory";
import './Calc.css'

export default class Calc extends React.Component{
    state = {
        total: null,
        next: null,
        operation: null,
        history: JSON.parse(localStorage.getItem('history')) === null ? [] : JSON.parse(localStorage.getItem('history')),
        result: false,
    };
    handleClick = (buttonName) => {
        let newState = calculate(this.state, buttonName);
        this.setState(newState, () => this.setState(writeHistory(this.state, buttonName)));
    }
    render() {
        let history='';
        if(this.state.result) {
            history= this.state.history;
        }
        return (
            <div className = 'calcStyle'> 
                <div>
                    <Input 
                        operation = {this.state.operation} 
                        next = {this.state.next}
                        total = {this.state.total}/>
                    <ButtonsBox click = {this.handleClick}/>
                </div>  
                <div className = 'asideBox'>
                    <History   
                        history = {history} 
                        clickHandler = {this.handleClick}/>
                    <AddingButtons link = '/adding-users' title = 'Change user'/>
                    <AddingButtons link = '/adding-buttons' title = 'Adding buttons'/>
                </div>
            </div>
        )
    }
}
