const { friendsToWish } = require('../../models/bdays.model');

const sendWishedEmail = require('../../helpers/mailer');

async function httpSendWishesToday(req, res) {
  let friendsEmailSent = [];
  friendsToWish.forEach(async (friend) => {
    friendsEmailSent.push(friend.first_name);
    await sendWishedEmail(friend);
  });
  console.log('friendsEmailSent', friendsEmailSent);
  return res.status(200).json(friendsEmailSent);
}

async function httpSendWishesPerName(req, res) {
  const first_name = req.query.name;
  const last_name = req.query.lastName;
  let response;

  let friendToWish = friendsToWish.find(
    (friend) => friend.first_name === first_name && friend.last_name === last_name
  );

  if (friendToWish) {
    await sendWishedEmail(friendToWish);
    response = `We've sent your wishes to your friend ${friendToWish.first_name}`;
  } else {
    response = 'You friend is not in the list of you have a typo';
  }

  return res.status(200).json(response);
}

module.exports = { httpSendWishesToday, httpSendWishesPerName };
