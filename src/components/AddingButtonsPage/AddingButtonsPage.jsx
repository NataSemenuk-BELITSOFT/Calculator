import React from 'react';
import AddingButtons from '../AddingButtons/AddingButtons.jsx';

import './AddingButtonsPage.css';

export default class AddingButtonsPage extends React.Component {
    addItem = (text) =>  {
        const newItem = {
            label: text,
            id: text
        };
        this.setState( ({ calcData }) => {
            const newArr = [...calcData, newItem];
            return {
                calcData: newArr,
            };
        });
    }
    render () {
        return (
            <div className = 'addingButtonsPageStyle'>
                <input placeholder = 'Enter number'/>
                <AddingButtons link = '/'/>
            </div>
        );
    }
}