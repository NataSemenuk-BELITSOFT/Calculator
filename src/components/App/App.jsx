import React, { Component } from 'react';
import Calc from '../Calc/Calc.jsx';
import AddingButtonsPage from '../AddingButtonsPage/AddingButtonsPage.jsx';
import AddingUsersPage from '../AddingUsersPage/AddingUsersPage.jsx';

import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Route path = '/calculator' component = { Calc }></Route>
                <Route path = '/adding-buttons' render={(props) => 
                    <AddingButtonsPage {...props} button={ localStorage.getItem('current-button') }/>}/>
                <Route exact path = '/' render={(props) => 
                    <AddingUsersPage {...props} button={ localStorage.getItem('current-user') }/>}/>        
            </Router>
        );
    }
    
}

