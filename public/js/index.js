var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'john',
        text: 'Hey'
    });
});

socket.on('newMessage', function(message) {
    console.log('New message recieved: ', message); 
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

