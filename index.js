"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  secure: false,
  auth: {
    user: 'd34bfa859295b5',
    pass: 'bb12b8190784e7'
  }
});
async function main() {
  const info = await transporter.sendMail({
    from: 'Magic Elves <from@example.com>', // sender address
    to: "Mailtrap Inbox <to@example.com>", // list of receivers
    subject: "Test Mail", // Subject line
    text: "Test the plain text", // plain text body
    html: "<b>test the HTML text mail</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);
