const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const responseTime = require('response-time');

const api = require('./routes/api');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use(morgan('combined'));
app.use(responseTime());

app.use(express.json());

app.use('/v1', api);

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Birthday Wishes Service! Your friends will love you!');
});

module.exports = app;
