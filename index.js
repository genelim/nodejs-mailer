var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
            user: 'test@cloudtruck.com.my',
            clientId: '54200064884-grait7r71q27aa959o2frplu8qlp5m2d.apps.googleusercontent.com',
            clientSecret: 'xzCHxg0o85_GdltjYPBSxzOe',
            refreshToken: '1/cL1aHEFakoOs8bl5t7-v3F4brguNJlwh92bUpCRRwi4',
            accessToken: 'ya29.pAII6pPuiop7t22rsbT0DdxTrcc6vsxy2Xx2xN2nl9yhInfp2xq88f0ZAqt91P0mCQ'
        })
    }
});

var mailOptions = {
    from: '"Fred Foo 👥" <test@cloudtruck.com.my>', // sender address
    to: 'wernminlim@hotmail.com, dennis.denden.lee@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world 🐴', // plaintext body
    html: '<b>Hello world 🐴</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log('d'+error);
    }
    console.log('Message sent: ' + info.response);
});