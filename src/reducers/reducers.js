import { initialState } from '../index';
import * as type from '../actions/actions';

export function reducer ( state = initialState, action) {
    switch(action.type) {
        case type.ADD_USER: {
            const users = [...state.users, action.user];
            localStorage.setItem('users', JSON.stringify(users));
            return {
                ...state,
                users,
            };
        }
        case type.CHOOSE_USER: {
            localStorage.setItem('currentUser', JSON.stringify(action.user));
            return {
                ...state,
                curUser: action.user,
                curUserId: action.userId,
            }; 
        }
        case type.WRITE_HISTORY: {
            const index = state.users.findIndex((el) => el['id'] === action.curUser.id)
            const users = [...state.users.slice(0, index), action.curUser, ...state.users.slice(index + 1)];
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentUser', JSON.stringify(action.curUser));
            return {
                ...state,
                users,
                curUser: { ...action.curUser },
            };
        }
        case type.CLEAR_HISTORY: {
            const index = state.users.findIndex((el) => el['id'] === action.curUser.id)
            const users = [...state.users.slice(0, index), action.curUser, ...state.users.slice(index + 1)];
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentUser', JSON.stringify(action.currentUser));
            return {
                ...state,
                users,
                curUser: { ...action.curUser },
            };
        }
        case type.ADD_BUTTON: {
            const curUser = state.curUser;
            curUser.buttons.push(action.button);
            const index = state.users.findIndex((el) => el['id'] === curUser.id)
            const users = [...state.users.slice(0, index), curUser, ...state.users.slice(index + 1)];
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentUser', JSON.stringify(curUser));
            return {
                ...state,
                users,
                curUser: { ...curUser },
            };
        }
        default:
            return state;
    }
}