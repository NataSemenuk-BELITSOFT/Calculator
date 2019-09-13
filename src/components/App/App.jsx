import React, { Component } from 'react';
import UserPage from '../../screens/UserPage/UserPage.jsx';
import Home from '../../screens/Home/Home.jsx';
import AddingButtonsPage from '../../screens/AddingButtonsPage/AddingButtonsPage.jsx';

import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path = '/' component = { Home }/>
                <Route path = '/calculator' component = { UserPage }/>
                <Route path = '/adding-buttons' render={(props) => 
                    <AddingButtonsPage {...props} button={ localStorage.getItem('current-button') }/>}/>                        
            </Router>
        );
    }  
}
