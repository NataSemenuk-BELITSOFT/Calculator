export default function createUser (userName) {
    let userId = parseInt(localStorage.getItem('id'));
    if(!userId) {
        userId = 0;
    }
    const newUser = {
        name: userName, 
        buttons: [],
        history: [],
        id: userId,
    };
    userId++;
    localStorage.setItem('id', userId);
    return newUser;
}