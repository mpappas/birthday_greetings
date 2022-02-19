const nodemailer = require('nodemailer');
require('dotenv').config({ path: __dirname + '/../.env' });

const sender_email = process.env.SENDER_EMAIL;
const sender_email_pwd = process.env.SENDER_EMAIL_PWD;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: sender_email,
    pass: sender_email_pwd,
  },
});

async function sendWishedEmail(friend) {
  const { first_name, email } = friend;
  const mailOptions = {
    from: sender_email,
    to: email,
    subject: 'Happy Birthday!',
    text: `Happy birtday, dear ${first_name}!`,
  };

  console.log('mailOptions', mailOptions);

  const emailLog = transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  return emailLog;
}

module.exports = sendWishedEmail;
