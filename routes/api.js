const express = require('express');

const birthdaysRouter = require('./bdays/bdays.router');

const api = express.Router();

api.use('/sendWishes', birthdaysRouter);

module.exports = api;
