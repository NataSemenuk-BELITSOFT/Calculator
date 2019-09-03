import React from 'react';
import { Link } from 'react-router-dom';
import './AddingButtons.css'

const AddingButtons = (props) => {
    const id = props.link;
    console.log('PROPSSS', id);
    return (
        <button 
            className = 'addingButtonsStyle'>
            <Link to = {id}>Adding buttons</Link>
        </button>
    )
}
export default AddingButtons;