import { initialState } from '../index';
import * as type from '../actions/actions';

export function reducer ( state = initialState, action) {
    switch(action.type) {
        case type.ADD_USER: 
            const user = [state.users, action.user];
            localStorage.setItem('users', JSON.stringify(user));
            return {
                ...state,
                user,
            };
        default:
            return state;
    }
}