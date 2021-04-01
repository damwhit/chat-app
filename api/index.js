const app = require('express')();
const http = require('http').Server(app);
// server-side
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  io.emit('connection success');
  socket.on('message', (message) => {
    io.emit('message', message);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});