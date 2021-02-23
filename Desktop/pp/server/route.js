const Route = require("express").Router();
const nodemailer = require("nodemailer");
//send mail
const SendMail = (message) => {
  const Tranporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: "MESSAGE FROM PORTFOLIO",
    html: message,
  };

  Tranporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("mail sent!!!!!!!!!");
    }
  });
};

Route.post("/", async (req, res) => {
  try {
    const { message, email, name } = req.body;
    const msg = `
      <h1>${name}  send you this below message via your porfolio website</h1>
       <p>${message}</>
       <P>you can response via ${email}</>
      `;
    await SendMail(msg);

    res.json({ msg: "message send successful" });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = Route;
