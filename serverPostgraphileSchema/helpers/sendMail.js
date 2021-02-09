var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  port:process.env.EMAIL_PORT,
  auth: { 
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

var mailOptions = {
  from: process.env.EMAIL_FROM,
  to: 'myfriend@yahoo.com',
  subject: 'Invite to join Room',
  text: 'Sending with node mailer'
};

const sendEmailToUser = async (inviteId,email) => {
    mailOptions = {
      ...mailOptions,
      to: email,
      text: `You have been invited to join chat Room, follow the link to find out more:
      https://linkto.fake/${inviteId}`
    }

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    })
}

module.exports = sendEmailToUser