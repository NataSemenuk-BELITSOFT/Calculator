import { initialState } from '../index';
import * as type from '../actions/actions';

export function reducer ( state = initialState, action) {
    switch(action.type) {
        case type.ADD_USER: 
            const users = [...state.users, action.user];
            localStorage.setItem('users', JSON.stringify(users));
            return {
                ...state,
                users,
            };
        case type.CHOOSE_USER:
            localStorage.setItem('currentUser', JSON.stringify(action.user));
            return {
                ...state,
                currentUser: action.user,
                currentUserId: action.userId,
            }    
        case type.DEL_USER: 
            const index = state.users.findIndex((el) => el['id'] === action.currentUser.id)
            const user = [...state.users.slice(0, index), ...state.users.slice(index + 1)];
            localStorage.setItem('users', JSON.stringify(user));
            return {
                ...state,
                user,
            };
    
    
        default:
            return state;
    }
}