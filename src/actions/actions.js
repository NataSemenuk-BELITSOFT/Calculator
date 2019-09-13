export const ADD_USER = 'ADD_USER';
export const CHOOSE_USER = 'CHOOSE_USER';
export const DEL_USER = 'DEL_USER';
export const WRITE_HISTORY = 'WRITE_HISTORY';
export const CLEAR_HISTORY = 'CLEAR_HISTORY';
export const ADD_BUTTON = 'ADD_BUTTON';

export function addUser(user) {
    return {
        type: ADD_USER,
        user,
    }
}
export function chooseUser( user, userId ) {
    return {
        type: CHOOSE_USER,
        user,
        userId,
    }
}

export function deleteUser( userId ) {
    return {
        type: DEL_USER,
        userId,
    }
}

export function writeHistory( curUser ) {
    return {
        type: WRITE_HISTORY,
        curUser,
    }
}

export function clearHistory( curUser ) {
    return {
        type: CLEAR_HISTORY,
        curUser,
    }
}

export function addButton( button ) {
    return {
        type: ADD_BUTTON,
        button,
    };
}