import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App/App.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { reducer } from './reducers/reducers.js'

export const initialState = {
    users: JSON.parse(localStorage.getItem('users')) === null ? [] : JSON.parse(localStorage.getItem('users')), 
    curUser: JSON.parse(localStorage.getItem('currentUser')),
    curUserId: null,
}

export const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDom.render( 
    <Provider store = { store }>
        <App />
    </Provider>, 
    document.getElementById('root')
);