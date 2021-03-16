const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

//joined users controller
const { addUser, removeUser, getUser, getAllUser} = require('./controllers/UserJoinedController.js');

// socket io // created a helper for socket io that return its current values.
const server = require('http').createServer(app);
// socket io
const io = require('socket.io')(server, 
//   {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   }
// }
);

require('dotenv').config();

// setup 
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 5000;

// setup mongoose //connection to mongoDB
mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log('MongoDB connection established');
  }
);

io.on('connect', (socket) => {
 
  socket.on('join', ({  _uid, firstName, lastName, email }) => {
    
    const { error, user } = addUser({ _socketId: socket.id, _uid , firstName, lastName, email, isJoined:true });

    if(error) return console.log(error);

    socket.emit('welcome', { user: 'admin', content: `Welcome to the chat ${user.firstName}!` });
    socket.broadcast.emit('anouncement', { user: 'admin', content: `${user.firstName} has joined the chat.` });
    io.emit('onlineUsers',  {user: getAllUser(true)});
  })

  socket.on('disconnect', () => {

    const user = removeUser(socket.id);
    
    if(user) {
      io.emit('anouncement', { user: 'admin', content: `${user.firstName} has left the chat.` });
      io.emit('onlineUsers', {user: getAllUser(true)});
    }

  });
});

// set up routers
const routes = require('./routers/routes.js');

// Route Middlewares
app.use('/api/auth', routes); 

exports.io = io;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))