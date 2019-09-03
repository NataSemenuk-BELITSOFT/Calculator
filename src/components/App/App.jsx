import React from 'react';
import Calc from '../Calc/Calc.jsx';
import AddingButtonsPage from '../AddingButtonsPage/AddingButtonsPage.jsx';

import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path = '/' component = { Calc }></Route>
                <Route path = '/adding-buttons' render={(props) => 
                    <AddingButtonsPage {...props} button={ localStorage.getItem('current-button') }/>}/>
            </Router>
        );
    }
    
}

