const path = require('path');
const http = require('http');

const express = require('express');
const socketIO = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

io.on('connect', (socket) => {
    console.log('New user connected');

    socket.on('createMessage', (message) => {
        message.createdAt = new Date().getTime();
        console.log('New message created: ', message);
        
        socket.emit('newMessage', { message });
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});