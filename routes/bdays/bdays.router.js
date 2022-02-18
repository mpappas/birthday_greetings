const express = require('express');
const {
  // httpGetAllBirthdays,
  // httpGetBirthdayByname,
  // httpSendWishesYesterday,
  httpSendWishesToday,
  httpSendWishesPerName,
} = require('./bdays.controller');

const birthdaysRouter = express.Router();

// birthdaysRouter.get('/', httpGetAllBirthdays);
// birthdaysRouter.get('/:last_name&:first_name', httpGetBirthdayByname);
// birthdaysRouter.post('/for', httpSendWishesYesterday);
birthdaysRouter.get('/', httpSendWishesToday);
birthdaysRouter.get('/toFriend/', httpSendWishesPerName);

module.exports = birthdaysRouter;
