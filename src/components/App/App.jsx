import React from 'react';
import Input from '../Input/Input.jsx';
import History from '../History/History.jsx';
import ButtonsBox from '../ButtonsBox/ButtonsBox.jsx';
import calculate from "../../logic/calculate";
import writeHistory from "../../logic/writeHistory";

import './App.css'

export default class App extends React.Component {
    
    state = {
        total: null,
        next: null,
        operation: null,
        history: '',
    };
    handleClick = (buttonName) => {
        this.setState(calculate(this.state, buttonName));
        this.setState(writeHistory(this.state, buttonName));
        localStorage.setItem('myValueInLocalStorage', this.state.history);
        // const [value, setValue] = React.useState(
        //     localStorage.getItem('myValueInLocalStorage') || ''
        //   );
    }
    render() {
        
        return (
            <div className = 'appStyle'> 
                <div>
                    <Input 
                    operation = {this.state.operation} 
                    next = {this.state.next}
                    total = {this.state.total}/>
                    <ButtonsBox clickHandler = {this.handleClick}/>
                </div>  
                <History history = {this.state.history}/>
            </div>
        );
    }
    
}