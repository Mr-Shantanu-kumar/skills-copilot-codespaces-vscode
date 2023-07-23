//Create web server
const express = require('express');
const app = express();

//Create a server
const http = require('http');
const server = http.createServer(app);

//Create socket
const socket = require('socket.io');
const io = socket(server);

//Create a path
const path = require('path');

//Create a port
const port = 3000;

//Create a public path
const publicPath = path.join(__dirname, './public');

//Create a static path
const staticPath = express.static(publicPath);

//Use static path
app.use(staticPath);

//Create a connection
io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    socket.on('message', (msg) => {
        console.log(msg);
        socket.broadcast.emit('message', msg);
    });
});

//Listen port
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

    