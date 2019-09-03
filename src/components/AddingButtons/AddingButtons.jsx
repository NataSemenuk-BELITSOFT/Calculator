import React from 'react';
import { Link } from 'react-router-dom';
import './AddingButtons.css'

const AddingButtons = (props) => {
    const link = props.link;
    return (
        <button 
            className = 'addingButtonsStyle'>
            <Link to = {link}>Adding buttons</Link>
        </button>
    )
}
export default AddingButtons;