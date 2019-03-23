const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname + '/../public');
const port = process.env.PORT || 3000;

let app = express();
app.use(express.static(publicPath));
let server = http.createServer(app);
let io = socketIO(server);

io.on('connection', function (socket) {
  console.log('New User connected');

  socket.emit('newEmail', {
    from: 'ialom@gmail.com',
    text: 'Hello Tomorrow',
    time: '23-03-2019'
  });

  socket.on('createEmail', function (data) {
    console.log('createEmail', data);
  })

  socket.on('disconnect', function () {
    console.log('User disconnected from server');
  });
});

server.listen(port, function () {
  console.log(`Server is up on PORT: ${port}`);
});
