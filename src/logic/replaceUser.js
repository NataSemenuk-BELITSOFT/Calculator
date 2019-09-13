import findIndex from "./findIndex";
/**
 * @param {Array} users: array of users that are objects
 * @param {Object} currentUser: object of current user
 * @returns {Array} array of edited users
 * */
export default function replaceUser(users, curUser) {
    const index = findIndex(users, curUser.id);
    const editedUsers = [...users.slice(0, index), curUser,...users.slice(index + 1)];
    localStorage.setItem('users', JSON.stringify(editedUsers));
    localStorage.setItem('currentUser', JSON.stringify(curUser));
    return editedUsers;
};