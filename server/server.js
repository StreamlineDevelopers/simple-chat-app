const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// setup express
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

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
app.use("/", require("./routers/serverRouter")); 
