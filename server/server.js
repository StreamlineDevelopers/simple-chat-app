const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

// setup 
const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const port = process.env.port || 5000;

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

// set up routers
const routes = require('./routers/routes.js');

// Route Middlewares
app.use('/api/auth', routes); 

app.listen(port, () => console.log(`Server started on port ${port}`));