import React from 'react';
import { Link } from 'react-router-dom';
import './AddingButtons.css'

const AddingButtons = ({ link, title }) => {
    return (
        <Link to = { link }>
            <button className = 'addingButtons'>{ title }</button>
        </Link>
    )
}
export default AddingButtons;
