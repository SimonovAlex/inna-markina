const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

exports.sendEmail = functions.https.onCall((req, res ) => {
    console.log("===============================================================================================================");
    console.log("sendEmail");
    console.log('req', req);

    let transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "sasha130720@gmail.com",
            pass: "ewsvwauxhocspoka"
        }
    });

    const message = {
        to: "trust@inna-markina.com", // А тут адрес, куда его отправить
        subject: 'this is new lead',
        html: `<h1>this is new lead from site</h1>
               <h2>Name: ${req.name}</h2>
               <h2>phone: ${req.tel}</h2>
               <h2>email: ${req.email}</h2>`
    };

    transport.sendMail(message, (err, info) => {
        if(err){
            console.log(err);
        }else{
            console.log(info);
        }
    });
});
