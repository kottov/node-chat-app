class Users {
    constructor () {
        this.users = [];
    }
    addUser (id, name, room) {
        var user = { id, name, room };
        this.users.push(user);
        return user;
    }
    removeUser (id) {
        var pos = this.users.map((user) => user.id ).indexOf(id);
        return pos === -1 ? null : this.users.splice(pos, 1)[0];
    }
    getUser (id) {
        return this.users.filter((user) => user.id === id)[0];
    }
    getUserList (room) {
        return this.users
            .filter((user) => user.room === room)
            .map((user) => user.name);
    }
}

module.exports = { Users };