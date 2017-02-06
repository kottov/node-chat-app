const expect = require('expect');

const { Users } = require('./users');

var users;

beforeEach(() => {
    users = new Users();
    users.users = [
        { id: '1', name: 'john', room: 'first' },
        { id: '2', name: 'jane', room: 'second' },
        { id: '3', name: 'jim',  room: 'first' }
    ];
});

describe('Users', () => {
    it('should add new user', () => {
        var users = new Users();
        var user = { id: '123', name: 'john', room: 'main' };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove user', () => {
         var userId = '1';
         var removedUser = users.removeUser(userId);

         expect(removedUser.id).toBe(userId);
         expect(users.users.length).toBe(2);
    });

    it('should not remove user if id is incorrect', () => {
         var removedUser = users.removeUser('99');
         
         expect(removedUser).toNotExist();
         expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
         var user = users.getUser('1');

         expect(user).toEqual(users.users[0]);
         expect(users.users).toEqual(users.users);
    });

    it('should not find user', () => {
         var user = users.getUser('0');

         expect(user).toNotExist();
         expect(users.users).toEqual(users.users);
    });

    it('should return names for "first" room', () => {
        var userList = users.getUserList(users.users[0].room);

        expect(userList).toEqual([users.users[0].name, users.users[2].name]);
    }); 

    it('should return names for "second" room', () => {
        var userList = users.getUserList(users.users[1].room);

        expect(userList).toEqual([users.users[1].name]);
    });

    it('should get existing rooms list', () => {
        var rooms = users.getRoomsList();
        expect(rooms.length).toBe(2);
    });
});