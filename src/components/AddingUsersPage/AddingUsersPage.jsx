import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import createUser from '../../logic/createUser';
import './AddingUsersPage.css';

export default class AddingUsersPage extends Component {
    state = {
        label: this.props.userName,
        redirect: false,
    }
    onSubmit = (event) => {
        event.preventDefault();
        let users = this.props.users;
        if(!users) {
            users = [];
        }

        const newUser = createUser(this.state.label);
        this.props.addUser(newUser); //?

        this.setState({ redirect: true }); 
    }
    onUserChange = () => {

    }
    render () {
        console.log('PrOps', this.props);
        if(this.state.redirect){
            return <Redirect to='/calculator'/>;
        }
        return (
            <form className = 'addingUsersPage'
                  onSubmit = {this.onSubmit}>
                <input type = 'text'
                       placeholder = 'Enter name of new user'/>
                <button type = 'submit'>Create</button>
            </form>
        );
    }
}