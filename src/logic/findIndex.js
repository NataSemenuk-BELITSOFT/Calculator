export default function findIdx(users, userId) {
    return users.findIndex((el) => el['id'] === userId);
}
