import React from 'react';
import { Redirect } from 'react-router-dom'

import './AddingButtonsPage.css';

export default class AddingButtonsPage extends React.Component {
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
        let but = localStorage.getItem('buttons');
        let index = 0;

        if(but != null) {
            but = but.split(',');
            index = but.indexOf(this.props.button);
        } else {
            but = [];
        }

        but = [this.state.label, ...but.slice(index + 1)];
        localStorage.setItem('buttons', but);
        this.setState({ redirect: true });
    };
    render () {
        if(this.state.redirect){
            return <Redirect to='/'/>;
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