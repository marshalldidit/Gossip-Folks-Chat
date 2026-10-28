// Initialize the express 'app' object
let express = require('express');
let app = express();
app.use('/', express.static('public'));

// Initialize the HTTP server and socket.io
let http = require('http')
let server = http.createServer(app);
let port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Initialize socket.io
let io = require('socket.io')
io = new io.Server(server);

// Listen for socket connections
io.sockets.on('connection', function(socket) {
    console.log('We have a new client: ' + socket.id);

    // Listen for 'msg' events from the client
    socket.on('msg', function(data) {
        // Data can be strings, numbers, objects, arrays, etc. In this case, we expect an object with 'name' and 'msg' properties.
        console.log("Received a 'msg' event");
        console.log(data);

        // Send a response to all clients connected to the server, including the sender. This is done using the 'emit' method on the 'io.sockets' object, which broadcasts the message to all connected clients.
        io.sockets.emit('msg', data);
    });

    // Listen for the 'disconnect' event
    socket.on('disconnect', function() {
        console.log('Client has disconnected: ' + socket.id);
    });
});