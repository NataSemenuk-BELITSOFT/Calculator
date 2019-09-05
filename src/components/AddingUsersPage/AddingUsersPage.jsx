import React from 'react';

import './AddingUsersPage.css';

export default class AddingUsersPage extends React.Component {
    render () {
        return (
            <form className = 'addingUsersPage'>
                <input type = 'text'
                       placeholder = 'Enter name of new user'/>
                <button type = 'submit'>Create</button>
            </form>
        );
    }
}