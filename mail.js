const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    secure:false,
    auth: {
       user: '827e33590a2d4a',
       pass: '227c867a6f9217'
    }
});

const mailOptions = {
  from: 'jsardon@temperies.com',
  to: 'mangulo@temperies.co',
  subject: 'Nice Nodemailer test',
  text: 'Hey there, it’s our first message sent with Nodemailer ;) ',
  attachments: [
    {
      filename:"attach.txt",
      // content:"attach.txt",
      // content: new Buffer('attach.txt','utf-8')
      path:"./attach/attach.txt",
      // contentType: 'text/plain'
    }
  ]
};

transport.sendMail(mailOptions, function(err, info) {
    if (err) {
      return console.log(err)
    } else {
      console.log('Menssage sent: %s',info, ' - ', info.messageId);
    }
});
