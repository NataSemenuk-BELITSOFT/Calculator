import React from 'react';
import Input from '../Input/Input.jsx';
import Calc from '../Calc/Calc.jsx';

import './App.css'


import { BrowserRouter as Router, Route } from 'react-router-dom';
export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path = '/' component = {Calc}></Route>
                <Route path = '/adding-buttons' component = {Input}></Route>
            </Router>
        );
    }
    
}
