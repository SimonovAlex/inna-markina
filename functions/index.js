const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

exports.sendEmail = functions.https.onCall((req, res ) => {
    console.log("===============================================================================================================");
    console.log("sendEmail");
    console.log('req', req);

    let transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "lkaluznyj@gmail.com",
            pass: "fokkerd1999"
        }
    });

    const message = {
        to: "trust@inna-markina.com", // А тут адрес, куда его отправить
        subject: 'Новая заявка с сайта inna-markina.com',
        html: `<h1>Новая заявка с сайта inna-markina.com</h1>
               <h2>Имя: ${req.name}</h2>
               <h2>Телефон: ${req.tel}</h2>
               <h2>Почта: ${req.email}</h2>`
    };

    transport.sendMail(message, (err, info) => {
        if(err){
            console.log(err);
        }else{
            console.log(info);
        }
    });
});
