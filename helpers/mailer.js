const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'emailbirthdaywishes@gmail.com',
    pass: 'Oliver12345%',
  },
});

async function sendWishedEmail(friend) {
  const { first_name, email } = friend;
  const mailOptions = {
    from: 'emailbirthdaywishes@gmail.com',
    to: email,
    subject: `Happy Birthdays ${first_name}`,
    text: 'Happy birtday to you my good friend!',
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
