import { connect } from 'react-redux';
import React, { Component } from 'react';
import { createStore } from 'redux';
import Input from '../Input/Input.jsx';
import UserName from '../UserName/UserName.jsx';
import History from '../History/History.jsx';
import ButtonsBox from '../ButtonsBox/ButtonsBox.jsx';
import AddingButtons from '../AddingButtons/AddingButtons.jsx';
import calculate from "../../logic/calculate";
import './Calc.css'
import { writeHistory } from '../../actions/actions';

class Calc extends Component{
    state = {
        total: null,
        next: null,
        operation: null,
        history: [],
    };
    handleClick = (buttonName) => {
        let newState = calculate(this.state, buttonName);
        this.setState(newState, () => this.setState(this.getHistory(this.state, buttonName)));
    }
    // clearHistory = () => {
    //     this.setState({ history: [] });
    //     localStorage.setItem('history', JSON.stringify([]));
    // }
    getHistory = (obj, buttonName) => {
        const len = obj.history.length; 
        if(buttonName === 'c') {
            return {
                history: [],
            }
        }
        if(buttonName !== '=') {
            if(len) {
                obj.history[len-1] = obj.history[len-1] + buttonName;
            }else {
                obj.history = [buttonName];
            }
            return {            
                history: obj.history,
            }
        }
        if (buttonName === '=') {
            let prevHistory = this.props.curUser.history;
            if(prevHistory == null){
                prevHistory = [];
            }
            const history = [...prevHistory, obj.history[len-1] + buttonName  + obj.total];
            const newUser = {...this.props.curUser, history};
            this.props.writeHistory(newUser);
            return { 
                history: [obj.total],
            }
        }
    }
    
    render() {
        return (
            <div className = 'calcStyle'> 
                <UserName/>
                <div>
                    <div>
                        <Input 
                            operation = {this.state.operation} 
                            next = {this.state.next}
                            total = {this.state.total}/>
                        <ButtonsBox click = {this.handleClick}/>
                    </div>  
                    <div className = 'asideBox'>
                        <History/>
                        <AddingButtons link = '/' title = 'Change user'/>
                        <AddingButtons link = '/adding-buttons' title = 'Adding buttons'/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ curUser }) => {
    return {
        curUser
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      writeHistory: (user) => {
        dispatch(writeHistory(user));
      }
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Calc);