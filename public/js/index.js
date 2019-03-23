let socket = io();

socket.on('connect', function () {
  console.log('Connected to Server');

  socket.emit('createEmail', {
    from: 'shakib@gmail.com',
    text: 'Hello there',
    time: '23-03-2019'
  });
});

socket.on('disconnect', function () {
  console.log('Server was disconnected');
});

socket.on('newEmail', function (email) {
  console.log('New Email: ', email);
});
