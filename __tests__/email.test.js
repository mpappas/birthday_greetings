// get the mock utilities from the mocked nodemailer
const { mock } = require('nodemailer');

const friend = {
  last_name: 'Dab',
  first_name: 'Clary',
  date_of_birth: '1985/02/18',
  email: 'mano.pappa@gmail.com',
};

test('Send an email using the mocked nodemailer', async () => {
  // load the module to test, it will use the mocked nodemailer internally
  const sendWishedEmail = require('../helpers/mailer');
  // send the email
  await sendWishedEmail(friend);
  // check the mock for our sent emails
  const sentEmails = mock.getSentMail();
  // there should be one
  expect(sentEmails.length).toBe(1);
  // and it should match the to address
  expect(sentEmails[0].to).toBe('mano.pappa@gmail.com');
});
