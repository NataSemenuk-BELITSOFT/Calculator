export const ADD_USER = 'ADD_USER';
export const CHOOSE_USER = 'CHOOSE_USER';
export const DEL_USER = 'DEL_USER';

export function addUser(user) {
    return {
        type: ADD_USER,
        user,
    }
}
export function chooseUser(user, userId) {
    return {
        type: CHOOSE_USER,
        user,
        userId,
    }
}

export function deleteUser(userId) {
    return {
        type: DEL_USER,
        userId,
    }
}