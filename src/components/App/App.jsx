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
                <Route exact path = '/' component = { Calc }></Route>
                <Route path = '/adding-buttons' render={(props) => 
                    <AddingButtonsPage {...props} button={ localStorage.getItem('current-button') }/>}/>
                <Route path = '/adding-users' render={(props) => 
                    <AddingUsersPage {...props} button={ localStorage.getItem('current-user') }/>}/>        
            </Router>
        );
    }
    
}

