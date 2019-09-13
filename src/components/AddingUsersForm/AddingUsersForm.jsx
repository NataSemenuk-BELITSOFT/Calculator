import React, { Component } from 'react';
import { connect}  from 'react-redux';
import createUser from '../../logic/createUser';
import { addUser } from '../../actions/actions';
import './AddingUsersForm.css';

class AddingUsersForm extends Component {
    state = {
        label: this.props.userName,
    }
    onNameChange = (event) => {
        this.setState({
            label: event.target.value,
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        const newUser = createUser(this.state.label);
        this.props.addUser(newUser);
    }
    render () {
        return (
            <form className = 'addingUsersForm'
                  onSubmit = {this.onSubmit}>
                <div>
                    <input type = 'text'
                        onChange = { this.onNameChange }
                        placeholder = 'Enter name of new user'/>
                    <button type = 'submit'>Create</button>
                </div>
            </form>
        );
    }
};
const mapStateToProps = ({users}) => {
    return {
       users,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (users) => {
            dispatch(addUser(users));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(AddingUsersForm);
