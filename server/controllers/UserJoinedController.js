let joinedUsers = [];

const addUser = ({ _socketId, _uid , email, firstName, lastName, isJoined }) => {
    let existingUser = joinedUsers.find((user) => user._uid === _uid && user.email === email);

    if(!_uid || !email) return { error: 'No uid and email found!' };
    if(existingUser) return { error: 'User is in the room already!' };

    let user = { _socketId, _uid, email, firstName, lastName, isJoined };

    joinedUsers.push(user);

    return { user };
}

const removeUser = (_socketId) => {
    let index = joinedUsers.findIndex((user) => user._socketId === _socketId);

  if(index !== -1) return joinedUsers.splice(index, 1)[0];
}

const getUser = (_socketId) => joinedUsers.find((user) => user._socketId === _socketId);

const getAllUser = (boolean) => joinedUsers.filter((user) => user.isJoined === boolean);

module.exports = { addUser, removeUser, getUser, getAllUser };