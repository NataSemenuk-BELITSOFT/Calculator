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
        history: '',
        result: false,
    };
    //переделай!
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
                    <ButtonsBox clickHandler = {this.handleClick}/>
                </div>  
                <div>
                    <History   
                        history = {history} 
                        clickHandler = {this.handleClick}/>
                    <AddingButtons/>
                </div>
            </div>
        )
    }
}
