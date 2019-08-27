import React from 'react';
import { Link } from 'react-router-dom';
import './AddingButtons.css'

export default class AddingButtons extends React.Component{
    render() { 
        return (
            
            <button className = 'addingButtonsStyle' value = ''>
                <Link to = '/adding-buttons'>Adding buttons</Link>
            </button>
        )
    }
}