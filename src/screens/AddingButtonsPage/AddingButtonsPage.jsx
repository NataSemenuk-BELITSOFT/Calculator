import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import './AddingButtonsPage.css';
import { addButton } from '../../actions/actions';

class AddingButtonsPage extends React.Component {
    state = {
        label: '',
        redirect: false,
    }
    onLabelChange = (event) => {
        this.setState({
            label: event.target.value,
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.addButton(this.state.label);
        this.setState({ redirect: true });
    };
    render () {
        if(this.state.redirect){
            return <Redirect to='/calculator'/>;
        }
        return (
            <form className = 'addingButtonsPageStyle'
                  onSubmit = {this.onSubmit}>
                <input type = 'text'
                       placeholder = 'Enter number'
                       onChange = { this.onLabelChange }
                       value={this.state.label}/>
                <button type = 'submit'>Create</button>
            </form>
        );
    }
}
const mapStateToProps = ( {curUser} ) => {
    return  {
        curUser,
    }
}
const mapDispatchToProps = ( dispatch ) => {
    return {
        addButton: (curUser) => {
            dispatch(addButton(curUser));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddingButtonsPage);