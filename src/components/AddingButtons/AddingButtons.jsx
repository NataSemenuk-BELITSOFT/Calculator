import React from 'react';
import { Link } from 'react-router-dom';
import './AddingButtons.css'

const AddingButtons = (props) => {
    const link = props.link;
    return (
        <Link to = {link}>
            <button className = 'addingButtonsStyle'>Adding buttons</button>
        </Link>
    )
}
export default AddingButtons;