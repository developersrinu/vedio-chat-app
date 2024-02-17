const express = require('express');
const http = require('http'); // Require http module
const app = express();
const cors = require('cors');
const socketIo = require('socket.io');

app.use(cors());

const PORT = process.env.PORT || 5000;

// Create HTTP server and pass the Express app to it
const server = http.createServer(app);

// Create Socket.IO instance by passing the HTTP server
const io = socketIo(server, {
    cors: {
        origin: '*',
        methods: ['POST', 'GET']
    }
});

// Socket.IO event handlers
io.on('connection', (socket) => {
    // Emit the socket ID to the connected client
    socket.emit('me', socket.id);

    // Handle disconnect event
    socket.on('disconnect', () => {
        // Broadcast call ended event to all clients
        socket.broadcast.emit('callended');
    });

    // Handle call user event
    socket.on('calluser', ({ userToCall, signalData, from, name }) => {
        // Emit call user event to specific user
        io.to(userToCall).emit('calluser', { signal: signalData, from, name });
    });

    // Handle answer call event
    socket.on('answercall', (data) => {
        // Emit call accepted event to specific user
        io.to(data.to).emit('callaccepted', data.signal);
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
