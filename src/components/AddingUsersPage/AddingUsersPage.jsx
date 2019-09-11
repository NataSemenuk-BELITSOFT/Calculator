import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import createUser from '../../logic/createUser';
import { addUser } from '../../actions/actions';
import { connect}  from "react-redux";
import './AddingUsersPage.css';

export default class AddingUsersPage extends Component {
    state = {
        label: this.props.userName,
        redirect: false,
    }
    onNameChange = (event) => {
        this.setState({
            label: event.target.value,
        });
        console.log('store', this.props.store);
    }
    onSubmit = (event) => {
        event.preventDefault();
        // let users = this.props.users;
        // if(!users) {
        //     users = [];
        // }
        // console.log('props', this.props.users);
        // console.log('users', users);
        const newUser = createUser(this.state.label);
        this.props.addUser(newUser); 

        this.setState({ redirect: true }); 
    }
    render () {
        if(this.state.redirect){
            return <Redirect to='/calculator'/>;
        }
        return (
            <form className = 'addingUsersPage'
                  onSubmit = {this.onSubmit}>
                <input type = 'text'
                       onChange = { this.onNameChange }
                       placeholder = 'Enter name of new user'/>
                <button type = 'submit'>Create</button>
            </form>
        );
    }
}
// Дописать connect, mapStateToProps, mapDispatchToProps
const mapStateToProps = ({users}) => {
    return {

    };
}
export default connect (mapStateToProps)(AddingUsersPage)
