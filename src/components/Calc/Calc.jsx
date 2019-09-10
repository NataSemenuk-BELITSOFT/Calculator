import React, { Component } from 'react';
import { createStore } from 'redux';
import Input from '../Input/Input.jsx';
import History from '../History/History.jsx';
import ButtonsBox from '../ButtonsBox/ButtonsBox.jsx';
import AddingButtons from '../AddingButtons/AddingButtons.jsx';
import calculate from "../../logic/calculate";
import writeHistory from "../../logic/writeHistory";
import './Calc.css'


// const reducer = (state = 0, action) => {
//     switch (action.type) {
//         case 'ADD_USER': 
//             return state + 4;
//         default: 
//             return state;
//     }
// }
// const store = createStore(reducer); 
// store.subscribe(()=> {
//     console.log(store.getState());
// });
// //action creator
// const addUser = () => ({type: 'ADD_USER'}); 
//  store.dispatch(addUser());




export default class Calc extends Component{
    state = {
        total: null,
        next: null,
        operation: null,
        history: JSON.parse(localStorage.getItem('history')) === null ? [] : JSON.parse(localStorage.getItem('history')),
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
                <div>
                    <Input 
                        operation = {this.state.operation} 
                        next = {this.state.next}
                        total = {this.state.total}/>
                    <ButtonsBox click = {this.handleClick}/>
                </div>  
                <div className = 'asideBox'>
                    <History history={ JSON.parse(localStorage.getItem('history')) } clearHistory = {this.clearHistory}/>
                    <AddingButtons link = '/adding-users' title = 'Change user'/>
                    <AddingButtons link = '/adding-buttons' title = 'Adding buttons'/>
                </div>
            </div>
        )
    }
}
