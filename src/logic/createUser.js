export default function createUser (userName) {
    const newUser = {
        name: userName, 
        buttons: [],
        history: []
    };
    return newUser;
}