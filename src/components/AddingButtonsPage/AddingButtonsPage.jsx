import React from 'react';
import AddingButtons from '../AddingButtons/AddingButtons.jsx';

import './AddingButtonsPage.css';

export default class AddingButtonsPage extends React.Component {
    render () {
        return (
            <div className = 'addingButtonsPageStyle'>
                <input placeholder = 'Enter number'/>
                <AddingButtons/>
            </div>
        )
    }
}